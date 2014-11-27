

var GoogleTranslatePage = function() {
    // page elements...
    this.url = 'http://translate.google.com/';
    this.languageDropdown = $('#gt-sl-gms');
    this.norwegian = element(by.id(':1l'));
    this.selectedLanguageButton = $('.jfk-button-collapse-left.jfk-button-checked');
    this.sourceTextbox = $('#source');
    this.resultTextbox = $('#result_box span');

    // helper functions...
    this.goto = function() {
        browser.get(this.url);
    };
};

module.exports = new GoogleTranslatePage();