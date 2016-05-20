/*
 * The following function is modified from Larry's Fiddle:
 * http://jsfiddle.net/cscie3/2qwdvmeL/
 *
 * It prints any object that has printMe capability to the Console.
 */
function printObject(container, obj) {
    // First, test for the *existence of the property* printMe in the object
    if (obj.printMe) {
        container.innerHTML += obj.printMe();
    }
}

window.onload = function() {
    var container = document.getElementById('container');
    var planets = [];

    planets.push(mercury);
    planets.push(venus);
    planets.push(earth);

    var len = planets.length;
    for (var i = 0; i < len; i++) {
        printObject(container, planets[i]);
    }
}