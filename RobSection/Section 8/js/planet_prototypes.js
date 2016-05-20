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
            return "aphelion: " + this.aphelion + " AU / perihelion: " + this.perihelion + " AU";
        },
        this.getOrbitalPeriod = function() {
            return this.orbital_period_d + " d / " + this.orbital_period_y + " y ";
        },
        this.getSurfaceArea = function() {
            return this.surface_area + " x 10 <sup>" + this.surface_area_exp + "</sup> km";
        },
        this.getVolume = function() {
            return this.volume + " x 10 <sup>" + this.volume_exp + "</sup> km";
        },
        this.getMass = function() {
            return this.mass + "<sup>" + this.mass_exp + "</sup> kg";
        },
        this.getTemp = function() {
            return this.surface_temp_mean + "<sup>k</sup> mean";
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
}

// Prototype Function shared across ALL Planet Objects
Planet.prototype.printMe = function(canvas) {
    var str = "";
    str += "<h2><img src='"           + this.imgSymbolURL + "' class='planetSymbol' />" + this.name + "</h2>";
    str += "<img src='"               + this.imgURL       + "' class='planetImg'    />";
    str += "<br /><br />"             + this.getAphelionPerihelion();
    str += "<br />Orbital Period: "   + this.getOrbitalPeriod();
    str += "<br />Surface Area: "     + this.getSurfaceArea();
    str += "<br />Volume: "           + this.getVolume();
    str += "<br />Mass: "             + this.getMass();
    str += "<br />Temp: "             + this.getTemp();
    str += "<div class='desc'><br />" + this.getInfo() + "<br /><br /></div>";
    canvas.innerHTML += str;
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