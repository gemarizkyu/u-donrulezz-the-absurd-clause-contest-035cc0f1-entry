// The Absurd Clause Contest — make.fun bounty entry.
// SPDX-License-Identifier: MIT
//
// phrased as a term-of-service clause, to /output/entry.txt.
//
// Deterministic by design: no model calls, no network, no wall clock,
// no randomness. The same run always writes the same bytes, so the
// replay matches the live run.
import { mkdirSync, writeFileSync } from "node:fs";

// The clause. Deadpan legal boilerplate ("Clause 12", "consent to the
// collection", "remain Company property") until the absurdity lands:
// your sighs are collected for quality assurance and replayed at
// staff meetings. Concrete, specific, self-contained — the joke needs
// no setup outside the line.
const LINE =
  "Clause 12: by accepting these Terms, you consent to the collection of your sighs for quality-assurance purposes; all sighs remain Company property and may be replayed at staff meetings.";

const OUTPUT_PATH = "/output/entry.txt";
const OUTPUT_DIR = "/output";

const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (!LINE.trim()) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_PATH, LINE, "utf8");
console.log(`wrote ${chars} characters to ${OUTPUT_PATH}`);
