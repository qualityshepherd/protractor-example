
export default {


    customLocators() {
	
        by.addLocator('ngClick', function(toState,parentelement) {
        
            
            var using = parentelement || document ;
            var prefixes = ['ng-click'];
            browser.sleep(3000);

            for (var p = 0; p < prefixes.length; ++p) {
                var selector = '*[' + prefixes[p] + '="' + toState + '"]';
                var inputs = using.querySelectorAll(selector);
                if (inputs.length) {
                    return inputs;
                }
            }		
         })
    }

};