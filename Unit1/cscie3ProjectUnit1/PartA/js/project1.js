/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2015
 *
 * Unit #1 Project
 *
 * Don't worry if you don't understand all the code in these examples. We're exploring a very specific
 * skill in these examples: using Firebug to find and correct errors in your code.
 *
 * By the end of the course you'll be writing stuff like this in your sleep, but for now, just focus on
 * the question at hand: why don't these work as intended?
 *
 */
"use strict";

 var clickme1Btn = document.getElementById("clickme1");
 clickme1Btn.onclick = function(){
 		// This is the code that will be executed when the button is clicked.
 		// It should pop up an 'alert' box that says "Hello"!
 		alert("Hi! (This is the first of three messages)");
 		//then it will pop up an alert that says "Welcome to CSCI E-3!"
 		alrt("Welcome to CSCI E-3! (This is the second of three messages)");
 		//then it will pop up one more alert to say "You did it!"
 		alert("You did it! (This is the third of three messages)");
 }



 var clickme2Btn = document.getElementById("clickme2");
 clickme2Btn.onclick = function(){

        /*
         *       This function access and manipulates the HTML structure of the Web page
         *        in order to do its business. The manipulations are very simple.
         *
         *        The HTML looks something like this:
         *
         *         <input id="input1" type="number">
         *         <input id="input2" type="number">
         *         <input id="input3" type="number"><br>
         *            <div>Your total is: <span id="resultArea"></span></div>
         *            <div id="clickme2" class="hwbutton">Click Me #2</div>
         *
         *       Don't worry about understanding it all. Just look for a very simple
         *       error in my code for adding three numbers. It's not code that the browser
         *       chokes on - it's syntactically correct and runnable code. It just doesn't do
         *       what I meant to do (add three numbers).
         *
         *        */

 	// get the values from the three text fields
 	var val1 = document.getElementById("input1").value;
 	var val2 = document.getElementById("input2").value;
 	var val3 = document.getElementById("input3").value;

 	//check that they are integers, otherwise make them zero
 	val1 = (parseInt(val1) ? parseInt(val1) : 0);
 	val2 = (parseInt(val2) ? parseInt(val2) : 0);
 	val3 = (parseInt(val3) ? parseInt(val3) : 0);

 	// add the three values
 	var total = val1 + val2;

 	//display the total in the results area
 	document.getElementById("resultArea").innerHTML=total;
 }