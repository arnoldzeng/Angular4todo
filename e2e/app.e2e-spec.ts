import { Angular4todoPage } from './app.po';

describe('angular4todo App', () => {
  let page: Angular4todoPage;

  beforeEach(() => {
    page = new Angular4todoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
