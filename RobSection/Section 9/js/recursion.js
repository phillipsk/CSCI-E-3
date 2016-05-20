/*
 * This file is modified from Larry's domtree.js demo.
 */
window.onload= function() {
    var output       = document.getElementById("output");
    var elemetnCount = 0;
    var str          = 'The HTML Element tags are:<br />';

    // recursive function to traverse the DOM
    function traverse(element) {
        var nodeName = element.nodeName;

        console.log('Call to traverse(el) function, where el = <' + nodeName + '>.');
        str += nodeName + "<br />";

        var len = element.children.length
        for (var i = 0; i < len; i++) {
            // call recursive funct with current element's children
            traverse(element.children[i]);
        }

        elemetnCount++;
    }

    // initial call to function
    traverse(document.documentElement);

    console.log(elemetnCount + ' HTML Elements were found on this page.');

    // display elements
    output.innerHTML = str;
}