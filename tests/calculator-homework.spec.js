const { test, expect, selectors } = require('@playwright/test');

test.only ('Checks that BasicCalculator page can be opened', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    const isBodyVisible = await page.isVisible('#main-body');

    expect(isBodyVisible).toBe(true);
  });

  test('Checks that Build can be selected', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.waitForSelector('#main-body');
    const Click = await page.click("#selectBuild");

    expect(true).toBe(true);
  });

  test.only ('Checks that Calculate button works', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.fill('#number1Field', '10');
    await page.fill('#number2Field', '20');
    await page.click('#calculateButton');
    const isAnswerVisible = await page.isVisible('#numberAnswerField');

    expect(isAnswerVisible).toBe(true);
});

test('Checks that operation can be chosen', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.click("#selectOperationDropdown");
    const subtract = await page.getAttribute('#selectOperationDropdown', 'value=1');

});

test.only ('Checks that integers only be selected', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.click('#integerSelect');
    const isCheckmarkVisible = await page.isVisible('#integerSelect');

    expect(isCheckmarkVisible).toBe(true);
});

test.only ('Checks that answer field can be cleared', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.fill('#number1Field', '10');
    await page.fill('#number2Field', '20');
    await page.click('#calculateButton');
    await page.click('#clearButton');
    const isAnswerfieldclearVisible = await page.isVisible('#numberAnswerField');

    expect(isAnswerfieldclearVisible).toBe(true);
});

test.only ('Checks that answer with integers shows', async ({ page }) => {
    await page.goto('https://testsheepnz.github.io/BasicCalculator');
    await page.click('#integerSelect');
    await page.fill('#number1Field', '10.3');
    await page.fill('#number2Field', '20.3');
    await page.click('#calculateButton');
    const isIntegerAnswerVisible = await page.isVisible('#numberAnswerField');

    expect(isIntegerAnswerVisible).toBe(true);
});

