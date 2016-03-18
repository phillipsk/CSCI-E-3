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
var wordcount = document.getElementById("wordcount");

getWordsToCount_HTML_Element.onkeyup = function (){
    var str = getWordsToCount_HTML_Element.value;
    var res = str.split(" ");
    console.log(res.toString());
    myCleanUp(res);
    console.log(res.toString());
    wordcount.innerHTML = res.length;
    //wordcount.innerHTML = res.length;
};

// extra credit attempt
function myCleanUp (array_param){
    for (var i = 0; i < array_param.length +4; i++){
        //console.log(array_param[i]);
        console.log(array_param.toString());
        if (array_param[i] == ""){
            array_param.splice(i,1);
        }
        console.log(array_param.toString());
/*        if (res[i] == res[i-1]){
            res.splice(i,1);
        }*/
    }
};