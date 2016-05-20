function printObject(canvas, planet) {
    if (planet.printMe) {
        canvas.innerHTML += planet.printMe();
    }
}

function populatePlanets() {
    var planets = [];

    var mercury = new Planet("Mercury", "0.466 697", "0.307 499", "87.969 1", "0.240 846", "7.48", "7", "6.083", "10", "3.3011", "23", "340",
        "http://upload.wikimedia.org/wikipedia/commons/2/2e/Mercury_symbol.svg",
        "http:////upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/260px-Mercury_in_color_-_Prockter07-edit1.jpg",
        "Mercury is the smallest planet in the Solar System and the one closest to the Sun, with an orbital period of about 88 Earth days, which is much faster than any other planet in the Solar System. Seen from Earth, it appears to move around its orbit in about 116 days. It has no known natural satellites. It is named after the Roman deity Mercury, the messenger to the gods."
    );
    var venus   = new Planet("Venus", "0.728213", "0.718440", "224.701", "0.615198", "4.6023", "8", "9.2843", "11", "4.8675", "24", "737",
        "http://upload.wikimedia.org/wikipedia/commons/6/66/Venus_symbol.svg",
        "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/260px-Venus-real_color.jpg",
        "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (245 days) of any planet in the Solar System, and, unusually, rotates in the opposite direction to most other planets. It has no natural satellite. It is named after the Roman goddess of love and beauty. After the Moon, it is the brightest natural object in the night sky, reaching an apparent magnitude of -4.6, bright enough to cast shadows. Because Venus is an inferior planet from Earth, it never appears to venture far from the Sun: its elongation reaches a maximum of 47.8 degrees."
    );
    var earth   = new Planet("Earth", "1.016 73", "0.983 2687", "365.256363004", "1.000 017 420 96", "510,072,000", "2", "1.083 21", "12", "5.97 23", "24", "288",
        "http://upload.wikimedia.org/wikipedia/commons/e/e7/Earth_symbol.svg",
        "http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/450px-The_Earth_seen_from_Apollo_17.jpg",
        "Earth is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life."
    );

    planets.push(mercury);
    planets.push(venus);
    planets.push(earth);

    return planets;
}

window.onload = function() {
    var canvas   = document.getElementById('canvas');
    var planets  = populatePlanets();

    var len = planets.length;
    for (var i = 0; i < len; i++) {
        printObject(canvas, planets[i]);
    }
}