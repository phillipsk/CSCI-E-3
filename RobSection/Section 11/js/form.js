function processFormOne(evt) {
    console.clear();
    var form1Msg = document.getElementById('form1Msg');

    // Modified from Larry's example
    if (! this.validity.valid) {
        console.log("Too high: " + this.validity.rangeOverflow);
        console.log("Too low: "  + this.validity.rangeUnderflow);

        if (this.validity.rangeOverflow) {
            form1Msg.innerHTML = 'Number is too high';
        } else if (age.validity.rangeUnderflow) {
            form1Msg.innerHTML = 'Number is too low';
        }
    } else {
        form1Msg.innerHTML = '';
    }
}

// Validation modified from: http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/

function processFormTwo(evt) {
    console.clear();
    var target   = evt.target;
    var form2Msg = document.getElementById('form2Msg');

    if (target.validity.patternMismatch) {
        form2Msg.innerHTML = 'Field ' + target.id + ' has failed its pattern validity check.';
    } else {
        form2Msg.innerHTML = '';
    }
}

function processFormThree(evt) {
    console.clear();
    var target   = evt.target;
    var form3Msg = document.getElementById('form3Msg');

    if (target.validity.typeMismatch) {
        form3Msg.innerHTML = 'Field ' + target.id + ' has failed its type validity check.';
    } else {
        form3Msg.innerHTML = '';
    }
}

function processFormFour(evt) {
    console.clear();
    var target             = evt.target;
    var form4CheckBoxLabel = document.getElementById('form4CheckBoxLabel');
    if (target.checked) {
        form4CheckBoxLabel.innerHTML = 'Uncheck Me';
    } else {
        form4CheckBoxLabel.innerHTML = 'Check Me';
    }
}

window.onload = function() {
    var forms = document.forms;

    var form1 = document.getElementById('form1');
    //form1.addEventListener('submit', function(evt) { evt.preventDefault(); }, false);
    //document.forms[0].addEventListener('submit', function(evt) { evt.preventDefault(); }, false);

    var age = document.getElementById('age');
    age.addEventListener('change', processFormOne, false);

    var form2 = document.getElementById('form2');
    form2.addEventListener("input", processFormTwo, false);

    var form3 = document.getElementById('form3');
    form3.addEventListener("input", processFormThree, false);

    var form4CheckBox = document.getElementById('form4CheckBox');
    form4CheckBox.addEventListener('change', processFormFour, false);

    // bind submit event handler to all forms
    var len = forms.length;
    for (var i = 0; i < len; i++) {
        forms[i].addEventListener('submit', function(evt) { evt.preventDefault(); }, false);
    }

    traverseForms(forms);
}