'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

//console.log(calcAge(1991));

// THIS FUNCTION IS GLOBAL SCOPED, TOP LEVEL CODE.
// THIS FUNCTION ALSO CREATES IT'S OWN SCOPE
// AND THAT SCOPE IS GOING TO BE EQUIVALENT TO THE VARIABLE ENVIROMENT OF ITS EXECUTION CONTEXT

// for scoping the parameter of a function works just like a normal variable
// the scope of a variable is the entire region where this variable is accessible

// THE SCOPE OF A VARIABLE DECLARED WITH VAR IT'S ALL THE FUNCTION SCOPE NOT THE BLOCK

//----------- >
