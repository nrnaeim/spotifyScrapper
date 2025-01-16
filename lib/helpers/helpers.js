/*
 * Title: Helpers
 * Description: Helper functions
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 16/01/2025
 *
 */
//Dependencies
import puppeteer from "puppeteer-core";
import { selectors } from "./selectors.js";

//Module Scaffolding
export const helpers = {};

//scroll function
helpers.scrollFunction = async (page) => {
  await page.evaluate((selector) => {
    let container = document.querySelector(selector);
    let oldHeight = 0;
    while (true) {
      container.scrollTo({
        left: 0,
        top: container.scrollHeight,
        behavior: "smooth",
      });
      let newHeight = container.scrollHeight;
      if (oldHeight == newHeight) {
        break;
      }
      oldHeight = newHeight;
    }
  }, selectors.albumContainer);
};

//random delay function betweetn 5-10 seconds
helpers.dealFunction = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * 2001) + 2000);
  });
};
