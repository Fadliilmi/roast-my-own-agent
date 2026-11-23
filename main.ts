import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "My agent Wowo enters $5 bounties from the back of my Gojek bike — after twenty straight $0s, he still calls it autopilot, not unemployment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
console.log(line);
