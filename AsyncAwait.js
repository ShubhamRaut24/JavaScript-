//There’s a special syntax to work with promises in a more comfortable fashion, called “async/await”. 
//It’s surprisingly easy to understand and use
//The word “async” before a function means one simple thing: a function always returns a promise. 
//Other values are wrapped in a resolved promise automatically.

async function f1() {
    return Promise.resolve(1);
  }
  f1().then(function(){
      console.log("async");
  }); // 1

  //So, async ensures that the function returns a promise, and wraps non-promises in it. 

  //await
  //The keyword await makes JavaScript wait until that promise settles and returns its result.

  async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 4000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
  
   console.log(result) // "done!"
  }
  
  f();

  //The function execution “pauses” at the line (*) and resumes when the promise settles, 
  //with result becoming its result. So the code above shows “done!” in one second.
//It’s just a more elegant syntax of getting the promise result than promise.then. And, it’s easier to read and write.

async function demo()
{
    console.log("inside demo function")
    const response = await  fetch('https://api.github.com/users')
    console.log("before response")
    const user = await response.json();
    console.log("user is resolved")
    return user;
}

console.log("before calling demo")
let a = demo();
console.log("after calling demo")
console.log(a);
a.then(data => console.log(data))
console.log("last line of js file")

