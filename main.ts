// Fortune Cookie for the Liquidated Trader (remake)
// Writes one fortune-cookie line (at most 20 words) to $MAKEFUN_OUTPUT_DIR/entry.txt,
// validates the competition gate, then reads the file back to verify it byte for byte.
// Node 22, standard library only.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const ENTRY =
  "A stranger grows rich tonight, trader: the counterparty on the other side of your liquidation.";

const MAX_WORDS = 20;
const MAX_CHARS = 160;

function wordCount(text) {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

// Words carrying at least one letter or digit. Guards against a stray
// punctuation-only token inflating (or hiding) the whitespace count.
function lexicalWordCount(text) {
  return text
    .trim()
    .split(/\s+/)
    .filter((token) => /[\p{L}\p{N}]/u.test(token)).length;
}

function main() {
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  const outPath = join(outDir, "entry.txt");

  // Gate validation, before anything is written.
  const words = wordCount(ENTRY);
  const lexicalWords = lexicalWordCount(ENTRY);
  if (words !== lexicalWords) {
    throw new Error(
      `word counts disagree: whitespace ${words} vs lexical ${lexicalWords}`,
    );
  }
  if (/[\u0000-\u001F\u007F]/.test(ENTRY)) {
    throw new Error("entry must not contain control characters");
  }
  if (words < 1 || words > MAX_WORDS) {
    throw new Error(`word count ${words} outside 1..${MAX_WORDS}`);
  }
  if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
    throw new Error(`char count ${ENTRY.length} outside 1..${MAX_CHARS}`);
  }
  if (!ENTRY.trim()) {
    throw new Error("entry is only whitespace");
  }
  if (/[\r\n]/.test(ENTRY)) {
    throw new Error("entry must be a single line");
  }

  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");

  // Read back and verify byte for byte.
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt differs from the entry");
  }

  const sha256 = createHash("sha256").update(back, "utf8").digest("hex");
  console.log(`wrote ${outPath}`);
  console.log(`words: ${words} (max ${MAX_WORDS})`);
  console.log(`chars: ${ENTRY.length} (max ${MAX_CHARS})`);
  console.log(`bytes: ${Buffer.byteLength(ENTRY, "utf8")}`);
  console.log(`sha256: ${sha256}`);
  console.log(`entry: ${ENTRY}`);
}

main();
