/* config.js */

"use strict";

var mySquare = {

    el      : document.getElementById("littlesquare"),

    "config" : {
        backgroundColor   : "#987654",
        top     : "100px",
        left    : "100px",
        width   : "100px",
        height  : "100px"
    },

	draw   : function(c){

		// Here we update the internal this.config object's properties with
		//  whatever appears in the object passed as the parameter 'c'
		for (var style in c){
            this.config[style] = c[style];
        }

		// Here we apply each style that appears in this.config to the element's
		//  style object: this.el.style
		for (var style in this.config){
				this.el.style[style] = this.config[style];
		}
    },

	// This method will update a single property on the element, but doesn't
	//  modify the config object itself
	update: function (prop, val) {
        this.el.style[prop] = val;
    },

}

var configObject = {backgroundColor:"#234567", top: "30px", left: "40px", width:"400px", height: "100px", border: "4px solid black" }
mySquare.draw(configObject);

// if we call with no argument, we get the default config
mySquare.draw();

mySquare.update("backgroundColor", "blue");
