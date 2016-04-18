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
window.onload = function () {
    var transformBtn = document.getElementById('divideTranscript');
    transformBtn.addEventListener('click', transform, false);
};

function transform() {
    var textDiv = document.getElementById("transcriptText");
    var initText = textDiv.innerHTML;
    var text = initText.split(' ');

    var textLen = text.length;
    document.getElementById("transcriptText").innerHTML = "";
    for (var i = 0; i < textLen; i++) {
        var word = text[i];

        var wordSpan = document.createElement('span');
        var spaceSpan = document.createElement('span');
        var wordNode = document.createTextNode(word);
        var spaceNode = document.createTextNode(' ');

        wordSpan.addEventListener('mouseover', function () {
            this.setAttribute('class', 'highlight')
        });
        wordSpan.addEventListener('mouseout', function (evt) {
            this.setAttribute('class', 'default')
        });

        wordSpan.appendChild(wordNode);
        spaceSpan.appendChild(spaceNode);
        textDiv.appendChild(wordSpan);
        textDiv.appendChild(spaceSpan);
    }

}