import { Selector} from 'testcafe';

fixture('Getting Started')
  .page('https://news.ycombinator.com/')


test ('Assertion API ' ,async t=>
{

  // Deep Equal
  await t.expect(Selector('table').count).eql(4,'Text should be 4',{timeout : 500});

  // Not Deep Equal

  await t.expect(Selector('table').count).notEql(40);

  //ok

  await t.expect(Selector('#hnmain').exists).ok();

  // Not OK

  await t.expect(Selector('#hnmainfun').exists).notOk();
  
  // Type Of

  await t.expect(Selector('#pagespace').getAttribute('style')).typeOf('string');

  // Not Type of

  await t.expect (Selector('#pagespace').getAttribute('style')).notTypeOf('object');

  // Greater than

  await t.expect (Selector('#pagespace').count).gt(0);

  // Lesser than

  await t.expect (Selector('#pagespace').count).lt(0);

  // Within

  await t.expect (Selector('#pagespace').count).within(1,10);


  // Not Within

  await t.expect (Selector ('#pagespace').count).notWithin(10,100);


  // Match

  await t.expect('foobar').match(/^f/);

  // Not Match

  await t.expect('foobar').notMatch(/^b/);
});

