var btn = document.getElementById("theButton");
btn.addEventListener("dblclick",doIt);
function doIt(evt) {
    if (evt.target.style.color != 'red') {
        evt.target.style.color = 'red';
    } else {
        evt.target.style.color = 'blue';
    }
}