$(document).ready(function(){
    window.location.hash = "#page1";
    $('#page1').css("display", "block");
    
    //if url change
    window.addEventListener("hashchange", function(e){
        try{
            var newUrl = e.newURL.split("#")[1];
            newUrl != '' ? newUrl : (function(){throw "empty anchor"}());
            
            to_hide_divs = $(".page").css("display", "none");
            to_show_div = $("body").find("#" + newUrl);

            $(to_hide_divs).css("display", "none");
            $(to_show_div).css("display", "block");
        }
        catch(err){
            console.warn(err);
        }
        
    });
});