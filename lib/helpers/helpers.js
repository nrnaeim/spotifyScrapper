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
import lodash from "lodash";
import xlsx from "xlsx";
import fs from "fs";
import { selectors } from "./selectors.js";
//Module Scaffolding
export const helpers = {};

//collector function for data collection
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

//data writter for write data
helpers.dataWritter = (data) => {
  //taking uniq data by comparing spotify track url
  let uniqData = lodash.uniqBy(data, "trackURL");
  //writting data in json format
  fs.writeFileSync("./output/finalData.json", JSON.stringify(uniqData));
  //writting collected data in excel file
  const workBook = xlsx.utils.book_new();
  const sheet = xlsx.utils.json_to_sheet(uniqData);
  xlsx.utils.book_append_sheet(workBook, sheet, "trackListWithURL");
  xlsx.writeFile(workBook, "./output/finalData.xlsx");
};
