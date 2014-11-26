
describe ('google translate test', function() {
    it('should translate Norwegian to English', function() {
        browser.ignoreSynchronization = true; // page is not angular...
        //browser.manage().timeouts().implicitlyWait(2000);

        browser.get('http://translate.google.com/');

        $('#gt-sl-gms').click();
        element(by.id(':1l')).click();

        $('.jfk-button-collapse-left.jfk-button-checked').getText().then(function(text) {
            console.log(text);
        });

        $('#source').sendKeys('ost');

        browser.wait(function() {
            return browser.isElementPresent($('#result_box span'));
        });

        expect($('#result_box span').getText()).toBe('cheese');
    });
});

