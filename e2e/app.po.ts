import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToProducts() {
    return browser.get('/products');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
