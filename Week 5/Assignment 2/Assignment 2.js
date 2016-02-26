// the sample input data we'll be validating

var scoresArray4 = "this isn't an array";
//hint: try testing to see if this is actually an array before doing anything else in the function.  Remember that 'typeof' works for simple data types, but [object].constructor.name will tell you the type of many objects. We show this in video 4.4 (towards the end).

var scoresArray5 = [76, 83, "90"];
// hint: try converting each (or each non-numeric) array element to a number as you come to it

var scoresArray6 = [88, 73, "bob", 100];
// hint: while you're converting all array elements to numbers, use a conditional to check to see if it worked before adding the value to the sum

var scoresArray7 = [];

// function calculateSum() is here
// You will modify this function so that none of the above cases
// "break" the code. If the sum simply can't be done (as in scoresArray4),
// return the value 'null' or nothing at all, and write an error to the console.
// Otherwise, if a sum can still be calculated, return that


function calculateSum(arr){
    if (arr.constructor === Array && typeof arr !== 'undefined' && arr.length > 0){
        var sum=0;
        arr.forEach(function(n){
            var num = parseInt(n);
            console.log(n);
            if(!isNaN(num)){
                sum+=num;
            }
            //console.log(parseInt(n),sum);
        });
        return sum;
    }
    else {
        return "Error, please provide a legal array.";
    }
}

//how do I define an empty array, I am trying to test for it.. var scoresArray7 = []; does not seem to be undefined
/*var sum = 0;
scoresArray5.forEach(function(n){
    var num = parseInt(n);
    if(!isNaN(num)){
        sum+=num;
    }
    console.log(parseInt(n),sum);
    //theArray[index] = num;
});
console.log("sum = ",sum);*/

/*var result = scoresArray5.map(Number).filter(function(n) {
    return !isNaN(n)
});*/

//console
/*
for (var i = 0; i < scoresArray5.length; i++) {
    console.log(scoresArray5[i]);
}*/

document.getElementById("sum4").innerHTML = calculateSum(scoresArray4);
document.getElementById("sum5").innerHTML = calculateSum(scoresArray5);
document.getElementById("sum6").innerHTML = calculateSum(scoresArray6);

// also check for undefined blank input
document.getElementById("sum7").innerHTML = calculateSum(scoresArray7);


// Example from Week 5 lecture
/*
var myArray = ["LArry", "john", "BILL" ];

myArray.forEach(function(val, index, theArray){

    var lower = val.toLowerCase();
    var upper = val.toUpperCase();
    var correct = upper.substr(0, 1) + lower.substr(1);
    //alert(correct);
    theArray[index] = correct;

});*/
