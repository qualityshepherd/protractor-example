
var GoogleTranslatePage = function() {
    // pages elements...
    this.url = 'http://translate.google.com/';
    this.languageDropdown = $('#gt-sl-gms');
    this.sourceLanguageLink = function(language) {return element.all(by.cssContainingText('.goog-menuitem.goog-option .goog-menuitem-content', language));}
    this.selectedLanguageButton = $$('.jfk-button-checked'); // there are 2...
    this.selectedSourceLanguage = this.selectedLanguageButton[0];
    this.selectedResultLanguage = this.selectedLanguageButton[1];
    this.sourceTextbox = $('#source');
    this.resultTextbox = $('span.hps');

    // helper functions...
    this.to = function() {
        browser.get(this.url);
    };

    this.selectSourceLanguage = function(languageText) {
        this.languageDropdown.click()
        return this.sourceLanguageLink(languageText).click();
    };

    this.enterSourceText = function(text) {
        return this.sourceTextbox.sendKeys(text);
    };

    this.translation = function() {
        var that = this;
        return browser.wait(function() {
            return that.resultTextbox.getText();
        });
    };
};

module.exports = new GoogleTranslatePage;