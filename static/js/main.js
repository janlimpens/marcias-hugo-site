$( document ).ready(function() {

$("figcaption").each(function(i, elm){
    elm = $(elm); 
    var txt = elm.html(); 
    elm.empty(); 
    elm.html(txt.replace(/, /g, ",<br/>"));
});

});