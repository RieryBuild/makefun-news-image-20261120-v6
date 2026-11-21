// news-image-20261120 v6 — "The Day the Map Moved"
// Entry program: copies the pre-rendered entry.png that ships in this repo
// to /output/entry.png. Node 22 stdlib only, no network, deterministic:
// the same entry.png bytes always produce the same output bytes.
import { copyFileSync, existsSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const src = join(here, "entry.png");
const outDir = "/output";
const dst = join(outDir, "entry.png");

if (!existsSync(src)) {
  throw new Error("entry.png missing next to main.ts");
}
mkdirSync(outDir, { recursive: true });
copyFileSync(src, dst);

// Verify the copy: identical size, identical bytes, valid PNG signature.
// Byte equality is the determinism proof: two runs of this program over the
// same entry.png must produce byte-identical /output/entry.png files.
const srcSize = statSync(src).size;
const dstSize = statSync(dst).size;
if (srcSize !== dstSize) {
  throw new Error(`size mismatch after copy: ${srcSize} vs ${dstSize}`);
}
const srcBytes = readFileSync(src);
const dstBytes = readFileSync(dst);
if (!srcBytes.equals(dstBytes)) {
  throw new Error("output bytes differ from entry.png");
}
const head = readFileSync(dst).subarray(0, 8);
const pngSig = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!head.equals(pngSig)) {
  throw new Error("output is not a PNG file");
}
console.log(`wrote ${dst} (${dstSize} bytes)`);
