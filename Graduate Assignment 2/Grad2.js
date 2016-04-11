var f = document.forms[0];
var pwInput = document.forms[0].password;
var pwHint = document.getElementById("pwHint");
/*  This handler will run when you submit the form    */
f.addEventListener("submit", function (e) {

    /// Here we can do whatever we want with the form
    //    and its elements. 
    for (var i = 0; i < f.elements.length; i++) {
        console.log(f.elements[i].value);
    }

    // if things aren't right, I can cancel the form
    //  submission right here:
    pwInput.addEventListener("input", function () {
        // We check the element's 'validity' property,
        //  which will be 'valid' or some other value
        //  (the specific kind of invalid depends on the constraint)

        if (!this.validity.valid) {
            // For min/max constraints,
            //  rangeUnderflow or rangeOverflow apply
            console.log("Too high: " + this.validity.rangeOverflow);
            console.log("Too low: " + this.validity.rangeUnderflow);

            //output a useful message
            if (this.validity.rangeOverflow) {
                pwHint.innerHTML = 'Number is too high';
                e.preventDefault();
            } else if (this.validity.rangeUnderflow) {
                pwHint.innerHTML = 'Number is too low';
                e.preventDefault();
            }
        } else {
            // don't forget to clear hint if the input becomes valid!
            pwHint.innerHTML = '';
        }


    });
});

