// the sample input data we'll be validating

var scoresArray4 = "this isn't an array";
//hint: try testing to see if this is actually an array before doing anything else in the function.  Remember that 'typeof' works for simple data types, but [object].constructor.name will tell you the type of many objects. We show this in video 4.4 (towards the end).

var scoresArray5 = [76, 83, "90"];
// hint: try converting each (or each non-numeric) array element to a number as you come to it

var scoresArray6 = [88, 73, "bob", 100];
// hint: while you're converting all array elements to numbers, use a conditional to check to see if it worked before adding the value to the sum

var scoresArray7 = [];
//empty array added by me

// function calculateSum() is here
// You will modify this function so that none of the above cases
// "break" the code. If the sum simply can't be done (as in scoresArray4),
// return the value 'null' or nothing at all, and write an error to the console.
// Otherwise, if a sum can still be calculated, return that

/*
* This function calculates the sum of all integers within each array passed as a argument. The function first
* validates whether the array parameter is in fact an array. The function then iterates over each numeric member through
* a foreach method while simultaneously verifying a number data type before incrementing the sum total. If the argument
* fails the validity test for the array data type, a respective output message is returned depending according to whether
* the array is undefined or empty.*/
function calculateSum(arr){
    if (arr.constructor === Array && arr.length > 0){
        var sum=0;
        arr.forEach(function(n){
            var num = parseInt(n);
            //checking whether each array member is a number prior to summing a total
            if(!isNaN(num)){
                sum+=num;
            }
        });
        return sum;
    }
    else if (arr.length === 0){
        return "Error, please define an element within the array."
    }
    else {
        return "Error, please provide a legal array.";
    }
}

document.getElementById("sum4").innerHTML = calculateSum(scoresArray4);
document.getElementById("sum5").innerHTML = calculateSum(scoresArray5);
document.getElementById("sum6").innerHTML = calculateSum(scoresArray6);
// also check for undefined blank input
document.getElementById("sum7").innerHTML = calculateSum(scoresArray7);