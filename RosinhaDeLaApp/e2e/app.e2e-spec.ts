import { RosinhaDeLaAppPage } from './app.po';

describe('rosinha-de-la-app App', () => {
  let page: RosinhaDeLaAppPage;

  beforeEach(() => {
    page = new RosinhaDeLaAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
