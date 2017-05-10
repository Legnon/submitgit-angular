import { SubmitgitPage } from './app.po';

describe('submitgit App', () => {
  let page: SubmitgitPage;

  beforeEach(() => {
    page = new SubmitgitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
