//2. variables in java
//    // what are variables ?- these are the containers to store dada values

   var number1 = 30;
   var number2 = 70;
   console.log(number1 + number2);
   var greeting = "Hello";
   console.log(greeting + " Mike!");

   var celsius = 12;
   var fahrenheit = celsius * 1.8 + 32;
   console.log(fahrenheit);

   var quote = "Stay awhile and listen!"; // we can print perticular index char using this 
   console.log(quote[6]);

   console.log("The man whispered, \"please speak to me.\"");  // this \ and there are others like \n \t just like java
   var haiku = "Blowing from the west"+"\nFallen leaves gather"+"\nIn the east."
console.log(haiku);

   var my_string = "Udacity";   
   for (var i = 0; i < my_string.length; i++) {  // this is code for printing ASCII values of Udacity;
      console.log(my_string.charCodeAt(i));
      }



// all data types in javaScript
 
      var myNumber = 45;        //number
      var myString = "String";  // String
      var myBoolean = true;   // boolean
      var myUndefined = undefined; // undefined its value is undefined
      var myNull = null;          // null
      var marks = {           // object
          mike : 45,
          zoe : 49,
          mark : 75
      }
      console.log(marks);

//       var arr = [1,2,3,4,5,"good"];
//       console.log(arr);
//       /*
//       At very high level there are two data types in javascript
//       1. Primitive data type
//       2. Reference data type
//       */