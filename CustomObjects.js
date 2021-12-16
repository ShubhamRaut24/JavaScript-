//In classic object-oriented programming, objects are collections of data and methods that operate on that data. 
//JavaScript uses functions as classes.

function makePerson(first, last) {
    return {
      first: first,
      last: last
    };
  }
  function personFullName(person) {
    return person.first + ' ' + person.last;
  }
  function personFullNameReversed(person) {
    return person.last + ', ' + person.first;
  }
  
  var s = makePerson('Simon', 'Willison');
  personFullName(s); // "Simon Willison"
  personFullNameReversed(s); // "Willison, Simon"

  ///This works, but it's pretty ugly. You end up with dozens of functions in your global namespace. 
  //What we really need is a way to attach a function to an object. Since functions are objects, this is easy:

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
  s.fullName(); // "Simon Willison"
  s.fullNameReversed(); // "Willison, Simon"

  //this refers to the current object. What that actually means is specified by the way in which you called that function.

  //Our person objects are getting better, but there are still some ugly edges to them. 
  //Every time we create a person object we are creating two brand new function objects within it — wouldn't it be better if this code was shared?

  function personFullName() {
    return this.first + ' ' + this.last;
  }
  function personFullNameReversed() {
    return this.last + ', ' + this.first;
  }
  function Person(first, last) {
    this.first = first;
    this.last = last;
    this.fullName = personFullName;
    this.fullNameReversed = personFullNameReversed;
  }


  // prototype

  function Person(first, last) {
    this.first = first;
    this.last = last;
  }
  Person.prototype.fullName = function() {
    return this.first + ' ' + this.last;
  };
  Person.prototype.fullNameReversed = function() {
    return this.last + ', ' + this.first;
  };


  //JavaScript lets you modify something's prototype at any time in your program, which means you can add extra methods to existing objects at runtime

  var s = new Person('Simon', 'Willison');
s.firstNameCaps(); // TypeError on line 1: s.firstNameCaps is not a function

Person.prototype.firstNameCaps = function() {
  return this.first.toUpperCase();
};
s.firstNameCaps(); // "SIMON"



//Interestingly, you can also add things to the prototype of built-in JavaScript objects. 
//Let's add a method to String that returns that string in reverse:

var s = 'Simon';
s.reversed(); // TypeError on line 1: s.reversed is not a function

String.prototype.reversed = function() {
  var r = '';
  for (var i = this.length - 1; i >= 0; i--) {
    r += this[i];
  }
  return r;
};

s.reversed(); // nomiS


// Closure
//A closure is the combination of a function and the scope object in which it was created. 
//Closures let you save state — as such, they can often be used in place of objects

function makeAdder(a) {
    return function(b) {
      return a + b;
    };
  }
  var add5 = makeAdder(5);
  var add20 = makeAdder(20);
  add5(6); // 11
  add20(7); // 27

  //when makeAdder() is called, a scope object is created with one property: a, 
  //which is the argument passed to the makeAdder() function. makeAdder() then returns a newly created function. 
  //Normally JavaScript's garbage collector would clean up the scope object created for makeAdder() at this point, 
  //but the returned function maintains a reference back to that scope object. 
  //As a result, the scope object will not be garbage-collected until there are no more references to the function object that makeAdder() returned.

