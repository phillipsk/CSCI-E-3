/* config.js */



function showSquare(id, config){

    var el = document.getElementById(id);

        el.style.backgroundColor = config.color;
        el.style.top = config.top+ "px";
        el.style.left = config.left+ "px";
        el.style.width = config.width+ "px";
        el.style.height = config.height+ "px";

}
var config = {color:"#234567", top: 30, left: 40, width:400, height: 100 };

showSquare("littlesquare", config);
