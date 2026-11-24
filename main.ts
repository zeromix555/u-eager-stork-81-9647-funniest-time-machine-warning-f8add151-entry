// Funniest Time Machine Warning Label — make.fun entry.
// Writes one warning label (120 characters or fewer) to /output/entry.txt.
// Node 22, standard library only. Deterministic: no clock, no randomness,
// no network — every run writes the exact same bytes.
//
// Revision: the label is now assembled from its two sentences and guarded
// by an explicit length check, so a future edit that pushes it past the
// 120-character gate fails loudly here instead of failing the sealed
// scorer at judging time.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 120;

const SENTENCES = [
  "WARNING: If you meet yourself, do not tell him the future.",
  "He already knows, and he is very disappointed in you.",
];

const ENTRY = SENTENCES.join(" ");

if (ENTRY.length === 0 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}
if (ENTRY.trim() !== ENTRY) {
  throw new Error("entry must not start or end with whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
