/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


/********************************************************************
 *
 * Fifth problem: Counting Words with Spaces
 *
 ********************************************************************/

/*
* // first we get the HTML for the button
 var getFibSum = document.getElementById("sumFib");

 //then we set the event handler for when the button is clicked
 getFibSum.onclick = function(){
 document.getElementById("sumFibResult").innerHTML = twelveEvenFibonacciSum();
 };
 */


/*document.getElementById("fname").onkeyup = function() {myFunction()};

function myFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}*/
var getWordsToCount_HTML_Element = document.getElementById("myWordsToCount");


getWordsToCount_HTML_Element.onkeyup = function hw2WordCount(){
    var str = getWordsToCount_HTML_Element.value;
    var res = str.split(" ");
    console.log(res.toString());
    console.log(res.length);
    //res.splice(0,res.length);
    console.log(res.length);
    return res.length;
};

function myCleanUp (){
    for (var i = 1; i < res.length; i++){
        if (res[i] == res[i-1]){
            res.splice(i,1);
        }
    }
}

/*
window.onload = function caller(){
    document.getElementById("WordCount").innerHTML = hw2WordCount();
};
*/

