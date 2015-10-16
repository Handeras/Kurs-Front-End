/**
 * Created by pc on 2015-10-16.
 */

$(function(){
    var menu = $("#mainMenu");
    var lastPositionTop = 0;

    $(window).scroll(function(event){
        if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
        }
        if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
            menu.removeClass("sticky");
        }
    });

});