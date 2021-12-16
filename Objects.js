//There are two basic ways to create an empty object:
//1.
var obj = new Object();
//2.
var obj = {};




var umbrella = { 
    color: "pink",
    isOpen: false,
    open: function() { 
      if (umbrella.isOpen === true) {
        return "The umbrella is already opened!";
      } else {
        umbrella.isOpen = true;
        return "Julia opens the umbrella!";
      }
     }
  };
  console.log(umbrella.open())

  var sister = {
    name: "Sarah",
    age: 23,
    parents: [ "alice", "andy" ],
    siblings: ["julia"],
    favoriteColor: "purple",
    pets: true,
    paintPicture: function() { return "Sarah paints!"; }
  };

  
  // example code of object

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
     printAccountSummary: function() {
        return "Welcome!\nYour balance is currently $" + savingsAccount.balance + " and your interest rate is " + savingsAccount.interestRatePercent + "%."
    }
};

console.log(savingsAccount.printAccountSummary());

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Define an object
  var you = new Person('You', 24);
  // We are creating a new person named "You" aged 24.