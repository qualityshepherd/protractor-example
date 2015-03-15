var basePage = require('../pages/basePage.js');

var GoogleTranslatePage = function() {
    // pages elements...
    this.url = 'http://translate.google.com/';
    this.sourceLangDropdown = $('#gt-sl-gms');
    this.resultLangDropdown = $('div#gt-tl-gms');
    this.langMenu = function(language) {return element.all(by.cssContainingText('.goog-menuitem.goog-option .goog-menuitem-content', language));}
    this.selectedLanguageButton = $$('.jfk-button-checked'); // there are 2...
    this.selectedSourceLanguage = this.selectedLanguageButton[0];
    this.selectedResultLanguage = this.selectedLanguageButton[1];
    this.sourceTextbox = $('#source');
    this.resultTextbox = $('span.hps');

    // helper functions...
    this.to = function() {
        browser.get(this.url);
    };

    this.setSourceLanguage = function(languageText) {
        this.sourceLangDropdown.click()
        return this.langMenu(languageText).click();
    };

    this.enterSourceText = function(text) {
        return this.sourceTextbox.sendKeys(text);
    };

    this.translation = function() {
        var self = this;
        return browser.wait(function() {
            return self.resultTextbox.getText();
        });
    };
};
GoogleTranslatePage.prototype = basePage; // extend basePage...
module.exports = new GoogleTranslatePage();
