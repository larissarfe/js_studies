'use strict';

//console.log(me);
//console.log(job);
//console.log(year);

//var me = 'Jonas';
//let job = 'teacher';
//const year = 1991;

//==============================>>> HOISTING WITH FUNCTIONS:

console.log(addDecl(2, 3));
console.log(addExpr);
console.log(addArrow);

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

//function calcAge(birthYear) {
//const age = 2037 - birthYear;
//return age;
//}

//console.log(calcAge(1991));

// THIS FUNCTION IS GLOBAL SCOPED, TOP LEVEL CODE.
// THIS FUNCTION ALSO CREATES IT'S OWN SCOPE
// AND THAT SCOPE IS GOING TO BE EQUIVALENT TO THE VARIABLE ENVIROMENT OF ITS EXECUTION CONTEXT

// for scoping the parameter of a function works just like a normal variable
// the scope of a variable is the entire region where this variable is accessible

// THE SCOPE OF A VARIABLE DECLARED WITH VAR IT'S ALL THE FUNCTION SCOPE NOT THE BLOCK

//----------- >
