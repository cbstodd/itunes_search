import { SearchApiPage } from './app.po';

describe('search-api App', function() {
  let page: SearchApiPage;

  beforeEach(() => {
    page = new SearchApiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('i works!');
  });
});
