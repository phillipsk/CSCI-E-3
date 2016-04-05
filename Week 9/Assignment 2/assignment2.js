window.onload=function(){

    var happy = document.getElementById("happyBtn");
    var gloomy = document.getElementById("gloomyBtn");
    var highest_dom_el = document.getElementById("container");

    highest_dom_el.addEventListener("click",function(evt){
       if (evt.target.id == "happyBtn"){
           var el = evt.target.id;
           alert("Target id == " + evt.target.id + " and currentTarget == "+ evt.currentTarget.id);
           //logMessage(evt.target.id.innerHTML);
           //logMessage(el.innerHTML);
           logMessage(happy.innerHTML);
       }
        else {
           //evt == gloomy;
           //logMessage(gloomy.innerHTML);
       }
    });

/*    happy.addEventListener("click", function(evt){
        logMessage(evt.currentTarget.innerHTML);
    });
    gloomy.addEventListener("click", function(evt){
        logMessage(evt.currentTarget.innerHTML);
    });*/
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