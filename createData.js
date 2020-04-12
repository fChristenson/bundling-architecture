const fs = require("fs");

const iterations = 1_000;

const result = [];

for (let i = 0; i < iterations; i++) {
  result.push(i);
}

fs.writeFileSync("./data.json", JSON.stringify(result));
