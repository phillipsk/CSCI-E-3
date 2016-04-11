window.onload = function () {

    // this will retreive the first form in our HTML
    var f = document.forms[0];

// these all will retreive the HTMLInputElement for first name
    console.log(  f["firstname"]  );     // fname
    console.log(  f.firstname  );        // fname
    console.log(  document.getElementById("fname")  );  // fname
    console.log(  f[0])  ;   		     // fname


    console.log(f.elements[0].id);
    console.log(f.elements["firstname"].id);

    console.log(f[1].id);
    console.log(f["firstname"].id);

/*    var els = f.elements;
    for (var i=0; i<els.length; i++){
        console.log("for loop: " + els[i].value)
    }*/

    traverseDOM();
};

function traverseDOM() {
    var f = document.forms[0];
    var els = f.elements;
    for (var i=0; i<els.length; i++){
        console.log("for loop: " + els[i].value)
    }
}