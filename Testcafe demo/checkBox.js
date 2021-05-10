import {Selector} from 'testcafe';

const checkbox1=Selector('input#remote-testing');

fixture ('My fixture')
  .page `http://devexpress.github.io/testcafe/example`

test('My Test',async t =>{
   await t 
    .maximizeWindow()
    .click(checkbox1)
    .wait(2000);

});


