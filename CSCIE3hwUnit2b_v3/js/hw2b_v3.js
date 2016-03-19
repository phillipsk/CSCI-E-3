/* hw2b.js */
"use strict";

// First we do a self-invoking function that contains everything - there will be nothing
//  exposed to the global scope.
(function(){
    var button = document.getElementById("doit");
    var element = document.getElementById("output");

    // Constructor function
    function AddBookEntry(n,a,e){
        //var AddressBook_Array = [];
        this.n = name;
        this.a = address;
        this.e = email;

        console.log("2 " + name);
        // Functions - Getters
        this.getName = function(){
            return this.n;
        },
        this.getAddress = function(){
            return this.a;
        },
        this.getEmail = function(){
            return this.e;
        }
    }

    button.onclick = function(){
        /*  This function will run when the user clicks on the
         *  Save button.  We're going to do several things when this function
         *  runs:
         *  1) Get the values from the form. We have done this part for you
         *  2) Create a new data object that contains the information from the form. This could be
         *     a constructor funtion that takes each of the values as its arguments, or a simple
         *     JSON object (an object literal, more or less).
         *  3) Write this data object to the page. You'll do this by calling writeRowToPage() and
         *     passing your data object as a parameter.  We have provided a sample of this
         *     function for you, though you may have to modify/complete it so that it works
         *     with your data structure.
         *  4) Store your data to localStorage.  Remember that localStorage stores only
         *     strings, so you'll need to stringify your object. Remember, too, that when you
         *     write to localStorage, you can't add to or modify what's already there - you can only
         *     replace it completely, so you'll need a strategy to manage your accumulating data. See the
         *     Project 2B document for more information.
         *
         *     */
        //Step #1 - we get values from the form
        var name = document.getElementById("name").value;
        var address = document.getElementById("address").value;
        var email = document.getElementById("email").value;

        //console.log("1 " + name);
        // Step #2 - you will create a new data object
        var myAddressBookEntry = new AddBookEntry(name,address,email);
        //console.log(name);
        console.log(myAddressBookEntry);

        //var myAddrnew AddBookEntry(name,address,email);

        // Step #3 - call on writeRowtoPage() to write your new data object to the page
        writeRowToPage(myAddressBookEntry,element);
        writeRowToPage(myAddressBookEntry,address);
        writeRowToPage(myAddressBookEntry,email);

        // Step#4 - Store your object in localStorage (preserving data
        //          that's already in there from prior submissions!)


    };

    /* This function accepts two arguments -
     *    @dataObject: your data object representing a single
     *                 submission of the data form, which corresponds
     *                 to one row in the table
     *    @element:   the element on the page to which to write the output
     *
     *    The function assembles a string of HTML, using the data from
     *    dataObject.  Once the string is complete, it is appended to the
     *    page using innerHTML.
     *
     *    This has been coded to work with a sample data object that contains
     *    properties for name, addr, and email. Your data object may be different,
     *    in which case you will need to change this function accordingly.
     *
     * */
    function writeRowToPage(dataObject, element) {
        var s = "<div class=\"info\">";

        s+='<div class="nameDiv">';
        if (dataObject.name !== 'undefined') {
            s+=dataObject.name;
        }
        s+= '</div><div class="addrDiv">';
        if (dataObject.addr !== 'undefined') {
            s+=dataObject.addr;
        }
        s+= '</div><div class="emailDiv">';
        if (dataObject.email !== 'undefined') {
            s+=dataObject.email;
        }
        s+= '</div></div>';

        element.innerHTML += s;
    }


    /* Step #5, Finally, write a function or other code that will, upon page load,
     * look in localStorage for any existing data, create data objects from it, and
     * write those data objects to the page using writeRowToPage().  This way
     * any time the user revisits this page, they'll see what was previously entered (provided
     * that they use the same browser on the same computer!)
     * */


})();
