// Inefficient loop
let numbers = [1, 2, 3, 4, 5];
for (let value of numbers) {
  console.log(value);
}

// Potential bug: missing break in switch case
let fruit = "apple";
switch (fruit) {
  case "apple":
    console.log("An apple");
    break;
  case "banana":
    console.log("A banana");
    break;
  default:
    console.log("Unknown fruit");
}

//console log after return
function checkNumber(num) {
    if (num > 10) {
      return "Greater than 10";
    }
    return "10 or less";
}
console.log(checkNumber(15));

let str = "Hello World";
let result = str.substr(1, 4); // substr is deprecated
console.log(result);
//fixed
let newstr = "Hello World";
let newresult = str.substring(1, 5); // substr is deprecated
console.log(newresult);

//sonarlint not recoginesed

function greet(name, unusedParam) {
    console.log("Hello, " + name);
  }
greet("Alice");

//Should be === instead of ==
let a = 2;
if (a === "2") {
  console.log("Equal");
}
//variable console loged before variable exists
console.log(logvariable);
let logvariable = 5;

//no default switch
let color = "green";
switch (color) {
  case "red":
    console.log("Red");
    break;
  case "blue":
    console.log("Blue");
    break;
}

//unused variable
let unused = "I am never using this";

let vaiable = "merge conflict";