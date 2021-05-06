import { Selector } from 'testcafe';

fixture (`Testcafe demo`)
    .page `https://www.google.com/`;

test('My first test', async t => {
    await t
      .typeText('input[name="q"','testcafe')
      .click('input[name="btnK"]')
      .expect(Selector('div.ellip').innerText).contains('TestCafe')

});

