/*
 * Title: Handlers
 * Description: Handlers functions
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 16/01/2025
 *
 */
//Dependencies
import puppeteer from "puppeteer-core";
import { selectors } from "../helpers/selectors.js";
import { helpers } from "./../helpers/helpers.js";

//Module Scaffolding
export const handlers = {};

//random delay function betweetn 5-10 seconds
handlers.delayFunction = () => {
  return new Promise((resolve) => {
    setTimeout(resolve, Math.floor(Math.random() * 2001) + 2000);
  });
};

//scroll function
handlers.scrollFunction = async (page, scrolled) => {
  return await page.evaluate(
    async (selector, scrolled) => {
      let container = document.querySelector(selector);
      container.scrollTo({
        left: 0,
        top: scrolled,
        behavior: "smooth",
      });
      return container.scrollHeight;
    },
    selectors.albumContainer,
    scrolled
  );
};
