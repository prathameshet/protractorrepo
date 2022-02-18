
let homePage=function(){

    let input_firstNumber=element(by.model('first'));
    let input_secondNumber=element(by.model('second'));
    let goButton= element(by.css('[ng-click="doAddition()"]'));

    this.get=function(url){
        browser.get(url);
    };

    this.enterfirstNumber=function(firstNumber){
          input_firstNumber.sendKeys(firstNumber);
    };

    this.entersecondNumber=function(secondNumber){
        input_secondNumber.sendKeys(secondNumber);
    };

    this.clickButton=function(){
        goButton.click();
    };

    this.verifyResult=function(result){
        let output=element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);
    }



};

module.exports=new homePage();