// Fortune Cookie Wisdom for Developers
// u-gentle-koala-60-fortune-cookie-wisdom-for-developers-025ccf44
//
// Writes one original fortune-cookie line for a software developer to
// /output/entry.txt. The text is fixed: no network, no randomness, no clock,
// so every run produces byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "The legacy code you fear was written by someone who feared it too, and left you a map in the comments."; // 102 chars, one line, no trailing newline

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
