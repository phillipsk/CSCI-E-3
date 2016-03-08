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

var start = 7;
var length = 20;

/*
Develop a function that calculates a Hailstone Sequence
https://en.wikipedia.org/wiki/Collatz conjecture

From the above link: The conjecture can be summarized as follows. Take any positive integer n.
If n is even, divide it by 2 to get n / 2. If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
Repeat the process indefinitely. The conjecture is that no matter what number you start with,
you will always eventually reach 1 and a 4,2,1 repeating sequence thereafter.

Utilize two parameters in your function, one value to represent the beginning hailstone sequence number,
and a second value passed as the length or steps needed to reach the conjecture. Use an array and an array method
to append elements to the functions returned value, an array. This array will represent the Hailstone Sequence.
*/
function compute_Hailstone_Sequence(begin_num, steps) {
var returned_array = [];
    returned_array.push(begin_num);

// expected output = 7,22,11,34,17,52,26,13,40,20,10,5,16,8,4,2,1,4,2,1
    var x = 0;
    var min, max = begin_num;

    for (var i = 1; i < steps; i++) {
        if ((begin_num & 1) == 0) {
            /*Even*/
            x = begin_num / 2;
            console.log(x);
            returned_array.push(x);
            begin_num = x;
        } else {
            /*Odd*/
            x = (3 * begin_num + 1);
            console.log(x);
            returned_array.push(x);
            begin_num = x;
        }
    }
        return returned_array;
}

logMessage(compute_Hailstone_Sequence(start,length));