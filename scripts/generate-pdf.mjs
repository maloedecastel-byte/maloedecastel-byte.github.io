// Génère public/cv.pdf à partir de public/cv.html (mise en page A4).
// Usage : pnpm pdf
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import path from "node:path";

const source = path.resolve("public/cv.html");
const target = path.resolve("public/cv.pdf");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(pathToFileURL(source).href, { waitUntil: "load" });

await page.pdf({
	path: target,
	format: "A4",
	printBackground: true,
	preferCSSPageSize: true,
	margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

await browser.close();
console.log(`PDF généré : ${target}`);
