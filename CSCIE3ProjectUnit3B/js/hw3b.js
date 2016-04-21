/* hw3b.js */

/*
 *Users must enter passwords of at least 8 characters.
 The two fields must match.
 Users receive feedback immediately if the passwords don't match, rather than only when the form is submitted.
 */
function processFormOne(evt) {

    // Modified from Larry's example & Rob's section
    if (!pwd1.validity.valid && !pwd2.validity.valid) {
        pwd1Hint.style.display = 'block';
    } else {
        pwd1Hint.style.display = 'none';
    }
    // using CSS property here to notify user
    if (pwd1.value != pwd2.value) {
        pwd2Hint.style.display = 'block';
    } else {
        pwd2Hint.style.display = 'none';
    }
}

// data structures for selection option Question 3
var autoMake = ['Ford', 'Dodge'];
var modelFord = ['Focus', 'Fusion', 'Mustang'];
var modelDodge = ['Charger', 'Challenger', 'Caravan'];
var year = ['1998', '1999', '2000'];

function clearSelectList(el) {
    var MAX = el.length;
    for (var i = MAX; i >= 0; i--) {
        el.remove(i);
    }
}

window.onload = function () {
    var forms = document.forms;

    // password validation Question 1
    var form1 = document.getElementsByName('hw4Form');
    var pwd1 = document.getElementById('pwd1');
    var pwd2 = document.getElementById('pwd2');
    pwd1.addEventListener('change', processFormOne, false);
    pwd2.addEventListener('change', processFormOne, false);
    var pwd1Hint = document.getElementById('pwd1Hint');
    var pwd2Hint = document.getElementById('pwd2Hint');

    // bio brief text countdown Question 2
    /*There is a textarea on the form labeled Brief Bio. This is going to be really brief. Your code will provide a countdown near the 140 character limit caption that counts backwards from 140 to zero to show users how many characters they have left.  You may make it so that once the limit is reached, no more characters show in the field, even if the user keeps typing. Alternatively, you may choose to let users keep typing, but have the page show users how far over the limit they've gone. */
    var txt = document.getElementById("bio");
    txt.addEventListener("keyup", function () {
        var limit = 140;
        document.getElementById("charsLeft").innerHTML = limit - this.value.length;
    });

    // selection option Question 3
    /*Sometimes a selection in a pull-down menu (an HTML SELECT) should populate another SELECT field with complimentary values.  For example, if we're selecting cars, picking "Ford" in the Make field should populate the Model field with Ford models, such as the Focus, the Fusion, and the Flex, while picking "Dodge" might populate the Model field with values that include Charger, Challenger, and Caravan.

     Your task is to make the two complimentary SELECT controls work in this way—selecting a value in the first populates the second with appropriate choices. The types of values are entirely up to you— automobile Make/Model is just an example.  */
    var makeSelect = document.getElementById('firstSelect');
    var modelSelect = document.getElementById('secondSelect');
    var thirdSelect = document.getElementById('thirdSelect');
    var select3Div = document.getElementById('select3Div');
    var len = autoMake.length;

    // Learned of this code structure from Rob's section
    // use a for loop because the index is needed
    for (var i = 0; i < len; i++) {
        var opt = document.createElement('option');
        var txtNode = document.createTextNode(autoMake[i]);
        opt.value = i;
        opt.appendChild(txtNode);
        makeSelect.appendChild(opt);
    }

    makeSelect.addEventListener('change', function () {
        var indx = this.value;

        // Clears the option list between changes
        clearSelectList(modelSelect);

        if (indx != '') {

            if (makeSelect.value == autoMake.indexOf("Ford")) { // Ford
                select3Div.style.display = 'none';
                var len = modelFord.length;
                for (var i = 0; i < len; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(modelFord[i]);
                    opt.appendChild(txtNode);
                    modelSelect.appendChild(opt);
                }
            } else if (makeSelect.value == autoMake.indexOf("Dodge")) { // Dodge
                // populate secondSelect with Dodge models
                var len = modelDodge.length;
                for (var i = 0; i < len; i++) {
                    var opt = document.createElement('option');
                    var txtNode = document.createTextNode(modelDodge[i]);
                    opt.appendChild(txtNode);
                    modelSelect.appendChild(opt);
                }
               /* Debated adding this to a separate addEventListener method outside of this event scope to prevent
                duplicate option entries*/
                if (modelSelect.value != '') {
                    thirdSelect.style.display = 'block';
                    select3Div.style.display = 'block';

                    for (var i = 0; i < len; i++) {
                        var opt = document.createElement('option');
                        var txtNode = document.createTextNode(year[i]);
                        opt.value = i;
                        opt.appendChild(txtNode);
                        thirdSelect.appendChild(opt);
                    }
                }
            } else {
                var opt = document.createElement('option');
                var txtNode = document.createTextNode('----');
                opt.appendChild(txtNode);
                modelSelect.appendChild(opt);
            }
        }

    })
};