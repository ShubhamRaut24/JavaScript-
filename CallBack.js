//Many functions are provided by JavaScript host environments that allow you to schedule asynchronous actions. 
//In other words, actions that we initiate now, but they finish later.

//For instance, one such function is the setTimeout function.

//There are other real-world examples of asynchronous actions, e.g. loading scripts and modules (we’ll cover them in later chapters).




function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
  }
  
  loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert( _ ); // function declared in the loaded script
  });