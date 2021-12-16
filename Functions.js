//Functions in javascript


function myFunc(obj)
{
    obj.brand = "Suzuki";
}
let myCar = {
    brand :"Honda",
    model: "Accord",
    year: 1998

}
console.log(myCar.brand);

myFunc(myCar);

console.log(myCar.brand);


function makePerson(first, last) {
    return {
      first: first,
      last: last,
      fullName: function() {
        return this.first + ' ' + this.last;
      },
      fullNameReversed: function() {
        return this.last + ', ' + this.first;
      }
    };
  }
  
  var s = makePerson('Simon', 'Willison');
  console.log(s.fullName()) // "Simon Willison"
  console.log(s.fullNameReversed()); // "Willison, Simon"

var arg = [1, 2, 3];
var arr = () => arg[0];

console.log(arr()); // 1

function foo(n) {
  var f = () => arg[0] + n; // foo's implicit arguments binding. arguments[0] is n
  return f();
}
console.log((foo(3)))
 // 3 + 3 = 6


 // functions expression 

 let catSays = function(max) {
    let catMessage = "";
    for (var i = 0; i < max; i++) {
      catMessage += "meow ";
    }
    return catMessage;
  }


  let laugh = function(num){
    
    let value = "";
    for(let i = 0; i<num; i++)
    {
       value = value + "ha" ; 
    }
    
    return value+"!"
}

console.log(laugh(3));


// inline functions

function emotions(myString, myFunc) 
{
    console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function luagh(num)
{
    var s = ""; 
    for(let i = 0; i < num; i++)
    {
        s += "ha";
    }
    return s+"!";});



 // Geneterator functions
 // Generators are functions that can be exited and later re-entered. 
 //Their context (variable bindings) will be saved across re-entrances.  
 function* generator(i) {
    yield i;
    yield i + 10;
  }
  
  const gen1 = generator(10);
  
  console.log(gen1.next().value);
  // expected output: 10
  
  console.log(gen1.next().value);
  // expected output: 20

  function* idMaker() {
    var index = 0;
    while (true)
      yield index++;
  }
  
  var gen = idMaker();
  
  console.log(gen.next().value); // 0
  console.log(gen.next().value); // 1
  console.log(gen.next().value); // 2
  console.log(gen.next().value); // 3
  
  // function* expression

  const fooo = function*() {
    yield 'a';
    yield 'b';
    yield 'c';
  };
  
  let str = '';
  for (const val of fooo()) {
    str = str + val;
  }
  console.log(str);
  // expected output: "abc"

  //Arrow Functions
  // syntax (param1, paramN) => expression

//   // Traditional Anonymous Function
//     function (a){
//     return a + 100;
//   }
let a = 10;
let eg = a => {
    return a + 100;
}; // arrow function of above functions
console.log(eg(4))

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  // expected output: Array [8, 6, 7, 9]

  
//   // Traditional Anonymous Function (no arguments)
// let a = 4;
// let b = 2;
// function (){
//   return a + b + 100;
// }

// Arrow Function (no arguments)
let a1 = 4;
let b1 = 2;
const newLocal = () => a1 + b1 + 100;
console.log(newLocal())

//Functions Getter
//Sometimes it is desirable to allow access to a property that returns a dynamically computed value, 
//or you may want to reflect the status of an internal variable without requiring the use of explicit method calls. 
//In JavaScript, this can be accomplished with the use of a getter.
const obj = {
    log: ['a', 'b', 'c'],
    get latest() {
      if (this.log.length === 0) {
        return undefined;
      }
      return this.log[this.log.length - 1];
    }
  };
  
  console.log(obj.latest);
  // expected output: "c"

  // Functions Setter
  //In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed.
  // Setters are most often used in conjunction with getters to create a type of pseudo-property. 
  //It is not possible to simultaneously have a setter on a property that holds an actual value.

  const language = {
    set current(name) {
      this.log.push(name);
    },
    log: []
  };
  
  language.current = 'EN';
  language.current = 'FA';
  
  console.log(language.log);
  // expected output: Array ["EN", "FA"]

  function padZeros(num, totalLen) {
    var numStr = num.toString();             // Initialize return value as string
    var numZeros = totalLen - numStr.length; // Calculate no. of zeros
    for (var i = 1; i <= numZeros; i++) {
       numStr = "0" + numStr;
    }
    return numStr;
 }
console.log(padZeros(42,4)); // returns "0042"
console.log(padZeros(42,2)) // returns "42"