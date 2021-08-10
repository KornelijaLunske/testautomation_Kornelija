exports.CalculatorPage = class CalculatorPage {
    constructor(page) {
        this.page = page; }

    async goto(){
    await this.page.goto('https://testsheepnz.github.io/BasicCalculator');
    }
    
    async fill(){
        await this.page.fill('#number1Field','20');
        await this.page.fill('#number2Field','10');
    } 

    async click(){
        await this.page.click('#calculateButton');
    }
} 

