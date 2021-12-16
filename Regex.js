//Using a regular expression literal, which consists of a pattern enclosed between slashes, as follows:
  let re = /ab+c/;

//Regular expression literals provide compilation of the regular expression when the script is loaded. If the regular expression remains constant, using this can improve performance.
//Or calling the constructor function of the RegExp object, as follows:
  let re = new RegExp('ab+c');

  
  const text = 'A quick fox';
const regexpLastWord = /\w+$/;
console.log(text.match(regexpLastWord));
// expected output: Array ["fox"]

const regexpWords = /\b\w+\b/g;
console.log(text.match(regexpWords));
// expected output: Array ["A", "quick", "fox"]

const regexpFoxQuality = /\w+(?= fox)/;
console.log(text.match(regexpFoxQuality));
// expected output: Array ["quick"]