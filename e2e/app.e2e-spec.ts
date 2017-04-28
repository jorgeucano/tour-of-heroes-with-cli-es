import { TourOfHeroesEsPage } from './app.po';

describe('tour-of-heroes-es App', () => {
  let page: TourOfHeroesEsPage;

  beforeEach(() => {
    page = new TourOfHeroesEsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
