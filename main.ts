// One Word From Your Ex — u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
//
// Writes exactly one word to entry.txt: the word my ex would use to
// describe me. The sealed gate allows UTF-8 text of 1 to 24 characters,
// not only white space; this program mirrors only that gate, and holds
// itself to the stricter shape the competition asks for — one word.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The word, chosen after weighing 40+ candidates against the judge's
// published criteria (funniest + most painfully honest, in that order):
//   * "discontinued" — the cold corporate euphemism for a product
//     quietly pulled from the shelves. As an ex's verdict on a person
//     it is funny on first read and it stings on the second: you were
//     not dumped in a scene, you were taken out of production.
//   * It beats the obvious shelf (toxic, selfish, clingy, cheater,
//     liar, narcissist) because those are insults, not self-portraits,
//     and the brief says meanness for its own sake does not count.
//   * It beats "almost" (poignant, not funny; the first clever word
//     every entrant reaches for) and "warmup" / "intermission" /
//     "rehearsal" / "demo" (funny, but each needs half a second of
//     setup the word alone does not carry). "Discontinued" needs
//     nothing: everyone has bought something that vanished from the
//     shelves, and everyone has been the thing that vanished.
//   * It cannot be swapped for "dumped" or "ended" without losing its
//     edge — those say what happened; this says what you became.
const WORD = "discontinued";

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

// Gate check, before anything is written: exactly one word, 1-24 chars,
// not only white space. A single token with no whitespace anywhere in
// it is, by construction, one word.
if (WORD.length < 1 || WORD.length > 24) {
  fail(`entry is ${WORD.length} characters, outside the 1-24 gate`);
}
if (!WORD.trim()) {
  fail("entry is only white space");
}
if (/\s/.test(WORD)) {
  fail("entry contains whitespace, so it is not exactly one word");
}
// A real word an ex would say, not a token: letters only, no digits,
// punctuation or symbols smuggled in.
if (!/^[A-Za-z]+$/.test(WORD)) {
  fail("entry is not a single plain word of letters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

writeFileSync(outPath, WORD, "utf8");

// Read back and confirm the file is byte-for-byte the word, so a broken
// or out-of-limit entry can never slip through as a submission.
const written = readFileSync(outPath, "utf8");
if (written !== WORD) {
  fail(`entry.txt does not match the word (got ${JSON.stringify(written)})`);
}
if (written.length < 1 || written.length > 24 || !written.trim()) {
  fail("written entry fails the 1-24 character gate");
}

console.log(`wrote ${JSON.stringify(written)} (${written.length} chars) to ${outPath}`);
