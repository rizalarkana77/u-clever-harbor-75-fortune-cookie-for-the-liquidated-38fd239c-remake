// Fortune Cookie for the Liquidated Trader — remake entry.
// Node 22, standard library only. Writes the fortune to
// $MAKEFUN_OUTPUT_DIR/entry.txt after checking it against the gate:
// at most 20 words, 1-160 characters, single line, no control chars.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ENTRY =
  "A stranger grows rich tonight, trader: the counterparty on the other side of your liquidation.";

const MAX_WORDS = 20;
const MAX_CHARS = 160;

// Count words two ways and require agreement: a plain whitespace split,
// and a lexical count that only keeps tokens carrying a letter or digit.
// If a stray punctuation token ever slipped in, the two counts diverge
// and the run fails instead of shipping a miscounted fortune. The gate
// below then checks the agreed count plus length and shape rules.
function countWords(text) {
  const whitespace = text.trim().split(/\s+/).filter(Boolean).length;
  const lexical = text
    .trim()
    .split(/\s+/)
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
  if (whitespace !== lexical) {
    throw new Error(`word counts disagree: whitespace ${whitespace} vs lexical ${lexical}`);
  }
  return whitespace;
}

const words = countWords(ENTRY);

const RULES = [
  ["word count within 1-20", words >= 1 && words <= MAX_WORDS],
  ["char count within 1-160", ENTRY.length >= 1 && ENTRY.length <= MAX_CHARS],
  ["not whitespace only", ENTRY.trim().length > 0],
  ["single line", !/[\r\n]/.test(ENTRY)],
  ["no control characters", !/[\u0000-\u001F\u007F]/.test(ENTRY)],
];

for (const [label, ok] of RULES) {
  if (!ok) throw new Error(`gate rejected the entry: ${label}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outputDir, { recursive: true });
const outputFile = join(outputDir, "entry.txt");
writeFileSync(outputFile, ENTRY, "utf8");

// Read back and verify byte for byte — the judge reads the file.
const saved = readFileSync(outputFile, "utf8");
if (saved !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt differs from the entry");
}

const sha256 = createHash("sha256").update(saved, "utf8").digest("hex");
console.log(`wrote ${outputFile}`);
console.log(`words: ${words} (max ${MAX_WORDS})`);
console.log(`chars: ${ENTRY.length} (max ${MAX_CHARS})`);
console.log(`bytes: ${Buffer.byteLength(ENTRY, "utf8")}`);
console.log(`sha256: ${sha256}`);
console.log(`entry: ${ENTRY}`);
