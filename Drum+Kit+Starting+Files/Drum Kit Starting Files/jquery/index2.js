// $("h1").click(function(){
//     $("h1").css("color","blue");
// });


$("button").click(function(){
    $("h1").css("color","green");
});

// console me print ho jayega jo bhi ayega 
$("input").keydown(function(event){
    console.log(event.key)

})

$(document).keydown(function(event){
    $("h1").text(event.key);
})

// on fuction instead of clink and keydown


$("h1").on("mouseover",function(){
    $("h1").css("color","green");
});

// to add the element without changing the html 
$("h1").before("<button>before </button>")
$("h1").append("<button>append </button>")
$("h1").prepend("<button>prepend </button>")

$("button").on("click",function(){
    $("h1").hide();
});
$("button").on("click",function(){
    $("h1").slideDown();
});

$("button").on("click",function(){
    $("h1").animate({opacity:0.5});
});



