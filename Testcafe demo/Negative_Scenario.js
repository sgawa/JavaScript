import {Selector} from 'testcafe';

const userName=Selector('input#user_login')
const password=Selector('input#user_pass')
const login=Selector('input#wp-submit')
const errMsg=Selector('input#login_error');

fixture `My Fixture`
 .page `https://s1.demo.opensourcecms.com/wordpress/wp-login.php`

 test('My test', async t=>
 {
     await t
     .maximizeWindow()
     .typeText(userName,'ABC')
     .typeText(password,'ABC')
     .click(login)
     .wait(1000)
     .expect(errMsg.exists).ok();

 });


