// creates a `donuts` array with three strings
var donuts = ["glazed", "powdered", "jelly"];

console.log(donuts[0]); // "glazed" is the first element in the `donuts` array


// creates a `mixedData` array with mixed data types
var mixedData = ["abcd", 1, true, undefined, null, "all the things"];

// creates a `arraysInArrays` array with three arrays
var arraysInArrays = [
    [1, 2, 3], 
    ["Julia", "James"], 
    [true, false, true, false]
];

// methods in array

//1. lenght
console.log(donuts.length);
//2. push    you can push element onto the end of the array using the push() method.
donuts.push("powdered");

//3. pop  you can use the pop() method to remove elements from the end of an array.
donuts.pop();

//4. Splice
///splice() is another handy method that allows you to add and remove elements from anywhere within an array.
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
//5. reverse
donuts.reverse();
//6.
donuts.indexOf() // gives the index of jelly element from array

//7.
donuts.sort();
//8.
donuts.toString();
//9.
//donuts.values();
//10.
donuts.find();
//11.
donuts.shift(); //The shift() method returns the value that was "shifted out"
//12.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");
//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:

//13. concat
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);

// 14. ForEach method

// var donuts1 = ["jelly donut", "chocolate donut", "glazed donut"];

// donuts1.forEach(function(donut) {
//   donut += " hole";
//   donut = donut.toUpperCase();
//   console.log(donut);
// });

// //15. Map
// //With the map() method, you can take an array, perform some operation on each element of the array, and return a new array.


// var improvedDonuts = donuts.map(function(donut) {
//   donut += " hole";
//   donut = donut.toUpperCase();
//   return donut;
// });

