// Planet Object - Object Literal
var planet = {
    "name":               "",
    "aphelion":           "",
    "perihelion":         "",
    "orbital_period_d":   "",
    "orbital_period_y":   "",
    "surface_area":       "",
    "surface_area_exp":   "",
    "volume":             "",
    "volume_exp":         "",
    "mass":               "",
    "mass_exp":           "",
    "surface_temp_mean":  "",
    "imgSymbolURL":       "",
    "imgURL":             "",
    "info":               "",

    // Functions - Getters
    "getName": function() {
        return this.name;
    },
    "getAphelionPerihelion": function() {
        return "aphelion: " + this.aphelion + " AU / perihelion: " + this.perihelion + " AU";
    },
    "getOrbitalPeriod": function() {
        return this.orbital_period_d + " d / " + this.orbital_period_y + " y ";
    },
    "getSurfaceArea": function() {
        return this.surface_area + " x 10 <sup>" + this.surface_area_exp + "</sup> km";
    },
    "getVolume": function() {
        return this.volume + " x 10 <sup>" + this.volume_exp + "</sup> km";
    },
    "getMass": function() {
        return this.mass + "<sup>" + this.mass_exp + "</sup> kg";
    },
    "getTemp": function() {
        return this.surface_temp_mean + "<sup>k</sup> mean";
    },
    "getSymbolImgURL": function() {
        return this.imgSymbolURL;
    },
    "getImgURL": function() {
        return this.imgURL;
    },
    "getInfo": function() {
        return this.info;
    },

    // Functions - Setters
    "setName": function(name) {
        this.name = name;
    },
    "setAphelionPerihelion": function(aphelion, perihelion) {
        this.aphelion   = aphelion;
        this.perihelion = perihelion;
    },
    "setOrbitalPeriod": function(orbital_period_d, orbital_period_y) {
        this.orbital_period_d = orbital_period_d;
        this.orbital_period_y = orbital_period_y;
    },
    "setSurfaceArea": function(surface_area, surface_area_exp) {
        this.surface_area     = surface_area;
        this.surface_area_exp = surface_area_exp;
    },
    "setVolume": function(volume,volume_exp) {
        this.volume     = volume;
        this.volume_exp = volume_exp;
    },
    "setMass": function(mass, mass_exp) {
        this.mass     = mass;
        this.mass_exp = mass_exp;
    },
    "setTemp": function(surface_temp_mean) {
        this.surface_temp_mean = surface_temp_mean;
    },
    "setSymbolImgURL": function(imgSymbolURL) {
        this.imgSymbolURL = imgSymbolURL;
    },
    "setImgURL": function(imgURL) {
        this.imgURL = imgURL;
    },
    "setInfo": function(info) {
        this.info = info;
    },

    // Util Functions
    "printMe": function() {
        var str = "";
        str += "<h1><img src='" + this.imgSymbolURL + "' class='planetSymbol' />" + this.name + "</h1>";
        str += "<img src='"     + this.imgURL       + "' class='planetImg'    />";
        str += "<br /><br />"   + this.getAphelionPerihelion();
        str += "<br />Orbital Period: "   + this.getOrbitalPeriod();
        str += "<br />Surface Area: "     + this.getSurfaceArea();
        str += "<br />Volume: "           + this.getVolume();
        str += "<br />Mass: "             + this.getMass();
        str += "<br />Temp: "             + this.getTemp();
        str += "<div class='desc'><br />" + this.getInfo() + "<br /><br /></div>";
        return str;
    }
};

// This function populates the planet var with values passed in params
function popuatePlanetObject(planet, planetName, aphelion, perihelion, orbital_period_d, orbital_period_y, surface_area, surface_area_exp, volume, volume_exp, mass, mass_exp, temp, info, imgSymbolURL, imgURL) {
    planet.setName(planetName);
    planet.setAphelionPerihelion(aphelion, perihelion);
    planet.setOrbitalPeriod(orbital_period_d, orbital_period_y);
    planet.setSurfaceArea(surface_area, surface_area_exp);
    planet.setVolume(volume,volume_exp);
    planet.setMass(mass, mass_exp);
    planet.setTemp(temp);
    planet.setSymbolImgURL(imgSymbolURL);
    planet.setImgURL(imgURL);
    planet.setInfo(info);
}

