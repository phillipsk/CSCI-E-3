// Planet Object Definition and Constructor Function
function Planet(name,
                aphelion, perihelion,
                orbital_period_d, orbital_period_y,
                surface_area, surface_area_exp,
                volume, volume_exp,
                mass, mass_exp,
                temp,
                imgSymbolURL, imgURL,
                info) {
    // var to determined displayed state
    var displayed = false;

    // Object Properties
    this.name              = name;
    this.aphelion          = aphelion;
    this.perihelion        = perihelion;
    this.orbital_period_d  = orbital_period_d;
    this.orbital_period_y  = orbital_period_y;
    this.surface_area      = surface_area;
    this.surface_area_exp  = surface_area_exp;
    this.volume            = volume;
    this.volume_exp        = volume_exp;
    this.mass              = mass;
    this.mass_exp          = mass_exp;
    this.surface_temp_mean = temp;
    this.imgSymbolURL      = imgSymbolURL;
    this.imgURL            = imgURL;
    this.info              = info;

    // Functions - Getters
    this.getName = function() {
        return this.name;
    },
        this.getAphelionPerihelion = function() {
            return "Aphelion: " + this.aphelion + " AU / Perihelion: " + this.perihelion + " AU";
        },
        this.getOrbitalPeriod = function() {
            return this.orbital_period_d + " d / " + this.orbital_period_y + " y ";
        },
        this.getSurfaceArea = function() {
            return this.surface_area + " x 10 ^" + this.surface_area_exp + " km";
        },
        this.getVolume = function() {
            return this.volume + " x 10 ^" + this.volume_exp + " km";
        },
        this.getMass = function() {
            return this.mass + "^" + this.mass_exp + " kg";
        },
        this.getTemp = function() {
            return this.surface_temp_mean + " k mean";
        },
        this.getSymbolImgURL = function() {
            return this.imgSymbolURL;
        },
        this.getImgURL = function() {
            return this.imgURL;
        },
        this.getInfo = function() {
            return this.info;
        }

    this.setDisplayed = function(disp) {
        displayed = disp;
    }
    this.getDisplayed = function() {
        return displayed;
    }
}

// Prototype Function shared across ALL Planet Objects
Planet.prototype.printMe = function(canvas) {
    // create new HTML Elements
    var contanierDiv  = document.createElement('div');
    var imagesDiv     = document.createElement('div');
    var h2        = document.createElement('h2');
    var symbolImg = document.createElement('img');
    var planetTxt = document.createTextNode(this.name);
    var planetImg = document.createElement('img');

    symbolImg.setAttribute('src', this.imgSymbolURL);
    symbolImg.setAttribute('class', 'planetSymbol');
    planetImg.setAttribute('src', this.imgURL);
    planetImg.setAttribute('class', 'planetImg');

    h2.appendChild(symbolImg);
    h2.appendChild(planetTxt);
    imagesDiv.setAttribute('class', 'imagesDiv');
    imagesDiv.appendChild(h2);
    imagesDiv.appendChild(planetImg);
    contanierDiv.appendChild(imagesDiv);

    var aphelionPerihelionDiv = document.createElement('div');
    var aphelionPerihelionTxt = document.createTextNode(this.getAphelionPerihelion());
    aphelionPerihelionDiv.appendChild(aphelionPerihelionTxt);
    contanierDiv.appendChild(aphelionPerihelionDiv);

    var orbitalPeriodDiv    = document.createElement('div');
    var orbitalPeriodDivTxt = document.createTextNode("Orbital Period: " + this.getOrbitalPeriod());
    orbitalPeriodDiv.appendChild(orbitalPeriodDivTxt);
    contanierDiv.appendChild(orbitalPeriodDiv);

    var surfaceAreaDiv    = document.createElement('div');
    var surfaceAreaDivTxt = document.createTextNode("Surface Area: " + this.getSurfaceArea());
    surfaceAreaDiv.appendChild(surfaceAreaDivTxt);
    contanierDiv.appendChild(surfaceAreaDiv);

    var volumeDiv    = document.createElement('div');
    var volumeDivTxt = document.createTextNode("Volume: " + this.getVolume());
    volumeDiv.appendChild(volumeDivTxt);
    contanierDiv.appendChild(volumeDiv);

    var massDiv    = document.createElement('div');
    var massDivTxt = document.createTextNode("Mass: " + this.getMass());
    massDiv.appendChild(massDivTxt);
    contanierDiv.appendChild(massDiv);

    var tempDiv    = document.createElement('div');
    var tempDivTxt = document.createTextNode("Temp: " + this.getTemp());
    tempDiv.appendChild(tempDivTxt);
    contanierDiv.appendChild(tempDiv);

    var infoDiv    = document.createElement('div');
    var infoDivTxt = document.createTextNode(this.getInfo());
    infoDiv.setAttribute('class', 'descDiv');
    infoDiv.appendChild(infoDivTxt);
    contanierDiv.appendChild(infoDiv);

    // append to canvas
    canvas.appendChild(contanierDiv);
}

// PlanetFactory Object Definition and Constructor Function to hold Planet Objects
function PlanetFactory() {
    this.planets = [];
}

// method for the factory class that will create a new Planet Object and push it to the planets Array
PlanetFactory.prototype.addPlanet = function(name,
                                             aphelion, perihelion,
                                             orbital_period_d, orbital_period_y,
                                             surface_area, surface_area_exp,
                                             volume, volume_exp,
                                             mass, mass_exp,
                                             temp,
                                             imgSymbolURL, imgURL,
                                             info) {
    // create new Planet Oject
    this.planets.push(new Planet(name,
        aphelion, perihelion,
        orbital_period_d, orbital_period_y,
        surface_area, surface_area_exp,
        volume, volume_exp,
        mass, mass_exp,
        temp,
        imgSymbolURL, imgURL,
        info)
    );
}