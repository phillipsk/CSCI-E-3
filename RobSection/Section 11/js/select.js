// function to clear Options from a Select Element
function clearSelectList(el) {
    var MAX = el.length;
    for (var i = MAX; i >= 0; i--) {
        el.remove(i);
    }
}

window.onload = function() {
    var celestialSelects  = document.getElementById('celestialSelects');
    var planetSelect      = document.getElementById('planetSelect');
    var moonSelect        = document.getElementById('moonSelect');
    var celestialTextNode = document.createTextNode('No planet selected.');
    var len = planets.length;

    // use a for loop because the index is needed
    for (var i = 0; i < len; i++) {
        var opt     = document.createElement('option');
        var txtNode = document.createTextNode(planets[i]);
        opt.value   = i;
        opt.appendChild(txtNode);
        planetSelect.appendChild(opt);
    }

    // bind event listener
    planetSelect.addEventListener('change', function() {
        var indx = this.value;

        clearSelectList(moonSelect);

        if (indx != '') {
            // user selected a planet
            // so populate appropraite page elements
            celestialTextNode.nodeValue = planetFacts[indx];
            if (moons[indx] == null) { //planet has NO moon(s)
                var opt     = document.createElement('option');
                var txtNode = document.createTextNode('no moons');
                opt.appendChild(txtNode);
                moonSelect.appendChild(opt);
            } else { // planet has moon(s)
                // populate secondSelect with moon names
                var len = moons[indx].length;
                for (var i = 0; i < len; i++) {
                    var opt     = document.createElement('option');
                    var txtNode = document.createTextNode(moons[indx][i]);
                    opt.appendChild(txtNode);
                    moonSelect.appendChild(opt);
                }
            }
        } else {
            // no planet selected, so clear the planet fact
            celestialTextNode.nodeValue = 'No planet selected.';
        }
    });

    celestialSelects.appendChild(celestialTextNode);
}