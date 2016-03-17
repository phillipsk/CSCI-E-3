/* CSCI E-3 Introduction to Web Programming Using Javascript
 *
 *
 * Homework Unit #2a
 *
 *
 */

 /********************************************************************
  *
  * Image processing by way of arrays:  This assignment is designed to
  * give you a chance to work with arrays. The fact that we're processing images
  * makes the example interesting, but no prior knowledge of image processing
  * or understanding of the setup for this in hw2ArrayImageProcessingSetup.js
  * is required (though you're welcome to study that if you like!).
  *
  * In each of these functions, you'll be reading the parameter 'original',
  * which is an array of pixel data.  Each array contains four numeric elements to
  * describe each pixel in the image (red, green, blue, alpha).  The
  * data looks like this:
  *   original[0];  // pixel 0 red value
  *   original[1];  // pixel 0 green value
  *   original[2];  // pixel 0 blue value
  *   original[3];  // pixel 0 alpha value
  *   original[4];  // pixel 1 red value
  *   original[5];  // pixel 1 green value
  *   original[6];  // pixel 1 blue value
  *   original[7];  // pixel 1 alpha value
  *     etc...
  *
  * Essentially, your job is to read
  * data from the original array, and copy it to the output array, making
  * certain modifications along the way. It might be a good idea to start by
  * iterating over the original array and copying its data unmodified into the
  * output array. Once you have that working, you can try the data changes
  * required to make the output correct.
  *
  ********************************************************************/



/*
 * makeBlue - Reads data from an image bitmap array and writes new image data to another array object
 *            The output data should contain only blue pixel data, with other red and green color values set to 0.
 *
 *            @original {array} - the source bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @output {array} - the bitmap data array to which the output image is written.
 *
 **/
function makeBlue(original, output) {
      // YOUR CODE GOES HERE
 for (var i = 0; i < original.length; i+=4) {
  output[i] = 0;               // red
  output[i+1] = 0;             // green
  output[i+2] = original[i+2]; // blue
  output[i+3] = original[i+3]; // alpha
 }
}

/*
 * makeReverse - Reads data from an image bitmap array and writes new image data to another array object
 *               The output data contains pixel data inverted, with every color value its opposite on the scale of 0-255.
 *               To get "inverted" color, the value for each color will be 255-n, where n is the original color.
 *               Don't invert the alpha value - that's opacity, and if you invert it, your picture will be trasparent (invisible!)
 *
 *            @original {array} - the source bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @output {array} - the bitmap data array to which the output image is written.
 *
 **/
function makeReverse(original, output){
      // YOUR CODE GOES HERE
 for (var i = 0; i < original.length; i+=4) {
/*  if (i < 12) {
   console.log(" ");
   console.log("r: " + original[i]);     // red
   console.log("g: " + original[i + 1]); // green
   console.log("b: " + original[i + 2]); // blue
   console.log("a: " + original[i + 3]); // alpha
  }*/
  output[i] = 255 -original[i];      // red
  output[i+1] = 255 - original[i+1]; // green
  output[i+2] = 255 - original[i+2]; // blue
  output[i+3] = original[i+3];       // alpha
/*  if (i < 12) {
   console.log(" ");
   console.log("r: " + output[i]);     // red
   console.log("g: " + output[i + 1]); // green
   console.log("b: " + output[i + 2]); // blue
   console.log("a: " + output[i + 3]); // alpha
  }*/
 }
}

/*
 * makeTransparent - Reads data from an image bitmap array and writes new image data to another array object
 *                   The output data contains pixel data with the transparency (alpha) set to a value representing 50%
 *                   of its original value.
 *
 *            @original {array} - the source bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *             @output {array} - the bitmap data array to which the output image is written.
 *
 **/

function makeTransparent(original,output){
      // YOUR CODE GOES HERE
 for (var i = 0; i < original.length; i+=4) {
  output[i] = original[i];         // red
  output[i+1] = original[i+1];     // green
  output[i+2] = original[i+2];     // blue
  output[i+3] = original[i+3] / 2; // alpha
 }
}

/*
 * loadComposite - Reads data from two image bitmap arrays (one a photo, and one a text overlay)
 *                  and writes new image data to another array object
 *                 The output data contains pixel data from the two images summed.
 *                             (note that this works with simple summing because the background of this
 *                             particular second image is transparent)
 *
 *            @original {array} - the source image bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @secondOne {array} - the source text overlay bitmap data, an array of integers from 0-255
 *                         each pixel is represented by four consecutive array elements (r, g, b, a)
 *                         (red, green, blue, alpha), so the array has 4x elements as the image has pixels
 *            @output {array} - the bitmap data array to which the output image is written.
 *
 **/
function loadComposite(original, secondOne, output){
       // YOUR CODE GOES HERE
 for (var i = 0; i < original.length; i+=4) {
  output[i] = original[i] + secondOne[i];       // red
  output[i+1] = original[i+1] + secondOne[i+1]; // green
  output[i+2] = original[i+2] + secondOne[i+2]; // blue
  output[i+3] = original[i+3] + secondOne[i+3]; // alpha
 }
}
