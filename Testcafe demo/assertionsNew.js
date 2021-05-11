import{Selector} from 'testcafe';

const nameInput=Selector('input#developer-name');
const nameInputFalse=Selector('input#developer-name-false');
const maintext=Selector('h1');
const maintext1=Selector('header p');


fixture `My Fixture`
 .page `http://devexpress.github.io/testcafe/example`

 test('My test', async t=>{
     await t
    .typeText(nameInput,'FullStack QA')
    .wait(2000)
    .expect(nameInput.exists).ok()
   .expect(nameInputFalse.exists).notOk()
   .expect(nameInput.value).eql('FullStack QA',{timeout:60})
   .expect(maintext1.innerText).notEql('This webpage')
   .expect(maintext.innerText).contains('Exam');

   console.log("testcase passed");
 }
 ); 