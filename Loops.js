// while Loop in JavaScript
var i = 1;      // when to start
while(i <= 20) // when to stop
{
    console.log(i);
    i++;            //how to get to the next item
}


//
var x = 1;

// while loop with a stop condition
while (x <= 20) {
    if (x % 3 === 0 && x % 5 === 0) {
        console.log("JuliaJames");
    }else if (x % 5 === 0) {
        console.log("James");
    }else if (x % 3 === 0) {
        console.log("Julia");
    }
    else {
        console.log(x);
    }
    // increment x at the end of each loop
    x = x + 1 ; 
}

// Let us take an iteration variable, that represent the remaining Time in seconds
n = 60

// While loop with a stop condition
while (n >= 0) {
    if (n === 50) {
        console.log("Orbiter transfers from ground to internal power");
    }
    else if (n === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    }
    else if (n === 16) {
        console.log("Activate launch pad sound suppression system");
    }
    else if (n === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    }
    else if (n === 6) {
        console.log("Main engine start");
    }
    else if (n === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    }
    else{
        console.log("T-"+n+" seconds");
    }

    //Never forget to decrement/increment the iteration variable in a while loop
    // Otherwise, you loop will run infinite iterations
     n--;
}

//Nested Loops

for (var x = 0; x < 5; x++) {
    for (var y = 0; y < 3;  y++)
     {
      console.log(x + "," + y);
     }
  }

  // for loops
  let arr = [1,2,3,4,5,"jk",8]
  let a
  for( a in arr)
  {
      console.log(arr[a])
  }

  //For...of loop
//The for...of loop is used to loop over any type of data that is iterable.

//You write a for...of loop almost exactly like you would write a for...in loop, except you swap out in with of and you can drop the index.
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
  console.log(digit);
}

//Spread operator
//The spread operator, written with three consecutive dots ( ... ), 
//is new in ES6 and gives you the ability to expand, or spread, iterable objects into multiple elements.

const books = ["Don Quixote", "The Hobbit", "Alice in Wonderland", "Tale of Two Cities"];
console.log(...books);

const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
console.log(...primes)