// Initialize our two test-case arrays
var arrayOne = [1, 3, 5, 7, 9];
var arrayTwo = [1, 3, 5, "seven", 9];

//assign our function to the variable function_test
var function_test = function(element){
    return Number(element);
};

// Call Array.every() on each array, passing
// in a function that tests each element
logMessage("arrayOne: " + arrayOne.every(function_test));
logMessage("arrayTwo: " + arrayTwo.every(function_test));


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}