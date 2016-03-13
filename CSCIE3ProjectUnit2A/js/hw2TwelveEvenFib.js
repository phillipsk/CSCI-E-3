/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */



 /********************************************************************
  *
  * Fourth problem: Sum of first 12 even Fibonacci numbers
  *
  ********************************************************************/
// first we get the HTML for the button
var getFibSum = document.getElementById("sumFib");

//then we set the event handler for when the button is clicked
getFibSum.onclick = function(){
               document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 };

 /*
  *  twelveEvenFibonacciSum - calulates the sum of the first 12 even fibonacci numbers, with 0, 1 being the first two numbers of the sequence
  *
  *            @returns {integer} The sum of the first 12 even Fibonacci numbers
  */
/// WRITE YOUR CODE HERE
var even_limit = 0;
var sum = 0;
var first = 0;
var second = 0;
var returned_array = [0];
var fib_array = [0,1];
var even_fib_sum = 0;

 // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
 function twelveEvenFibonacciSum(){
     for (var i = 0; even_limit < 11; i++) {

         if (i < 2){
             if (i == 0){
                 first = 1;
                 second = 0;
             }
             sum = first + second;
         } else {
             sum = first + second;
         }

          if (sum % 2 === 0){
              returned_array.push(sum);
              even_limit++;
              even_fib_sum+=sum;
          }

         fib_array.push(sum);

         second = first;
         first = sum;
     }
     return even_fib_sum;
 }
