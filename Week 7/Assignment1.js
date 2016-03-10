// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id) {
    if (!id) {
        id = "output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}


function AddrBookEntry(f, l, a, e) {
    this.fname = f;
    this.lname = l;
    this.addr = a;
    this.email = e;

    this.personRole = "student";
    this.getFullName = function(){
        return this.fname + " " + this.lname;
    }
}
// useless statement, does not return
AddrBookEntry("Sarah", "Connor", "Los Angeles", "sarah@prodigy.com");

// useful; better
var me =  new AddrBookEntry("Larry","Bouthillier","Massachusetts","lbouthillier@fas.harvard.edu");
var you = new AddrBookEntry("Any","Student","Cambridge","astudent@fas.harvard.edu");
//var you = AddrBookEntry("Sarah", "Connor", "Los Angeles", "sarah@prodigy.com");

//logMessage(AddrBookEntry.fname);     	   // Larry
logMessage(me.fname);     	   // Larry
logMessage(me["fname"]);    	   // Larry
logMessage(me.getFullName());   // Larry Bouthillier
logMessage(you.getFullName());  // Any Student

for (var i = 0; i < you.length; i++){
    //me[i] = me[i].toUpperCase();
    console.log(you[i] + " ");
}

/*
*  If we mistakenly call the constructor function like this rather than using the new operator, the
*  AddrBookEntry("Sarah", "Connor", "Los Angeles", "sarah@prodigy.com");
*  javascript console debugger returns the statement as undefined. I believe this question is centered
*  around implicit this parameter context and the window name property innately inherited within the jsfiddle
*  examples.
*  */