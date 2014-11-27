
describe ('google translate test', function() {
    var translatePage = require('../page/google.translate.page.js');

    beforeEach(function() {
        browser.ignoreSynchronization = true; // page is not angular...
        browser.manage().timeouts().implicitlyWait(2000);
    });

    it('should translate Norwegian to English', function() {
        // given at the translate page...
        translatePage.goto();

        // when selection norwegian...
        translatePage.languageDropdown.click();
        translatePage.norwegian.click();

        expect(translatePage.selectedLanguageButton.getText()).toBe('Norwegian');

        // and entering Norwegian word...
        translatePage.sourceTextbox.sendKeys('ost');

        // then word is translated to english...
        expect(translatePage.resultTextbox.getText()).toBe('cheese');
    });
});

