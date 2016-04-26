window.onload = function () {
jQuery.noConflict();   //uncomment this to test your solution
// HERE IS THE PLUGIN
(function ($) {
    $.fn.showSize = function () {
        console.log(this);
        return this.each(function (i, el) {
            var span = document.createElement('span');
            var jqSpan = $(span);
            jqSpan.addClass("super");
            jqSpan.html("size: " + el.clientWidth + "x" + el.clientHeight);
            el.appendChild(jqSpan[0]);
        });
    }
})(jQuery);
// using my plugin - you'll comment this line to test your code
//     $('p').showSize(); /*comment out per instructions*/
// uncomment the following line to test your solution
jQuery('p').showSize().css("color", "blue");
/*uncomment per instructions*/

};