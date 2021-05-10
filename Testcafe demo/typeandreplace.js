import {Selector} from 'testcafe';

const nameInput=Selector('input#developer-name');

fixture ('My fixture')
  .page `http://devexpress.github.io/testcafe/example`

test('My Test',async t =>{
   await t 
    .maximizeWindow()
    .typeText(nameInput , 'Full')
    .typeText(nameInput , 'Stack QA',{replace:true})
    .wait(2000);

});




