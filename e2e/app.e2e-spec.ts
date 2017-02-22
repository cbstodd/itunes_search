import { ItunesApiPage } from './app.po';

describe('itunes-api App', function() {
  let page: ItunesApiPage;

  beforeEach(() => {
    page = new ItunesApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('i works!');
  });
});
