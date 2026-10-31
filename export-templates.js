// Writes every template as PNG files into a folder on this PC.
// Run: node export-templates.js [out-dir]   (default: exports/templates)
// Layout: <out>/<scale>x/<category>/<name>.png ; element templates get one file per element (<name>_火.png ...).
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

global.window = {};
require('./templates.js');
const { CREDOT_TEMPLATES: T, CREDOT_ELEMENTS: ELEMENTS, CREDOT_LEGEND: LEGEND } = window;
const SCALES = [1, 8];
const out = path.resolve(process.argv[2] || path.join(__dirname, 'exports', 'templates'));

const rowsOf = (t) => t.rows || t.m.map((r) => r + [...r].reverse().join(''));
const hexAt = (ch, el) => LEGEND[ch] || (el && el.c['123'.indexOf(ch)]) || null;

const CRC = new Int32Array(256).map((_, n) => { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c; });
const crc32 = (buf) => { let c = -1; for (const b of buf) c = CRC[(c ^ b) & 255] ^ (c >>> 8); return (c ^ -1) >>> 0; };
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
}
// RGBA PNG of the template drawn at `s` times its size.
function png(rows, el, s) {
  const w = rows[0].length * s, h = rows.length * s, raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) {
    raw[y * (w * 4 + 1)] = 0;
    for (let x = 0; x < w; x++) {
      const hex = hexAt(rows[Math.floor(y / s)][Math.floor(x / s)], el), o = y * (w * 4 + 1) + 1 + x * 4;
      if (hex) { raw[o] = parseInt(hex.slice(1, 3), 16); raw[o + 1] = parseInt(hex.slice(3, 5), 16); raw[o + 2] = parseInt(hex.slice(5, 7), 16); raw[o + 3] = 255; }
    }
  }
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk('IHDR', ihdr), chunk('IDAT', zlib.deflateSync(raw)), chunk('IEND', Buffer.alloc(0))]);
}

let files = 0;
for (const t of T) {
  const rows = rowsOf(t), elem = rows.some((r) => /[123]/.test(r));
  const variants = elem ? ELEMENTS.map((e) => [`${t.name}_${e.name}`, e]) : [[t.name, null]];
  for (const s of SCALES) {
    const dir = path.join(out, `${s}x`, t.cat.replace(/[\\/:*?"<>|]/g, '_'));
    fs.mkdirSync(dir, { recursive: true });
    for (const [name, el] of variants) { fs.writeFileSync(path.join(dir, name.replace(/[\\/:*?"<>|]/g, '_') + '.png'), png(rows, el, s)); files++; }
  }
}
console.log(`${files} files -> ${out}`);
