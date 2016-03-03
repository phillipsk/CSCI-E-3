"use strict";
// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}

/*
 This purpose of this assignment is to demonstrate my knowledge thus far in the course through use of a potential
 Practice problem set to be used in next semester's curriculum.

 Write a function to convert a decimal number into a binary number. Use the provided logMessage function above
 to print the functions' returned value to the HTML output element.
 i.e. 23 = 10111


 This practice set is designed to familiarize you with function definitions, the scope of return variables,
 and binary notation!

 Explain why the toString method is needed. Additionally what error checking measures could you implement into
 the solution?
 */
var dec = 23;

function toBinary(dec){
    if (dec > 0){
        var solution1 = 0;
        solution1 = parseInt(dec,10).toString(2);
        return solution1;
    }
    return "Please enter an integer decimal value greater than 0"
}

logMessage(toBinary(dec));