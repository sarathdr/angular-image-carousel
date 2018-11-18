import { CarouselPage } from './app.page';
import { browser } from 'protractor';

describe('Image carousel App', () => {
  let page: CarouselPage;

  beforeEach(() => {
    page = new CarouselPage();
    page.navigateTo();
  });

  it('should show image slide with next thumbnail', () => {
    expect(page.getImageSlide()).toBeDefined();
    expect(page.getThumbnail().count()).toEqual(1);
  });

  it('should show next image when click on next thumbnail', () => {
    const titleImage1 = page.getTitle();
    page.next().click().then(() => {
      expect(page.getTitle()).not.toEqual(titleImage1);
    });

  });

  it('should show previous image when click on previous thumbnail', () => {

    page.next().click().then(() => {
      browser.sleep(100);
      const titleImage2 = page.getTitle();
      expect(page.previous()).toBeDefined();
      page.previous().click().then(() => {
        expect(page.getTitle()).not.toEqual(titleImage2);
      });
    });

  });

});
