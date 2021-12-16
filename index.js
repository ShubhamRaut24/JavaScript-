
   //alert("Danger");
   // document.write("Using this u can print anything on Screen")
   // console.error("this is error");
   //console.warn("this is warn");
   //console.assert(4==4);

   //1. javaScript console API
   console.log("Hellow world");
   console.error("this is error");
   console.warn("this is warn");

   
      

      


  /*
  increamnet and Decreament Operators
x++ or ++x // same as x = x + 1 
x-- or --x // same as x = x - 1
x += 3 // same as x = x + 3
x -= 6 // same as x = x - 6
x *= 2 // same as x = x * 2
x /= 5 // same as x = x / 5
  */


var x = 10
if (true) {
  var x = 15     // inner declaration overrides declaration in parent scope
  console.log(x) // prints 15
}
console.log(x)   // prints 15

let y = 10
if (true) {
  let y = 15       // inner declaration is scoped within the if block
  console.log(y)   // prints 15
}
console.log(y)     // prints 10

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '6.jpg') {
      myImage.setAttribute('src','16.jpg');
    } else {
      myImage.setAttribute('src','6.jpg');
    }
}

let elem = document.getElementById('click');
console.log(elem);

let elemclass = document.getElementsByClassName('containers');
console.log(elemclass);
elemclass[0].style.background = "red";

console.log(elem.innerHTML)
console.log(elemclass[0].innerText)



