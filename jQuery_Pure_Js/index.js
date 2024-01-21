for(var i=0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        document.querySelector("h1").innerHTML = this.innerHTML + " ADDED STRING HERE!!!!"
    })
}