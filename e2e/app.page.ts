import { browser, by, element } from 'protractor';

export class CarouselPage {

  navigateTo() {
    return browser.get('/');
  }

  getThumbnail() {
    return element.all(by.css('thumbnail'));
  }

  next() {
    return element(by.css('.next'));
  }

  previous() {
    return element(by.css('.previous'));
  }

  getTitle() {
    return element(by.css('image-slide p')).getText();
  }

  getImageSlide() {
    return element(by.css('image-slide'));
  }

}
