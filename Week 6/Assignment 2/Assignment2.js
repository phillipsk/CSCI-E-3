// Initialize our personInfo Object
var personInfo = {
    fname: "Bill",
    lname: "Adama",
    addr: "Galactica CIC",
    email: "N/A",
    Shoe_size: "8",
    Weight: "150"

/*    "printMe": function(){
        return "This person is " + this.fname + " " + this.lname + " and lives in " + this.addr + " and can be reached at " + this.email;
    }*/
};

for (var key in personInfo){
    logMessage(personInfo[key]);
}

/*What's the significance of the two parameters below?*/

// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}