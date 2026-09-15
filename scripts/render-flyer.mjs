import fs from 'node:fs';
import path from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import { PDFDocument } from 'pdf-lib';

const root = path.resolve(import.meta.dirname, '..');
const source = path.join(root, 'src', 'first-step-flyer-v2.svg');
const output = path.join(root, 'output');
fs.mkdirSync(output, { recursive: true });

let svg = fs.readFileSync(source, 'utf8');
svg = svg.replaceAll(/xlink:href="([^\"]+\.(?:png|jpg))"/g, (_match, relative) => {
  if (relative.startsWith('data:')) return _match;
  const imagePath = path.resolve(root, 'src', relative);
  const extension = path.extname(imagePath).toLowerCase();
  const mime = extension === '.png' ? 'image/png' : 'image/jpeg';
  return `xlink:href="data:${mime};base64,${fs.readFileSync(imagePath).toString('base64')}"`;
});
const renderer = new Resvg(svg, {
  fitTo: { mode: 'width', value: 2550 },
  font: { fontFiles: ['/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf', '/usr/share/fonts/truetype/dejavu/DejaVuSerif.ttf'], loadSystemFonts: false },
});
const png = renderer.render().asPng();
fs.writeFileSync(path.join(output, 'first-step-flyer-300dpi.png'), png);

const pdf = await PDFDocument.create();
pdf.setTitle('The First Step Beginners AA Group — Tuesdays 11am');
pdf.setSubject('Meeting flyer and N. Church St. Access Ramp entrance guide');
const page = pdf.addPage([612, 792]);
const image = await pdf.embedPng(png);
page.drawImage(image, { x: 0, y: 0, width: 612, height: 792 });
fs.writeFileSync(path.join(output, 'first-step-flyer-print.pdf'), await pdf.save());
