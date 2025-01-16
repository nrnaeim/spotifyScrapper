/*
 * Title: Selectors
 * Description: Selectors for scrapping
 * Author: Niemur Rahman
 * Email: nrnaeim@gmail.com
 * Date: 16/01/2025
 *
 */
//Dependencies

//Module Scaffolding
export const selectors = {};

//selectors for log In
selectors.logInPage = 'button[data-testid="login-button"]';
selectors.userName = 'input[autocomplete="username"]';
selectors.password = 'input[autocomplete="current-password"]';
selectors.logInBtn = "#login-button";

selectors.albumContainer =
  'div.main-view-container div[data-overlayscrollbars-viewport="scrollbarHidden overflowXHidden overflowYScroll"]';
selectors.albumTracks = 'a[data-testid="internal-track-link"]';
