function transform() {
    var textDivs  = document.getElementsByClassName('textDiv');
    //console.log(textDivs);
    var outputDiv = document.getElementById('outputDiv');
    var divLen    = textDivs.length;

    for (var i = 0; i < divLen; i++) {
        var initText = textDivs[i].innerHTML;
        //console.log(text);
        var text = initText.split(' ');
        //console.log(text);

        var div = document.createElement('div');
        div.setAttribute('class', 'textDiv');

        var textLen = text.length;
        for (var j = 0; j < textLen; j++) {
            var word = text[j];
            //console.log(word);

            var wordSpan = document.createElement('span');
            var spaceSpan = document.createElement('span');
            var wordNode = document.createTextNode(word);
            var spaceNode = document.createTextNode(' ');

            if (word == 'ISS') {
                wordSpan.addEventListener('click', function(evt){this.setAttribute('class', 'red')});
            } else {
                wordSpan.addEventListener('click', function(){this.setAttribute('class', 'blue')});
            }

            wordSpan.appendChild(wordNode);
            spaceSpan.appendChild(spaceNode);

            div.appendChild(wordSpan);
            div.appendChild(spaceSpan);
        }

        outputDiv.appendChild(div);
    }

    this.setAttribute('class', 'hidden');
    alert('Text Transformation complete');
}

window.onload = function() {
    var transformBtn = document.getElementById('transformBtn');
    transformBtn.addEventListener('click', transform, false);
}