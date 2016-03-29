// Create new Planet Objects using the PlanetFactory in planet_prototypes.js
function loadPlanets(planets, factory) {
    var len = planets.length;
    for (var i = 0; i < len; i++) {
        // get planet Object Literal (vars in planets.js) from window Object for current planet name
        var planet = window[planets[i]];

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
}

//function to persist Planets to LocalStorage
function persistPlanets(factory) {
    window.localStorage.removeItem("planets");

    // Array to hold displayed Planets to persist to Local Storage
    var planetsToPersist = [];
    var planets = factory.planets;
    var len = planets.length;
    for (var i = 0; i < len; i++) {
        var planet = planets[i];
        if (planet.getDisplayed() == true) {
            planetsToPersist.push(planet);
        }
    }

    // persist Array holding Planet Objects to LocalStorage
    window.localStorage.setItem("planets", JSON.stringify(planetsToPersist));
}

// function to check for persisted Planets and display
function processPersistedPlanets() {
    var planets = JSON.parse(window.localStorage.getItem("planets"));

    if (planets != null) {
        var len = planets.length;
        for (var i = 0; i < len; i++) {
            var planet = planets[i];

            //console.log(planet.constructor.name);
            //console.log(planet);

            // create new Planet Object
            var newPlanet = new Planet(planet.name,
                planet.aphelion, planet.perihelion,
                planet.orbital_period_d, planet.orbital_period_y,
                planet.surface_area, planet.surface_area_exp,
                planet.volume, planet.volume_exp,
                planet.mass, planet.mass_exp,
                planet.surface_temp_mean,
                planet.imgSymbolURL, planet.imgURL,
                planet.info);

            //console.log(newPlanet.constructor.name);
            //console.log(newPlanet);

            // select plant from select list to display on page.
            selectPlanet(planet.name);
        }
    }
}

// function to display Planet on page using eisting functionality
function selectPlanet(planetName) {
    var planetSelect = document.getElementById('planetSelect');
    var len = planetSelect.length;
    for (var i = 0; i < len; i++) {
        if (planetSelect.options[i].text === planetName) {
            planetSelect.selectedIndex = i;
            break;
        }
    }
    // fire the Select Element's onchange event
    planetSelect.onchange();
}

// create HTML Select Element and populate it with planet names
function buildPage(planets, factory) {
    var form     = document.getElementById('form');
    var canvas   = document.getElementById('canvas');

    var select   = document.createElement('select');
    select.setAttribute("id", "planetSelect");
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
        var val = this.value;
        if (val >= 0) {
            // get the planet from the factory
            var thePlanet = factory.planets[val];
            thePlanet.printMe(canvas);

            // set Planet's displayed var to true
            thePlanet.setDisplayed(true);

            // remove the Planet from the Select list
            // so it only displays once
            this.remove(this.selectedIndex);

            // display the Persist button
            document.getElementById('persistDiv').className = "display";
        }
    }

    // append new HTML Element to form
    form.appendChild(select);

    document.getElementById('persistBtn').onclick = function() {
        persistPlanets(factory);
    }
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

    // check for persisted Planets
    processPersistedPlanets();
}
