// Code for working
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.more-text',  {
    strings: [ 'Frontend Developer', 'Web Developer',  ' Responsive Web Designer'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

// Code for linkdin
document.addEventListener("DOMContentLoaded",function(){
     const anchor = document.getElementById("linkedin");
     anchor.onclick = function(){
        window.open("https://www.linkedin.com/in/lovely-bharti-89323a30a/","error");

     };
});

// Code for github
document.addEventListener("DOMContentLoaded",function(){
    const anchor = document.getElementById("github");
    anchor.onclick = function(){
       window.open("https://github.com/LovelyBharti","error");

    };
});

// Code for insta
document.addEventListener("DOMContentLoaded",function(){
    const anchor = document.getElementById("insta");
    anchor.onclick = function(){
       window.open("https://www.instagram.com/","error");

    };
});

// Code for snap
document.addEventListener("DOMContentLoaded",function(){
    const anchor = document.getElementById("snap");
    anchor.onclick = function(){
       window.open("https://www.snapchat.com/","error");

    };
});


// Code for Downloading of resume
document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    var anchor = document.getElementById("btn");

    // Add an onclick event listener to the button
    anchor.onclick = function() {
        // Open the resume in a new window/tab
        window.open("resume22.pdf", "_blank");
    };
});

// Code for Mywork section
//Paasword Generator
document.addEventListener("DOMContentLoaded",function(){
    const anchor = document.getElementById("Paasword");
    anchor.onclick = function(){
       window.open("https://github.com/LovelyBharti/Projects/tree/main/paasword%20generator","error");

    };
});

//todo application
document.addEventListener("DOMContentLoaded",function(){
    const anchor = document.getElementById("Todo");
    anchor.onclick = function(){
       window.open("https://github.com/LovelyBharti/Projects/tree/main/todo%20app","error");

    };
});

//weather application
document.addEventListener("DOMContentLoaded",function(){
    const anchor = document.getElementById("Weather");
    anchor.onclick = function(){
       window.open("https://github.com/LovelyBharti/Projects/tree/main/weather%20app","error");

    };
});

//Rock Paper Scissors Game
document.addEventListener("DOMContentLoaded",function(){
    const anchor = document.getElementById("game");
    anchor.onclick = function(){
       window.open("https://github.com/LovelyBharti/Projects/tree/main/rockgame","error");

    };
});