import { Angular2LearnPage } from './app.po';

describe('angular2-learn App', function() {
  let page: Angular2LearnPage;

  beforeEach(() => {
    page = new Angular2LearnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('rb works!');
  });
});
