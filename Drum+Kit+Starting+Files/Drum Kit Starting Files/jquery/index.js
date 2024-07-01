$(document).ready(function() {
    $("h1").css("background", "pink");

  
    $("h1").addClass("ayush");
    // .hasClass
    //.removeClass


    //changing of the text
    $("h1").text("good bye");

// same as innerhtml method in js 
    $("h1").html("")


    // get the attribute
   console.log( $("img").attr("src"));
   //set the attribute 
   $("img").attr("src","ayush.png");


   // event sliceer with j query



});