let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === '6.jpg') {
      myImage.setAttribute('src','16.jpg');
    } else {
      myImage.setAttribute('src','6.jpg');
    }
}



 Events in javaScript
  document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}