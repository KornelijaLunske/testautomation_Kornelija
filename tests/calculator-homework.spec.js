const { test, expect, selectors } = require('@playwright/test');
const {CalculatorPage} = require ('../pages/CalculatorPage');

test.describe('',() => {
    let page;
    test.beforeAll(async ({browser}) => {
        page = await browser.newPage ();
        startPage = new CalculatorPage(page);
    });

    test.beforeEach (async () => {
          await startPage.goto();
          await startPage.fill ();
          await startPage.click ();
    
    });
    

test.only('Checks that BasicCalculator page can be opened', async () => {
    const isBodyVisible = await page.isVisible('#main-body');

    expect(isBodyVisible).toBe(true);
});
 
  test('Checks that Build can be selected', async () => {
    await page.waitForSelector('#main-body');
    const Click = await page.click("#selectBuild", "2");

    expect(Click).toBe(true);
});   

test.only('Checks that Calculate button works', async () => {
    const isAnswerVisible = await page.isVisible('#numberAnswerField');

    expect(isAnswerVisible).toBe(true);
});

test.only('Checks that integers only be selected', async () => {
    await page.click('#integerSelect');
    const isCheckmarkVisible = await page.isVisible('#integerSelect');

    expect(isCheckmarkVisible).toBe(true);
});

test.only('Checks that answer field can be cleared', async () => {
    await page.click('#clearButton');
    const isAnswerfieldclearVisible = await page.isVisible('#numberAnswerField');

    expect(isAnswerfieldclearVisible).toBe(true);
});

test('Checks that answer with integers shows', async () => {
    await page.click('#integerSelect');
    await page.fill('#number1Field', '10.3');
    await page.fill('#number2Field', '20.3');
    const isIntegerAnswerVisible = await page.isVisible('#numberAnswerField');

    expect(isIntegerAnswerVisible).toBe(true);
});

test.only('Checks that multiply operation can be chosen', async () => {
    await page.click("#selectOperationDropdown");
    await page.selectOption("#selectOperationDropdown", "2");
    const isAnswerWithMultiplyVisible = await page.isVisible('#numberAnswerField');

    expect(isAnswerWithMultiplyVisible).toBe(true);
});

test('Checks that subtract operation can be chosen', async () => {
    await page.click("#selectOperationDropdown");
    await page.selectOption("#selectOperationDropdown", "1");
    const isAnswerWithSubtractVisible = await page.isVisible('#numberAnswerField');

    expect(isAnswerWithSubtractVisible).toBe(true);
});

test('Checks that divide operation can be chosen', async () => {
    await page.click("#selectOperationDropdown");
    await page.selectOption("#selectOperationDropdown", "3");
    const isAnswerVisible = await page.isVisible('#numberAnswerField');

    expect(isAnswerWithDivideVisible).toBe(true);
});

test('Checks that concatenate operation can be chosen', async () => {
    await page.click("#selectOperationDropdown");
    await page.selectOption("#selectOperationDropdown", "4");
    const isAnswerWithConcatenateVisible = await page.isVisible('#numberAnswerField');

    expect(isAnswerWithConcatenateVisible).toBe(true);
});
});
