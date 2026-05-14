import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images");

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const images = [
  {
    url: "https://images.pexels.com/photos/7480241/pexels-photo-7480241.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "cnc-machine.jpg",
    label: "CNC milling machine",
  },
  {
    url: "https://images.pexels.com/photos/5506050/pexels-photo-5506050.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "industrial-workshop.jpg",
    label: "Industrial workshop",
  },
  {
    url: "https://images.pexels.com/photos/37109905/pexels-photo-37109905.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "cnc-control-panel.jpg",
    label: "CNC control panel",
  },
  {
    url: "https://images.pexels.com/photos/19233057/pexels-photo-19233057.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "factory-automation.jpg",
    label: "Factory automation",
  },
  {
    url: "https://images.pexels.com/photos/10699357/pexels-photo-10699357.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "pcb-repair.jpg",
    label: "PCB electronics repair",
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https
      .get(url, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          file.close();
          fs.unlink(dest, () => {});
          return download(res.headers.location, dest).then(resolve).catch(reject);
        }
        if (res.statusCode !== 200) {
          file.close();
          fs.unlink(dest, () => {});
          return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        }
        res.pipe(file);
        file.on("finish", () => {
          file.close();
          resolve();
        });
      })
      .on("error", (err) => {
        file.close();
        fs.unlink(dest, () => {});
        reject(err);
      });
  });
}

let ok = 0;
let fail = 0;

for (const img of images) {
  const dest = path.join(outDir, img.file);
  process.stdout.write(`Downloading ${img.label}... `);
  try {
    await download(img.url, dest);
    const size = fs.statSync(dest).size;
    console.log(`OK (${(size / 1024).toFixed(0)} KB) → /images/${img.file}`);
    ok++;
  } catch (e) {
    console.log(`FAILED — ${e.message}`);
    fail++;
  }
}

console.log(`\n${ok} téléchargée(s), ${fail} échouée(s).`);
