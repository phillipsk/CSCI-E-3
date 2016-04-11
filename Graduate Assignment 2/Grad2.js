"use strict";
// create a 'DIV' element node and assign it to a variable
var element = document.createElement("div");

// using setAttribute(), give it an ID attribute of "myNewDiv"
element.setAttribute("id","myNewDiv");

// create a text node with some text of your choosing, and assign it to a variable
var t = document.createTextNode("Hello World");

// append you text node to your element
element.appendChild(t);

// append your new element to the existing div which has id="addNewOneHere"
var a = document.getElementById("addNewOneHere");
a.appendChild(element);