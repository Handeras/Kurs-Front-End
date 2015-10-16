/**
 * Created by pc on 2015-10-16.
 */

$(function(){
    var paragraphs = $("p");
    var links = $("a");
    var lists = $("li");

    paragraphs.hide();
    links.on("click", function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
        links.each(function(index){
           if(links.eq(index).hasClass("active")){
               lists.eq(index).css("background", "green");
               paragraphs.eq(index).show();
           } else {
               lists.eq(index).css("background", "red");
               paragraphs.eq(index).hide();
           }
        });
    });

});