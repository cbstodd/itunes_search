import { browser, element, by } from 'protractor';

export class ItunesApiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('i-root h1')).getText();
  }
}
