/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Second problem: Put An X
  *
  ********************************************************************/

var putAnXBtn = document.getElementById("putAnXButton");
putAnXBtn.onclick = function(){

 	// get a reference to the box
    console.log("hi");
        var theBox = document.getElementById("putAnX");

        // now get the width and height of the box - see the clientWidth and clientHeight documentation at http://docs.webplatform.org/wiki/dom/HTMLElement
        var width = theBox.clientWidth;
        var height = theBox.clientHeight;
    //console.log(height,width);


        /*
         *   Now, here's where you do your magic. The xPosition and yPosition should not be set to zero.
         *
         *   Use the Math.random() function to get a number between
         *   0 and 1, then use some math to convert that to a number between 0 and the width. This is your x position.
         *
         *   Do the same thing to generate a number between 0 and the height: this is your y position.
         *   */
        /*I tested the Math.Random method's pseudorandom number generation with max width and
        height combinations to better understand the method and ensure the random number
        boundaries were within the perimeter of the box
        */
        //for (i = 1; i<width*height;i++){

            //var yPosition = 0; // should generate a value between 0 and the height
            var yPosition = Math.floor((Math.random() * height) +1);
            var xPosition = Math.floor((Math.random() * width) +1);
            //var xPosition = 0;  //should generate a value between 0 and the width
            //console.log(yPosition,xPosition);
        //}


 	//now we'll get the HTML element where the X goes, fill in the X and set the position of the element.
 	var theXElement = document.getElementById("theX");
        theXElement.innerHTML="X";
        theXElement.style.top = parseInt(yPosition)+'px';
        theXElement.style.left = parseInt(xPosition)+'px';

 };
