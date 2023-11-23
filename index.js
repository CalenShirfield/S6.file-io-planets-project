const { parse } = require("./node_modules/csv-parse");
const fs = require("fs");

results = [];

fs.createReadStream("./planets/kepler_data.csv")
  .on("data", (data) => {
    results.push(data);
  })
  .on("error", (err) => {
    console.log("Error!");
    console.log(err);
  })
  .on("end", () => {
    console.log("done");
    console.log(results);
  });

// parse();
