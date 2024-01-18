var menu = document.querySelector(".menu");
var tour = document.querySelector(".menu2");
var ul = document.querySelector("ul");
ul.classList.add("list");
ul.style.display = "none";

menu.addEventListener("click",() =>{
    if (ul.style.display === "block"){
        ul.style.display = "none";
    }
    else{
        ul.style.display = "block";
    }
});

tour.addEventListener("click", function toggle(){
    if (ul.style.display === "block"){
        ul.style.display = "none";
    }
    else{
        ul.style.display = "block";
    }
});

