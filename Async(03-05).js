
function doAsyncTask(cb)
{
    
  setImmediate(()=>
  {
      console.log("Async task calling callback");
      cb();
  });

}

doAsyncTask(()=> console.log(message));

let message ="callback called";







