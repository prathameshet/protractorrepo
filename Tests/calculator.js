let homepage = require('../Pages/homepages');

describe('demo calculator test',function(){

    it('addititon test',function(){
        //browser.get("http://juliemr.github.io/protractor-demo/");
        homepage.get("http://juliemr.github.io/protractor-demo/");

        //element(by.model('first')).sendKeys('2');
        homepage.enterfirstNumber('5');


       // element(by.model('second')).sendKeys('3');
       homepage.entersecondNumber('6');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickButton();

        //let result=element(by.cssContainingText('.ng-binding','5'));
         homepage.verifyResult('11');

        //expect(result.getText()).toEqual('5');
        browser.sleep(5000)
    
    });

    it('Substraction test',function(){
        //browser.get("http://juliemr.github.io/protractor-demo/");
        homepage.get("http://juliemr.github.io/protractor-demo/");

        //element(by.model('first')).sendKeys('2');
        homepage.enterfirstNumber('5');


       // element(by.model('second')).sendKeys('3');
       homepage.entersecondNumber('6');

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickButton1();

        //let result=element(by.cssContainingText('.ng-binding','5'));
         homepage.verifyResult('11');

        //expect(result.getText()).toEqual('5');
        browser.sleep(5000)
    
    });

});