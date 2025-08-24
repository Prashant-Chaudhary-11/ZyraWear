import fs from "fs";

// Read JSON file
fs.readFile("Store.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse JSON
    let dresses = JSON.parse(data);

    // Find the maximum existing ID (if any)
    let maxId = dresses.reduce((max, item) => {
      return item.id && Number.isInteger(item.id) ? Math.max(max, item.id) : max;
    }, 0);

    // Add IDs to items without an ID
    dresses = dresses.map((item, index) => {
      if (!item.id) {
        maxId += 1;
        return { id: maxId, ...item };
      }
      return item;
    });

    // Save updated JSON back to file
    fs.writeFile("dresses_with_id.json", JSON.stringify(dresses, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("✅ IDs added (continuing from last ID) and saved to dresses_with_id.json");
    });
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
