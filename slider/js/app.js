/**
 * Created by pc on 2015-10-16.
 */

$(function(){
    var images = $(".slider li");
    var viibleImage = 0;

    images.eq(viibleImage).show();

    images.click(function(event){
        images.eq(viibleImage).hide(0);
        if(event.offsetX < $(this).width()/2){
            viibleImage--;
        } else {
            viibleImage++;
            console.log("++")
        }
        if(viibleImage >= images.length){
            viibleImage = 0;
        }
        if(viibleImage >= images.length){
            viibleImage = 0;
        }
        if(viibleImage < 0){
            viibleImage = images.length-1;
        }
        images.eq(viibleImage).show(0);
    });

    /*
    $(".right").click(function(){
       images.eq(viibleImage).hide(0);
        viibleImage++;
        if(viibleImage >= images.length){
            viibleImage = 0;
        }
        images.eq(viibleImage).show(0);
    });
    $(".left").click(function(){
        images.eq(viibleImage).hide(0);
        viibleImage--;
        if(viibleImage < 0){
            viibleImage = images.length-1;
        }
        images.eq(viibleImage).show(0);
    });*/
});