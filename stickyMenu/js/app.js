/**
 * Created by pc on 2015-10-16.
 */

$(function(){
    var menu = $("#mainMenu");
    var paragraphs = $("p");
    var links = $(".nav a");
    var lastPositionTop = 0;
    var menuHeight = menu.height();

    $(window).scroll(function(event){
        if(menu.hasClass("sticky") === false && $(this).scrollTop() > menu.offset().top){
            lastPositionTop = menu.offset().top;
            menu.addClass("sticky");
            menu.animate({
                height: (menuHeight/2).toString()+"px"
            }, 500);
        }

        if(menu.hasClass("sticky") && $(this).scrollTop() < lastPositionTop){
            menu.removeClass("sticky");
            menu.animate({
                height: menuHeight.toString()+"px"
            }, 500);
        }

        paragraphs.each(function(index){
            if(index + 1 >= paragraphs.length){
                if(paragraphs.eq(index).offset().top < $(window).scrollTop()) {
                    links.eq(index).addClass("active");
                } else {
                    links.eq(index).removeClass("active");
                }
            } else {
                if (paragraphs.eq(index).offset().top < $(window).scrollTop() &&
                    paragraphs.eq(index + 1).offset().top > $(window).scrollTop()) {
                    links.eq(index).addClass("active");
                } else { 
                    links.eq(index).removeClass("active");
                }
            }
        });
    });

});