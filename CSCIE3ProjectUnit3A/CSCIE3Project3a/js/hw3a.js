/* hw3a.js  */

// your solution here
/*
 * To break the problem into smaller pieces, you may want to think about it as a few simple steps that may look something like this:

 1. Divide the text into an array of words.
 2. Iterate over that array, at each step:
 a. Build SPAN elements as you go, along with the attributes as shown in the example
 b. Add the SPAN elements to the original DIV
 3. Add a handler to the SPAN elements, or to the DIV, which causes the style on the SPAN to change on mouseover.
 */
window.onload = function() {

    var transcript_primitive = document.getElementById("transcriptText").innerHTML;
    var innerHTML_array = transcript_primitive.split(" ");

    /* I learned of this for loop structure from
     * http://stackoverflow.com/questions/5767325/remove-a-particular-element-from-an-array-in-javascript
     * I am aware of other array methods of cleaning up an array's values such as filter, but I really
     * enjoyed the decrement functionality of this for loop approach*/
    for(var i = innerHTML_array.length - 1; i >= 0; i--) {
        if(innerHTML_array[i] === "") {
            innerHTML_array.splice(i, 1);
        }
    }

    /* Clearing the contents on the div element prior to refilling via an itteration with new elements and attributes*/
    //transcript_primitive = " ";
    document.getElementById("transcriptText").innerHTML = "";

    var arrayLength = innerHTML_array.length;
    for (var i = 0; i < arrayLength; i++){
        var el = document.createElement("span"); // new SPAN
        el.setAttribute("class","word");
        el.setAttribute("id","word"+i);

        /* Space added to the end to logically print the words WITH spaces*/
        var t = document.createTextNode(innerHTML_array[i]+" ");
        el.appendChild(t);
        //var t = document.createTextNode(innerHTML_array[i]);
        //el.appendChild(t);

        //transcript_primitive.appendChild(el);
        var a = document.getElementById("transcriptText");
        a.appendChild(el);

        /*p.insertBefore(d, arrayLength[i]);   // insert it right before text node
         d.appendChild(arrayLength[i]);       // move text node into the span
         d.setAttribute("class", "searchHit");  // apply highlight*/
    }


};