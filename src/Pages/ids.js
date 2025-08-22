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

    // Add IDs
    dresses = dresses.map((item, index) => ({
      id: index + 1, // unique ID
      ...item
    }));

    // Save updated JSON back to file
    fs.writeFile("dresses_with_id.json", JSON.stringify(dresses, null, 2), (err) => {
      if (err) {
        console.error("Error writing file:", err);
        return;
      }
      console.log("✅ IDs added and saved to dresses_with_id.json");
    });
  } catch (parseError) {
    console.error("Error parsing JSON:", parseError);
  }
});
