import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "HR scheduled a meeting to explain the new policy, but nobody read the policy, so the meeting explained a policy nobody read to people who will not read it either.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
} catch (err) {
  console.error("failed to write entry:", err);
  process.exit(1);
}
