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
import { selectors } from "../helpers/selectors.js";

//Module Scaffolding
export const handlers = {};

//scroll function
handlers.scrollFunction = async (page) => {
  await page.evaluate(async (selector) => {
    let container = document.querySelector(selector);
    console.log(container);
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
handlers.delayFunction = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * 2001) + 2000);
  });
};
