import { AngularElectronPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('ng5-netease-music App', () => {
  let page: AngularElectronPage;

  beforeEach(() => {
    page = new AngularElectronPage();
  });

  it('should display message saying App works !', () => {
    expect(element(by.css('app-home h1')).getText()).toMatch('App works !');
  });
});
