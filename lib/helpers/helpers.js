/*
 * Title: Helpers
 * Description: Helpers module for scrapping
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

helpers.collector = async (page) => {
  return await page.$$eval(selectors.albumTracks, (items) => {
    return items.map((element) => {
      let tempObj = {};
      tempObj.trackURL = element.href;
      tempObj.trackTitle = element.textContent.trim();
      return tempObj;
    });
  });
};
