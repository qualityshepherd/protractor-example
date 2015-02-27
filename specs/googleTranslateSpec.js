browser.ignoreSynchronization = true; // page is not angular...
var translatePage = require('../pages/googleTranslatePage.js');
browser.manage().timeouts().implicitlyWait(2000);

describe ('google translate test with pages objects', function() {
    it('should translate Spanish to English', function() {
        // given at the translate pages...
        translatePage.goto();

        // when select a language...
        translatePage.selectSourceLanguage('Spanish');

        // and entering word in selected language...
        translatePage.enterSourceText('queso');

        // then word is translated to english...
        expect(translatePage.resultText()).toBe('cheese');
    });
});

