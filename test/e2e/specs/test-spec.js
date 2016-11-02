const EC = protractor.ExpectedConditions;

describe('Test protractor e2e setup', () => {
  beforeEach(() => {
    browser.driver.get('about:blank');
    browser.ignoreSynchronization = true;
  });

  it('can browse to developer.okta.com', () => {
    const el = $('#header .logo');
    browser.get('http://developer.okta.com');
    browser.wait(EC.presenceOf(el));
    expect(el.getText()).toBe('Okta');
  });
});
