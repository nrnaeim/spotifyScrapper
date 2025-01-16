/*
 * Title: Spotify Scrapper
 * Description: This project is build to learning purpose of web scrapping with ethical practise of web scrapping
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 16/01/2025
 *
 */
//Dependencies
import puppeteer from "puppeteer";
import { browserConfig } from "./lib/helpers/browserConfig.js";

//Module Scaffolding
export const app = {};
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
};
