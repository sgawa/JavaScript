import {Selector} from 'testcafe';
//import Colors from 'colors';

const header=Selector('h1');
const para=Selector('header p');
const nameInput=Selector ('input#developer-name');

fixture `My Fixture`
  .page `http://devexpress.github.io/testcafe/example/`


test('My Test', async t=>
 {
   await t
   .typeText(nameInput,'FullStack QA');
   const text1=await header.innerText;
   const text2=await para.innerText;
   const text3=await nameInput.value;

   console.log(text1);
   console.log(text2);
   console.log(text3);


   /*
   console.log(text1.red);
   console.log(text2.green);
   console.log(text3.yellow);
   */

 });
