$(document).ready(function(){
    window.location.hash = "#page1";
    $('#page1').css("display", "block");
    
    //if url change
    window.addEventListener("hashchange", function(e){
        var oldUrl = e.oldURL.split("#")[1] || $('#page1')[0].id;
        var newUrl = e.newURL.split("#")[1];
        to_hide_div = $("body").find("#" + oldUrl);
        to_show_div = $("body").find("#" + newUrl);
        
        $(to_hide_div).css("display", "none");
        $(to_show_div).css("display", "block");
    });
});
