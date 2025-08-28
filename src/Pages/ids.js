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

    // Add IDs and random discount
    dresses = dresses.map((item) => {
      // Assign ID if missing
      if (!item.id) {
        maxId += 1;
        item.id = maxId;
      }

      // Assign random discount between 10–50
      if (!item.discount) {
        item.discount = Math.floor(Math.random() * (50 - 10 + 1)) + 10; 
        // Example: 23 means 23%
      }

      return item;
    });

    // Save updated JSON back to file
    fs.writeFile("dresses_with_id.json", JSON.stringify(dresses, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("✅ IDs + random discounts (10–50%) added and saved to dresses_with_id.json");
    });
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
