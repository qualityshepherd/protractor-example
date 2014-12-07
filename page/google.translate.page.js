

var GoogleTranslatePage = function() {
    // page elements...
    this.url = 'http://translate.google.com/';
    this.languageDropdown = $('#gt-sl-gms');
    this.norwegian = element(by.id(':1l'));
    this.languageLink = function(lang) {return element(by.cssContainingText('.goog-menuitem-content', lang));}
    this.selectedLanguageButton = $$('.jfk-button-checked'); // there are 2...
    this.selectedSourceLanguage = this.selectedLanguageButton[0];
    this.selectedResultLanguage = this.selectedLanguageButton[1];
    this.sourceTextbox = $('#source');
    this.resultTextbox = $('#result_box span');

    // helper functions...
    this.goto = function() {
        browser.get(this.url);
    };

    this.selectSourceLanguage = function(language) {
        if(this.selectedSourceLanguage != language) {
            this.languageDropdown.click();
            this.languageLink(language).click();
        };
    };

    this.enterSourceText = function(text) {
        this.sourceTextbox.sendKeys(text);
    };

    this.resultText = function() {
        var result = this.resultTextbox;

        return browser.wait(function() {
            return result.getText();
        });
    };
};

module.exports = new GoogleTranslatePage();