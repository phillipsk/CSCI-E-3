var ssn = document.getElementById('ssn');

ssn.addEventListener('keyup', function(e) {
    var ssnVal = this.value.trim();
    var char = ssnVal.charAt(ssnVal.length - 1);
    if (ssnVal.length > 11 || (! char.match(/\d{1}/) && ! char.match(/-/))) {
        this.value = ssnVal.substring(0, ssnVal.length - 1);
    }
});

ssn.addEventListener('blur', function(e) {
    var ssnVal = this.value.trim();

    if (ssnVal != '') {
        // check if first dash is in right position
        if (ssnVal.indexOf('-' > 3)) {
            // remove anything that isn't a number
            ssnVal = ssnVal.replace(/[^\d]/g, '');

            // now that we don't have dashes in the wrong place,
            // make sure we only have 9 numbers
            var len = ssnVal.length;
            if (len > 9) {
                ssnVal = ssnVal.substring(0, 9);
            }
        }

        // check for valid ssn format
        if (! ssnVal.match(/\d{3}-\d{2}-\d{4}/)) {
            // check for all digits
            if (ssnVal.match(/\d{9}/) ) {
                // format ssn
                this.value = ssnVal.replace(/(\d{3})(\d{2})(\d{4})/, '$1-$2-$3');
            } else {
                this.value='';
                this.focus();
                alert('Malformed input!');
            }
        }
    }
});