// This function checks for a previoulsy persisted planet.
function checkforPersistedPlanet(setInputFieldValuesFunct, submit) {
    var persistedPlanet = JSON.parse(window.localStorage.getItem('planet'));
    if (persistedPlanet != null) {
        setInputFieldValuesFunct(persistedPlanet.name,
            persistedPlanet.aphelion, persistedPlanet.perihelion,
            persistedPlanet.orbital_period_d, persistedPlanet.orbital_period_y,
            persistedPlanet.surface_area, persistedPlanet.surface_area_exp,
            persistedPlanet.volume, persistedPlanet.volume_exp,
            persistedPlanet.mass, persistedPlanet.mass_exp,
            persistedPlanet.temp,
            persistedPlanet.imgSymbolURL, persistedPlanet.imgURL,
            persistedPlanet.info);
        submit.click();
    } // else no persisted planet
}

// This functions displays the planet on the page
function printObject(disp, obj) {
    if (obj.printMe) {
        disp.innerHTML = obj.printMe();
    }
}

// called when window is loaded
window.onload = function() {
    var inputForm = document.getElementById('inputForm');
    var reset     = document.getElementById('reset');
    var submit    = document.getElementById('submit');
    var persist   = document.getElementById('persist');
    var clear     = document.getElementById('clear');
    var populate  = document.getElementById('populate');
    var disp      = document.getElementById('disp');

    var planetName = document.getElementById('planetName');
    var aphelion   = document.getElementById('aphelion');
    var perihelion = document.getElementById('perihelion');
    var orbital_period_d = document.getElementById('orbital_period_d');
    var orbital_period_y = document.getElementById('orbital_period_y');
    var surface_area     = document.getElementById('surface_area');
    var surface_area_exp = document.getElementById('surface_area_exp');
    var volume     = document.getElementById('volume');
    var volume_exp = document.getElementById('volume_exp');
    var mass       = document.getElementById('mass');
    var mass_exp   = document.getElementById('mass_exp');
    var temp = document.getElementById('temp');
    var info = document.getElementById('info');
    var imgSymbolURL = document.getElementById('imgSymbolURL');
    var imgURL      = document.getElementById('imgURL');

    // reset button click
    reset.onclick = function() {
        document.getElementById('planetName').focus();
    };

    // submit button click - submits form
    inputForm.onsubmit = function(submitEvent) {
        submitEvent.preventDefault();

        // call popuatePlanetObject() function with values from input fields
        popuatePlanetObject(planet,
            planetName.value,
            aphelion.value, perihelion.value,
            orbital_period_d.value, orbital_period_y.value,
            surface_area.value, surface_area_exp.value,
            volume.value, volume_exp.value,
            mass.value, mass_exp.value,
            temp.value,
            info.value,
            imgSymbolURL.value, imgURL.value);

        // call printObject() function to display planet on page
        printObject(disp, planet);

        // reset the form
        reset.click();
    };

    // save the planet in local storage
    persist.onclick = function() {
        var planetName = planet.getName();
        if (planetName != "") {
            window.localStorage.setItem("planet", JSON.stringify(planet));
            alert('Planet ' + planetName + ' has been persisted to Local Storage.');
        } else {
            alert('There is no planet to persist.');
        }
    };

    // clear local storate
    clear.onclick = function() {
        localStorage.removeItem('planet');
        alert('Local Storage has been cleared.');
    };

    // populate button click - for testing
    populate.onclick = function() {
        setInputFieldValues("Earth", "1.016 73", "0.983 2687", "365.256363004", "1.000 017 420 96", "510,072,000", "2", "1.083 21", "12", "5.97 23", "24", "288",
            "http://upload.wikimedia.org/wikipedia/commons/e/e7/Earth_symbol.svg",
            "http://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/450px-The_Earth_seen_from_Apollo_17.jpg",
            "Earth is the third planet from the Sun, the densest planet in the Solar System, the largest of the Solar System's four terrestrial planets, and the only astronomical object known to harbor life."
        );
    };

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
        planetName.value = planetName_val;
        aphelion.value   = aphelion_val;
        perihelion.value    = perihelion_val;
        orbital_period_d.value = orbital_period_d_val;
        orbital_period_y.value = orbital_period_y_val;
        surface_area.value     = surface_area_val;
        surface_area_exp.value = surface_area_exp_val;
        volume.value     = volume_val;
        volume_exp.value = volume_exp_val;
        mass.value     = mass_val;
        mass_exp.value = mass_exp_val;
        temp.value     = temp_val;
        imgSymbolURL.value = imgSymbolURL_val;
        imgURL.value       = imgURL_val;
        info.value = info_val;
    }

    // check to see if we have a planet in local storage
    var setInputFieldValuesFunct = setInputFieldValues;
    checkforPersistedPlanet(setInputFieldValuesFunct, submit);
};