"use strict";

// Insert your code for #1 here
var x = 2;
if (x<0){
    alert("x is less than 0");
}else if (x==0){
    alert("x equals 0")
}else { // final else statement does not require and if statement
    alert("x is greater than 0")
}


// Insert your code for #2 here
    var myCaptains = ["James T. Kirk", "Jean-Luc Picard", "Katherine Janeway"];

// braces added for readability and proper looping execution
for (var i = 0; i < myCaptains.length; i++){
    myCaptains[i] = myCaptains[i].toUpperCase();
    console.log("The Captain in Capitals is " + myCaptains[i]);
}
console.log(i + " captains have been capitalized");
