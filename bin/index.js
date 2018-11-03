#!/user/bin/env node

const run = require("run-headless");
const path = require("path");
const pupeteer = require("puppeteer");

const htmlPath = path.resolve(__dirname, "index.html");

const origin = process.argv[2];
const fontFamily = process.argv[3];
const fontWeight = process.argv[4] || "normal";

async function start() {
  const browser = await pupeteer.launch();
  const page = await browser.newPage();

  await page.goto(htmlPath);

  await page.waitFor(".ready");

  var value = await page.evaluate(
    (o, f, w) => {
      return window.FontMetrics({
        fontFamily: f,
        fontWeight: w,
        fontSize: 200,
        origin: o
      });
    },
    origin,
    fontFamily,
    fontWeight
  );

  console.log(value);

  await browser.close();
}

start();
