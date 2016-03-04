/* CSCI E-3 Introduction to Web Programming Using Javascript
 * Spring 2014
 *
 * Homework Unit #2
 *
 *
 */

 /********************************************************************
  *
  * First problem: temperature conversion
  *
  * If the values entered by the user aren't numbers (or convertible to numbers),
  * return nothing (or, more specifically, leave the output field blank)
  *
  ********************************************************************/

 var convertCtoF = document.getElementById("degC");
 convertCtoF.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
                var degreesC = document.getElementById("degC").value; // this is the value from the form field

                // your calculations go here. You'll start with the variable degreesC, convert it to Fahrenheit
        function convertCtoF_Function(tempC){
            var x = parseInt(tempC) * (9.0/5) + 32;
            return x;
        }

                //  and place the result in the variable 'degreesF'
                var degreesF = convertCtoF_Function(degreesC); // you will set this to the results of your conversion

                // now we write the result to the page
                document.getElementById("degFOut").innerHTML = degreesF;
 }

 var convertFtoC = document.getElementById("degF");
 convertFtoC.onchange = function(){  //onchange means that every time the value in the input box changes, this function will run
                var degreesF = document.getElementById("degF").value; // this is the value from the form field

                // your calculations go here. You'll start with the variable degreesF, convert it to Celsius
     function convertFtoC_Function(tempF){
         var x = (parseInt(tempF) - 32) * (5.0/9);
         return x;
     }
                //  and place the result in the variable 'degreesC'
                var degreesC = convertFtoC_Function(degreesF); // you will set this to the results of your conversion
     /*
     *
     *
     *
     *
     *
     * Add Math rounding method to the above function
     *
     *
     *
     *
     *
     *
     * */


                // now we write the result to the page
                document.getElementById("degCOut").innerHTML = degreesC;
 }
