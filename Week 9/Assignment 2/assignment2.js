window.onload=function(){

    var happy = document.getElementById("happyBtn");
    var gloomy = document.getElementById("gloomyBtn");
    var highest_dom_el = document.getElementById("container");

    highest_dom_el.addEventListener("click",function(evt){
       if (evt.target.id == "happyBtn"){
           var el = evt.target.id;
           logMessage(happy.innerHTML);
       }
        else {
           logMessage(gloomy.innerHTML);
       }
    });
};


// Utility function for logging convenience
// Logs msg to the element with given id
// If id is undefined, logs to #output
function logMessage(msg, id){
    if (!id){
        id="output";
    }
    document.getElementById(id).innerHTML += msg + "<br>";
}