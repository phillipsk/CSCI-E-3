"use strict";

// three arrays we'll calculate averages
var scoresArray1 = [87, 93, 69, 96, 77, 81];
var scoresArray2 = [56, 82, 71];
var scoresArray3 = [99, 97, 91, 89, 92];

// You'll write a function here called calculateAverage, which will
//  accept one argument - the array, and return the average of the
//  numbers in the array.



/*This function takes an array as a parameter and iterates over each expected integer value within the
passed array, sequentially adding to the variable sum and terminates with dividing by each passed parameter's
length method equating to a numeric average of each array argument's integer members
 */
function calculateAverage(array_params){
    var sum = 0;
    for (var i= 0;i<array_params.length;i++){
        sum+=array_params[i];
    }
    var average = sum/array_params.length;
    return average
}




//here we're calling your function on the three arrays and outputting the result
document.getElementById("average1").innerHTML = calculateAverage(scoresArray1);
document.getElementById("average2").innerHTML = calculateAverage(scoresArray2);
document.getElementById("average3").innerHTML = calculateAverage(scoresArray3);


// Example from Week 5 class
/*
var myArray = ["LArry", "john", "BILL" ];

 myArray.forEach(function(val, index, theArray){

 var lower = val.toLowerCase();
 var upper = val.toUpperCase();
 var correct = upper.substr(0, 1) + lower.substr(1);
 //alert(correct);
 theArray[index] = correct;

 });



 logMessage(myArray);

 // Utility function for logging convenience
 // Logs msg to the element with given id
 // If id is undefined, logs to #output
 function logMessage(msg, id){
 if (!id){
 id="output";
 }
 document.getElementById(id).innerHTML += msg + "<br>";
 }
 */