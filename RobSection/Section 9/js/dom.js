// Create new Planet Objects using the PlanetFactory in planet_prototypes.js
function loadPlanets(planets, factory) {
    var len = planets.length;
    for (var i = 0; i < len; i++) {
        // get planet Object Literal (vars in planets.js) from window Object for current planet name
        var planet = window[planets[i]];

        console.log('Creating ' + planet.name + ' Planet Object.');

        factory.addPlanet(planet.name,
            planet.aphelion, planet.perihelion,
            planet.orbital_period_d, planet.orbital_period_y,
            planet.surface_area, planet.surface_area_exp,
            planet.volume, planet.volume_exp,
            planet.mass, planet.mass_exp,
            planet.surface_temp_mean,
            planet.imgSymbolURL, planet.imgURL,
            planet.info);
    }

    console.log(factory.planets.length + ' Planets Objects created.');
}

// create HTML Select Element and populate it with planet names
function buildPage(planets, factory) {
    var form     = document.getElementById('form');
    var canvas   = document.getElementById('canvas');

    var select   = document.createElement('select');
    var option   = document.createElement('option');
    option.value = '-1';
    option.text  = 'Select a Planet';
    select.add(option);

    var len = planets.length;
    for (var i = 0; i < len; i++) {
        var planet   = planets[i];
        option       = document.createElement('option');
        option.value = i;
        option.text  = planet.charAt(0).toUpperCase() + planet.substr(1); // Cap first letter of Planet name
        select.add(option);
    }

    // bind onchange event to new Select Element
    select.onchange = function() {
        // clear canvas div
        canvas.innerHTML = '';

        var val = this.value;
        if (val >= 0) {
            // get the planet from the factory
            var thePlanet = factory.planets[val];
            console.log('Displaying Planet ' + thePlanet.getName() + '.');
            thePlanet.printMe(canvas);
        }
    }

    // append new HTML Element to form
    form.appendChild(select);
}

window.onload = function() {
    // Array of Planet names
    var planets = ['mercury', 'venus', 'earth', 'mars', 'jupiter', 'saturn', 'uranus', 'neptune'];

    // var to hold the PlanetFactory
    var factory  = new PlanetFactory();

    // create Planet Objects
    loadPlanets(planets, factory);

    // build the HTML Elements
    buildPage(planets, factory);
}