$(document).ready(function(){
    var typed = new Typed(".typing", {
        strings: ["a Developer", "And...",  "a Programmer"],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true
    });

    $("button.navbar-toggler.custom-toggler").click(function(){
        $(".innermiddleDown").toggleClass("hideImg");
    });

    $("button.navbar-toggler.custom-toggler").click(function(){
        $(".nav-item").toggleClass("boxshadow");
    });
    
    $("button.navbar-toggler.custom-toggler").click(function(){
        $(".middleland").toggleClass("middlelandTop");
    });
 
  
      
});