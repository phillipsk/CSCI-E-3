/*
 * This function displays a specific Dot's data.
 *
 * @param evt   - the Event that triggered the funct call
 */
function displayDotData(evt) {
    console.log('evt:');
    console.log(evt);

    var dot    = evt.target;
    console.log('evt.target:');
    console.log(dot);

    var parent = dot.parentElement;
    console.log('evt.target.parentElement');
    console.log(parent);

    dot.style.color = dot.style.backgroundColor;
    dot.style.backgroundColor = '#ffffff';
    dot.innerHTML = 'POOF!';

    setTimeout(function() {
        //parent.removeChild(dot);
        dot.innerHTML = '';
    }, 500);
}

/*
 * This fuction displays the dots on the page.
 *
 * @param   pointsArray - Array containing the [top,left] dot positions
 * @param   colorsArray - Array of Colors
 * @param   maxDots     - max number of Array elements
 */
function displayDots(pointsArray, colorsArray, maxDots) {
    var container = document.getElementById('container');
    container.innerHTML = "";

    for (var i = 0; i < maxDots; i++) {
        // get current element from the Array
        var element = pointsArray[i];
        var top     = element[0];     // first element
        var left    = element[1];     // second element

        // get color
        var color = colorsArray[i];

        // create new div element
        var dot = document.createElement('div');

        // set attributes for new div element
        dot.setAttribute('id', 'dot_' + i);
        dot.setAttribute('class', 'dot');

        // set styles for new div
        dot.style.top  = top + "px";
        dot.style.left = left + "px";
        dot.style.backgroundColor = color;

        // add click EventListener to new div
        dot.addEventListener("click", displayDotData, false);

        // add new div element to the container element
        container.appendChild(dot);
    }
}

/*
 * This fuction populates the pointsArray top/left positions
 * for the number of dots passed in the maxDots param.
 *
 * @param   maxDots     - max number of Array elements
 * @return  dotsArray   - Array containing maxDots number of [top, left] positions in Array
 */
function getDots(maxDots) {
    var dotsArray = [];
    var TOP_MAX   = 250;
    var LEFT_MAX  = 1000;

    for (var i = 0; i < maxDots; i++) {
        var top  = Math.floor((Math.random() * TOP_MAX));
        var left = Math.floor((Math.random() * LEFT_MAX));

        dotsArray.push([top, left]);
    }

    return dotsArray;
}


/*
 * This fuction generates random colors
 *
 * @param   maxDots     - max number of Array elements
 * @return  colorsArray - Array containing colors
 */
function getColors(maxDots) {
    var colorsArray = [];
    var MAX = 255;

    for (var i = 0; i < maxDots; i++) {
        var r = Math.floor((Math.random() * MAX));
        var g = Math.floor((Math.random() * MAX));
        var b = Math.floor((Math.random() * MAX));

        var color = 'rgb(' + r + ',' + g + ',' + b + ')';

        colorsArray.push(color);
    }

    return colorsArray;
}

/*
 * This function generates a random number up between 1 and the max param limit
 * and returns it to the calling function.
 *
 * @param   max - max value of random numbers
 * @return  the random generated number
 */
function getMaxDots(max) {
    return Math.floor(Math.random() * max + 1);
}


/*
 * This is the main processing fuction.
 *
 * @param   maxDots - Random number indicating how many dots to display on page
 */
function process(maxDots) {
    var pointsArray = [];
    var colorsArray = [];

    // call function to populate the pointsArray with position of dots to be displayed
    pointsArray = getDots(maxDots);

    // call function to populate the colorsArray with random r/g/b values
    colorsArray = getColors(maxDots);

    // call function to display dots in the pointsArray on the page
    displayDots(pointsArray, colorsArray, maxDots);
}


/*
 * Call process() function to start processing,
 * passing a random number to indicate how many dots to display on the page.
 */
window.onload = function() {
    var MAX = 100;
    process(getMaxDots(MAX)); // calls getMaxDots() function, and passes the value retuned to the process() function
}