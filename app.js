/*
 * Title: Spotify Scrapper
 * Description: This project is build to learning purpose of web scrapping with ethical practise of web scrapping
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 16/01/2025
 *
 */
//Dependencies
import puppeteer from "puppeteer-core";
import { browserConfig } from "./lib/helpers/browserConfig.js";
import { selectors } from "./lib/helpers/selectors.js";
import { logInInfo } from "./secretInfo/logIn.js";
import { handlers } from "./lib/handlers/handlers.js";
import { helpers } from "./lib/helpers/helpers.js";
import { inputs } from "./inputs.js";

//Module Scaffolding
export const app = {};

app.data = [];
app.mainFunction = async () => {
  const browser = await puppeteer.launch({
    executablePath: browserConfig.executablePathe,
    userDataDir: browserConfig.userDataDir,
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
    devtools: false,
  });
  const page = await browser.newPage();
  await page.setDefaultTimeout(0);

  await page.goto("https://open.spotify.com/", {
    waitUntil: "networkidle0",
  });
  await handlers.delayFunction(500, 1500);
  //checking already logged in or not
  if ((await page.$(selectors.logInPage)) !== null) {
    await page.click(selectors.logInPage);
    await page.waitForSelector(selectors.userName, { visible: true });
    await page.type(selectors.userName, logInInfo.userName, { delay: 10 });
    await page.type(selectors.password, logInInfo.password, { delay: 10 });
    await page.click(selectors.logInBtn);
    await handlers.delayFunction(500, 1000);
  }

  for (let i = 0; i < inputs.length; i++) {
    await page.goto(inputs[i].allbumURL, { waitUntil: "networkidle0" });

    let scrolled = 0;
    while (true) {
      scrolled += 500;
      const scrollHeight = await handlers.scrollFunction(page, scrolled);
      await handlers.delayFunction(1000, 3000);
      let dataArr = await helpers.collector(page);
      dataArr.forEach((element) => {
        element.artist = inputs[i].artist;
      });
      app.data.push(...dataArr);
      if (scrolled >= scrollHeight) {
        break;
      }
    }
    helpers.dataWritter(app.data);
    console.log(`${i + 1} of ${inputs.length} Completed successfully`);
  }
  console.log(`Congratulations! Your JOB Completed successfully`);
  await browser.close();
};
app.mainFunction();
