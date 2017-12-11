$("ul.nav > li").hover(function(){
    $(this).find("ul").first().toggle();
});

$("ul.nav li ul li").hover(function(){
    $(this).find("ul").first().toggle();
});


// $("#rightnav").mouseover(function(){
//     $("#rightnav1").css("display", "block");
// });
// $("#rightnav").mouseout(function(){
//     $("#rightnav1").css("display", "none");
// });

$(".shop-icon").mouseover(function(){
    $("#shop-div").css("display", "block");
});
$(".shop-icon").mouseout(function(){
    $("#shop-div").css("display", "none");
});


// ------------------------------------------------------------------------------------------


$(document).ready(function () {
    $("#js-rotating").Morphext({
        animation: "fadeInUp",
        separator: ", ",
        speed: 2000,
        complete: function () {
        }
    });


    // $("li.active").on("click", function() {
    //     for (var i=0; i< div.story.length; i++) {
    //         $("div.active").removeClass("active").css("display", "none").next().addClass("active").css("display", "block");
    //     }
     
    // })

    $('.owl-carousel').owlCarousel({
        items: 3,
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        mouseDrag: true,
        dots: true

    })
})


$(".jqactive1").click(function(){
    $("p").fadeOut()
});
$(".jqactive1").click(function(){
    $("p").fadeIn();
});

$(".jqactive1").click(function(){
    $(".jqactive11").css("display", "block");
    $(".jqactive22").css("display", "none");    
    $(".jqactive33").css("display", "none");    
    $(".jqactive44").css("display", "none");    
    $(".jqactive55").css("display", "none");
});
$(".jqactive2").click(function(){
    $(".jqactive22").css("display", "block");
    $(".jqactive11").css("display", "none");    
    $(".jqactive33").css("display", "none");    
    $(".jqactive44").css("display", "none");    
    $(".jqactive55").css("display", "none");
});
$(".jqactive3").click(function(){
    $(".jqactive33").css("display", "block");
    $(".jqactive22").css("display", "none");    
    $(".jqactive11").css("display", "none");    
    $(".jqactive44").css("display", "none");    
    $(".jqactive55").css("display", "none");
});
$(".jqactive4").click(function(){
    $(".jqactive44").css("display", "block");
    $(".jqactive11").css("display", "none");    
    $(".jqactive33").css("display", "none");    
    $(".jqactive22").css("display", "none");    
    $(".jqactive55").css("display", "none");
});
$(".jqactive5").click(function(){
    $(".jqactive55").css("display", "block");
    $(".jqactive11").css("display", "none");    
    $(".jqactive33").css("display", "none");    
    $(".jqactive22").css("display", "none");    
    $(".jqactive44").css("display", "none");
});
