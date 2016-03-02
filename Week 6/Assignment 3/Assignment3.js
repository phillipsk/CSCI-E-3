// Initialize our personInfo Object
var personInfo = {
    fname: "Bill",
    lname: "Adama",
    addr: "Galactica CIC",
    email: "N/A",
    title: "Admiral"
};

// Write the object to localStorage
var jsonPerson = JSON.stringify(personInfo);
window.localStorage.setItem("person", jsonPerson);

// Insert your code below to read the object back from localStorage,
// convert it back to an object,
// and iterate over its properties, printing the property names and their
// values using the logMessage() function. This last part should be
// identical to code you wrote for the previous pratice set


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}



//window.localStorage.setItem("person", JSON.stringify(configObject));
console.log("\nHere's the stringified object returned from localStorage");
//debugging
console.log(window.localStorage.getItem("person"));

//this s object refers to the JSON localstorage
var s = JSON.parse(window.localStorage.getItem("person"));
console.log("\nHere's the object returned from localStorage and parsed back to an object");
//debugging
console.log(s);

/*Here I iterate directly over the JSON local storage without having to
assign the parsed JSON output to a separate variable, more fully demonstrating
my knowledge and utilization of the JSON storage*/
for (var key in s){
    logMessage(s[key]);
}