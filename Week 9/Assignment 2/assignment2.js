window.onload=function(){

    var happy = document.getElementById("happyBtn");
    happy.addEventListener("click", function(evt){
        logMessage(evt.currentTarget.innerHTML);
    });
    var gloomy = document.getElementById("gloomyBtn");
    gloomy.addEventListener("click", function(evt){
        logMessage(evt.currentTarget.innerHTML);
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