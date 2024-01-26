/*
for(var i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").style.color = "Yellow"
    })
}
*/

// jQuery() or $()

$(document).ready(function(){
    $("h1").css("color","yellow");
});
