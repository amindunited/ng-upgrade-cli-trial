import { NgUpgradeTrialPage } from './app.po';

describe('ng-upgrade-trial App', () => {
  let page: NgUpgradeTrialPage;

  beforeEach(() => {
    page = new NgUpgradeTrialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
