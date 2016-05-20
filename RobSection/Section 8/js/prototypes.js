window.onload = function() {
    var inputForm       = document.getElementById('inputForm');
    var reset           = document.getElementById('reset');
    var submit          = document.getElementById('submit');
    var populateMercury = document.getElementById('populateMercury');
    var populateVenus   = document.getElementById('populateVenus');
    var populateEarth   = document.getElementById('populateEarth');
    var showPlanets     = document.getElementById('showPlanets');
    var canvas          = document.getElementById('canvas');

    var planetName       = document.getElementById('planetName');
    var aphelion         = document.getElementById('aphelion');
    var perihelion       = document.getElementById('perihelion');
    var orbital_period_d = document.getElementById('orbital_period_d');
    var orbital_period_y = document.getElementById('orbital_period_y');
    var surface_area     = document.getElementById('surface_area');
    var surface_area_exp = document.getElementById('surface_area_exp');
    var volume           = document.getElementById('volume');
    var volume_exp       = document.getElementById('volume_exp');
    var mass             = document.getElementById('mass');
    var mass_exp         = document.getElementById('mass_exp');
    var temp             = document.getElementById('temp');
    var info             = document.getElementById('info');
    var imgSymbolURL     = document.getElementById('imgSymbolURL');
    var imgURL           = document.getElementById('imgURL');

    // var to hold the PlanetFactory
    var factory  = new PlanetFactory();

    // reset button click
    reset.onclick = function() {
        document.getElementById('planetName').focus();
    }

    // show planets button click
    showPlanets.onclick = function() {
        var len = factory.planets.length;
        if (len > 0) {
            canvas.innerHTML = '';
            for (var i = 0; i < len; i++) {
                // get the current planet from the factory
                var planet = factory.planets[i];
                console.log('Displaying Planet ' + planet.getName() + '.');
                planet.printMe(canvas);
            }
        }
        this.className = 'hidden';
    }

    // submit button click - submits form
    inputForm.onsubmit = function(submitEvent) {
        submitEvent.preventDefault();

        // Create a new Planet Object using the PlanetFactory
        factory.addPlanet(planetName.value,
            aphelion.value, perihelion.value,
            orbital_period_d.value, orbital_period_y.value,
            surface_area.value, surface_area_exp.value,
            volume.value, volume_exp.value,
            mass.value, mass_exp.value,
            temp.value,
            imgSymbolURL.value, imgURL.value,
            info.value);

        // show contents of factory
        console.log(factory);

        // display Show Planets button
        showPlanets.className = "visible";

        // reset the form
        reset.click();
    }

    // function to set input field values
    function setInputFieldValues(planetName_val,
                                 aphelion_val, perihelion_val,
                                 orbital_period_d_val, orbital_period_y_val,
                                 surface_area_val, surface_area_exp_val,
                                 volume_val, volume_exp_val,
                                 mass_val, mass_exp_val,
                                 temp_val,
                                 imgSymbolURL_val, imgURL_val,
                                 info_val) {
        planetName.value       = planetName_val;
        aphelion.value         = aphelion_val;
        perihelion.value       = perihelion_val;
        orbital_period_d.value = orbital_period_d_val;
        orbital_period_y.value = orbital_period_y_val;
        surface_area.value     = surface_area_val;
        surface_area_exp.value = surface_area_exp_val;
        volume.value           = volume_val;
        volume_exp.value       = volume_exp_val;
        mass.value             = mass_val;
        mass_exp.value         = mass_exp_val;
        temp.value             = temp_val;
        imgSymbolURL.value     = imgSymbolURL_val;
        imgURL.value           = imgURL_val;
        info.value             = info_val;
    }

    // populate buttons click - for testing
    populateMercury.onclick = function() {
        setInputFieldValues("Mercury", "0.466 697", "0.307 499", "87.969 1", "0.240 846", "7.48", "7", "6.083", "10", "3.3011", "23", "340",
            "http://upload.wikimedia.org/wikipedia/commons/2/2e/Mercury_symbol.svg",
            "http:////upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/260px-Mercury_in_color_-_Prockter07-edit1.jpg",
            "Mercury is the smallest planet in the Solar System and the one closest to the Sun, with an orbital period of about 88 Earth days, which is much faster than any other planet in the Solar System. Seen from Earth, it appears to move around its orbit in about 116 days. It has no known natural satellites. It is named after the Roman deity Mercury, the messenger to the gods."
        );
        this.disabled = 'disabled';
    }
    populateVenus.onclick = function() {
        setInputFieldValues("Venus", "0.728213", "0.718440", "224.701", "0.615198", "4.6023", "8", "9.2843", "11", "4.8675", "24", "737",
            "http://upload.wikimedia.org/wikipedia/commons/6/66/Venus_symbol.svg",
            "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/260px-Venus-real_color.jpg",
            "Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. It has the longest rotation period (245 days) of any planet in the Solar System, and, unusually, rotates in the opposite direction to most other planets. It has no natural satellite. It is named after the Roman goddess of love and beauty. After the Moon, it is the brightest natural object in the night sky, reaching an apparent magnitude of -4.6, bright enough to cast shadows. Because Venus is an inferior planet from Earth, it never appears to venture far from the Sun: its elongation reaches a maximum of 47.8 degrees."
        );
        this.disabled = 'disabled';
    }
    populateEarth.onclick = function() {
        setInputFieldValues("Earth", "1.016 73", "0.983 2687", "365.256363004", "1.000 017 420 96", "510,072,000", "2", "1.083 21", "12", "5.97 23", "24", "288",
            "http://upload.wikimedia.org/wikipedia/commons/e/e7/Earth_symbol.svg",
            "http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/450px-The_Earth_seen_from_Apollo_17.jpg",
            "Earth is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life."
        );
        this.disabled = 'disabled';
    }

    // show contents of factory on page load => empty
    console.log(factory);
}