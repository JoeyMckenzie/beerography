import { BeerographyPage } from './app.po';

describe('beerography App', function() {
  let page: BeerographyPage;

  beforeEach(() => {
    page = new BeerographyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
