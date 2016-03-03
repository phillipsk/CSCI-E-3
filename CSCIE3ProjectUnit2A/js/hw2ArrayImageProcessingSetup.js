/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */


 /********************************************************************
  *
  * Setup for Image processing by way of arrays
  *
  * THIS FILE SETS UP THE FUNCTIONS YOU'LL BE WRITING IN THE
  * hw2ArrayImageProcessing.js FILE.  YOU DON'T NEED TO DO ANYTHING
  * IN THIS FILE AND SHOULD NOT MAKE ANY CHANGES HERE.
  *
  * YOU AREN'T EXPECTED TO UNDERSTAND THIS CODE,
  * THOUGH BY WEEK 14 WE WILL HAVE COVERED A LOT OF THIS. 
  *
  ********************************************************************/

 /*
 * We'll grab the canvas elements and the graphics contexts here
 *
 */
var canvases = [];
var contexts = [];
var newImageData = [];

/* there are separate canvases for each of the images you'll create:
 *    - a blue version,
 *    - a reversed version,
 *    - a transparent version,
 *    - a version that composites (adds) two images
 *
 *    We're using an array - canvases[] to store these
 *    */
canvases['orig'] = document.getElementById('originalCanvas');
canvases['blue'] = document.getElementById('blueCanvas');
canvases['reverse'] = document.getElementById('reverseCanvas');
canvases['trans'] = document.getElementById('transparentCanvas');
canvases['composite'] = document.getElementById('compositeCanvas');
canvases['composite_newimage'] = document.getElementById('compositeNewImageCanvas');


/*
 * Now get the image context for each canvas, and create a new ImageData object with the correct width and height
 */
for (var key in canvases){
// for each of the five canvases
               if(canvases.hasOwnProperty(key)) { // should not be necessary, but just in case

                              //set the canvas size
                              canvases[key].width = 150;
                              canvases[key].height = 100;

                              //make an image context for the canvas
                              contexts[key] = canvases[key].getContext('2d');

                              //create a new imageData object for the modified image
                              newImageData[key] = contexts[key].createImageData(canvases[key].width, canvases[key].height);

               }
}

/*
 * Then we create a Javascript Image object and set its source URL
 * to the location of the image file we'll be processing.
 */

var image_obj = new Image();
image_obj.src = 'img/harvardextension.jpg';

/*
 * Here's the handler that loads when the image has finished downloading.
 *
 * This needs to be asynchronous (triggered by the image load event) since we don't know how
 *  long the image will take to load.
 */

image_obj.onload = function(){

    // draw the image in the first canvas window - this is the original you can see
    contexts['orig'].drawImage(this, 0, 0);

    // now grab the ImageData object from the graphics context. This contains a 'bitmap' of every pixel in the image
    var imageData = contexts['orig'].getImageData(0, 0, canvases['orig'].width, canvases['orig'].height);

    //grab the image bitmap data array so we can iterate over it
    var pixels = imageData.data;

    /* Here's where we call the functions that do the magic - your magic.
     * In the file hw2ArrayImageProcessing.js you will write the functions that
     * handle the image transformations.
     *
     *
     */

    makeBlue(pixels, newImageData['blue'].data); // a call to your function makeBlue()
    makeReverse(pixels,newImageData['reverse'].data); // a call to your function, makeReverse()
    makeTransparent(pixels, newImageData['trans'].data); // a call to your function, makeTransparent()

    // now draw the new image data on the canvases
    for (var key in contexts){
               if(contexts.hasOwnProperty(key) && key!='orig' && key!='composite_newimage') { // should not be necessary, but just in case
                            contexts[key].clearRect(0, 0, canvases[key].width, canvases[key].height);
                            contexts[key].putImageData(newImageData[key], 0, 0);
               }
    }

    // for the composite version, we have to load the image you'll be adding to our original
    var image_obj2 = new Image();
    image_obj2.src='img/textimage.png';
    // then we have to have an asynchronous call so that we finish the processing only after this image has loaded
    image_obj2.onload = function(){
               //draw the new image on the canvas
               contexts['composite_newimage'].drawImage(this, 0, 0);

               // get its imageData from the context
               var imageData2 = contexts['composite_newimage'].getImageData(0, 0, canvases['composite_newimage'].width, canvases['composite_newimage'].height);

               //call your function to composite the images
               loadComposite(pixels, imageData2.data, newImageData['composite'].data);

               //now draw the composited image in the canvas provided
               contexts['composite'].clearRect(0, 0, canvases['composite'].width, canvases['composite'].height);
               contexts['composite'].putImageData(newImageData['composite'], 0, 0);
    } //end image_obj2.onload function

}; //end image_obj.onload function
