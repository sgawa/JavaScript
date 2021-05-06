/*import { Selector} from 'testcafe';

const newsLink=Selector('.storylink');

fixture('selectors demo')
  .page('https://news.ycombinator.com/')


test ('selector-test-1' ,async t=>
{
    if(newsLink.withText('JSON').exists)
    {
        console.log("link exists");
    }
}

);

*/

import { Selector} from 'testcafe';

const newsLink=Selector('.storylink');

fixture('selectors demo')
  .page('https://news.ycombinator.com/')


test ('selector-test-1' ,async t=>
{
    if(newsLink.exists)
    {
        for (let i=0;i<await newsLink.count;i++)
        {

            console.log((i+1) + ") " +await newsLink.nth(i).textContent);

        }
    }
}

);




