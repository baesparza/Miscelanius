import { MiscelaniusPage } from './app.po';

describe('miscelanius App', () => {
  let page: MiscelaniusPage;

  beforeEach(() => {
    page = new MiscelaniusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
