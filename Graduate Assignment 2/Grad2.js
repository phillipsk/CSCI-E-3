var f = document.forms[0];
var pwInput = document.forms[0].password;
var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

/*  This handler will run when you submit the form    */
f.addEventListener("submit", function (e) {
    if (!regex.test(pwInput.value)) {
        e.preventDefault();
    }
});

// 1Uu45678