// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction = function () {
console.log("Function was invoked!");
};
myFunction();

let anotherFunction = function (param) {
  return param;
};
anotherFunction("Example");

let add = function (param1, param2) {
  return param1 + param2;
};
add(1,2);

let subtract = function (param1, param2) {
  return param1 - param2;
};
subtract(1,2);



// ES6 arrow syntax
let myFunction2 = () => {
  console.log("Function2 was invoked!");
  };
  myFunction2();
  
  let anotherFunction2 = (param) => {
    return param;
  };
  anotherFunction2("Example2");
  
  let add2 = (param1, param2) => {
    return param1 + param2;
  };
  add2(1,2);
  
  let subtract2 = (param1, param2) =>{
    return param1 - param2;
  };
  subtract2(1,2);
  

// Stretch

// exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });
// console.log(triple);