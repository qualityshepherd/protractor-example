browser.ignoreSynchronization = true; // pages is not angular...

// a spec that does NOT use page objects...
describe ('google translate test', function() {
    it('should translate Norwegian to English', function() {
        browser.get('http://translate.google.com/');

        $('#gt-sl-gms').click();
        element(by.cssContainingText('.goog-menuitem-content', 'Norwegian')).click();

        $$('.jfk-button-checked').getText().then(function(text) {
            console.log(text[0]);
        });

        $('#source').sendKeys('ost');

        expect($('#result_box span').getText()).toBe('cheese');
    });
});

