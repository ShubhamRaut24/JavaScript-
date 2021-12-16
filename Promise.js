// Promise:
// Resolve
// Reject
// Pending

function func1(){

    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            const error = true;
            if(!error)
            {
                console.log("your function has been resolved ")
                resolve();
            }
            else
            {
                console.log("your function has not been resolved")
                reject("sorry");
            }
        },2000);
    })
}
    
func1().then(function(){
    console.log("its done")
}).catch(function(error){
    console.log("its not done "+error)
})


//then
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });
  
  // resolve runs the first function in .then
  promise.then(
    result => alert(result), // shows "done!" after 1 second
    error => alert(error) // doesn't run
  );

  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject runs the second function in .then
  promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
  );

  //catch
//If we’re interested only in errors, then we can use null as the first argument: .then(null, 
//errorHandlingFunction). Or we can use .catch(errorHandlingFunction), which is exactly the same:

let promise = new Promise((resolve, reject) => {
  setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// .catch(f) is the same as promise.then(null, f)
promise.catch(alert); // shows "Error: Whoops!" after 1 second