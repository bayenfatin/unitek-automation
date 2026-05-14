import https from "https";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "../public/images");

const images = [
  {
    url: "https://images.pexels.com/photos/5726789/pexels-photo-5726789.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "supervision-mobile.jpg",
    label: "OFF-01 — Technicien tablette / formulaires numériques",
  },
  {
    url: "https://images.pexels.com/photos/7947541/pexels-photo-7947541.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "supervision-dashboard.jpg",
    label: "OFF-02 — Data analytics / dashboard Power BI",
  },
  {
    url: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "supervision-scada.jpg",
    label: "OFF-03 — Écrans monitoring / connectivité SCADA",
  },
  {
    url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1400",
    file: "supervision-amdec.jpg",
    label: "OFF-04 — Réunion équipe / amélioration continue AMDEC",
  },
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close(); fs.unlink(dest, () => {});
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close(); fs.unlink(dest, () => {});
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      res.pipe(file);
      file.on("finish", () => { file.close(); resolve(); });
    }).on("error", (err) => { file.close(); fs.unlink(dest, () => {}); reject(err); });
  });
}

for (const img of images) {
  const dest = path.join(outDir, img.file);
  process.stdout.write(`${img.label}... `);
  try {
    await download(img.url, dest);
    const kb = (fs.statSync(dest).size / 1024).toFixed(0);
    console.log(`OK (${kb} KB)`);
  } catch (e) {
    console.log(`FAILED — ${e.message}`);
  }
}
