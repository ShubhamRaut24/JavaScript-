//Conditional Statement in javaScript

      var a = 1;
      var b = 2;

     if (a > b) {
        console.log("a is greater than b");
     } else {
        console.log("a is less than or equal to b");
     }

     var weather = "sunny";

     if (weather === "snow") {
        console.log("Bring a coat.");
     } else if (weather === "rain") {
        console.log("Bring a rain jacket.");
     } else {
        console.log("Wear what you have on.");
     }


     ///
     
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 21;
var shirtLength = 99;
var shirtSleeve = 8.40;

var size = "NA";

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
    size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
    size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
    size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
    size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
    size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
    size = "3XL";
}
else {
    size = "NA";
}
console.log(size);

//Truthy and Falsy
if ("") {
    console.log("the value is truthy");   // fasly
} else {
    console.log("the value is falsy");
}

if (1) {
    console.log("the value is truthy");   // truthy
} else {
    console.log("the value is falsy");
}

//Ternary operator
//The ternary operator provides you with a shortcut alternative for writing lengthy if...else statements.
//conditional ? (if condition is true) : (if condition is false)
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

var adult = true;
var preorder = true;
console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert.Pick up your tickets at the " + (preorder ? "will call" : "gate") + ".");

//Switch staments in JavaScript

var option = 3;

switch (option) {
  case 1:
    console.log("You selected option 1.");
    break;
  case 2:
    console.log("You selected option 2.");
    break;
  case 3:
    console.log("You selected option 3.");
    break;
  case 4:
    console.log("You selected option 4.");
    break;
  case 5:
    console.log("You selected option 5.");
    break;
  case 6:
    console.log("You selected option 6.");
    break; // technically, not needed
}
