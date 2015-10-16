/**
 * Created by pc on 2015-10-16.
 */

$(function(){
    var firstMenuElements = $(".firstLevel li");
    var secondMenuElements = $(".secondLevel li");

    firstMenuElements.click(function(){
        var mySecondLevel = $(this).find(".secondLevel li");
        if(mySecondLevel.is(':visible')){
            secondMenuElements.hide();
        } else {
            secondMenuElements.hide();
            mySecondLevel.show();
        }
    });
});