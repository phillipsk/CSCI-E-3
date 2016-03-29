function traverse(el, str) {
    // Your code can go here - acting on the way down
    //   the tree towards the branches


    for (var i = 0; i < el.childNodes.length; i++) {
        traverse(el.childNodes[i], str);
    }
    // Or your code can go here - acting on the way back up
    //  the tree towards the root


}
var eList = [];
traverse(document.documentElement, 'text');
console.log()

