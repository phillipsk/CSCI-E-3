/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Third problem: Splitting a String
  *
  ********************************************************************/


  var splitName = document.getElementById("splitName");
splitName.onclick = function(){

               var fullname = document.getElementById("fullName").value;
               //var fullname = "Kevin";

               /*
                *  We've gotten the fullname from the HTML form field.
                *  Your job is to use the String.slice(), String.substring() or String.substr() functions
                *  to divide your name into separate first and last name strings and assign
                *  them to the variables provided. You may
                *  need String.indexOf() as well.
                *
                *  You may not hardcode the position of where to split the string. Your code should
                *  work for anyone's first and last name. If the user enters a name without any whitespace
                *  return that as firstname and leave lastname blank.
                *
                *  If a name has more than one whitespace (as in, using one or more middle names),
                *  make the first name 'firstname' and assign the rest to 'lastname'
                *
                **/
  var whitespace = fullname.indexOf(" ");
    var first_whitespace = fullname.substring(0,1);
    //console.log(first_whitespace);
    if (whitespace === -1){ //  first_whitespace != " "){
        var whitespace = fullname.indexOf(" ");
        var firstname = fullname.substring(0);
        var lastname = "";
    }
    else {
        var firstname = fullname.substring(0,whitespace);
        var lastname = fullname.substring(whitespace);
    }



               //var firstname = test; //'Kevin';
               //var lastname = test2; //'Phillips';


               document.getElementById("firstname").innerHTML = firstname;
               document.getElementById("lastname").innerHTML = lastname;


}