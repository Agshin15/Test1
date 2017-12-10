$("#menu1").mouseover(function(){
    $("#menu11").css("display", "block");

});
$("#menu1").mouseout(function(){
    $("#menu11").css("display", "none");
});

$("#menu2").mouseover(function(){
    $("#menu22").css("display", "block");

});
$("#menu2").mouseout(function(){
    $("#menu22").css("display", "none");
});

$("#menu3").mouseover(function(){
    $("#menu33").css("display", "block");

});
$("#menu3").mouseout(function(){
    $("#menu33").css("display", "none");
});

$("#homeli6").mouseover(function(){
    $("#homeli66").css("display", "block");

});
$("#homeli6").mouseout(function(){
    $("#homeli66").css("display", "none");
});

$("#homeli9").mouseover(function(){
    $("#homeli99").css("display", "block");

});
$("#homeli9").mouseout(function(){
    $("#homeli99").css("display", "none");
});

$("#21").mouseover(function(){
    $("#21-").css("display", "block");
});
$("#21").mouseout(function(){
    $("#21-").css("display", "none");
});

$("#22").mouseover(function(){
    $("#22-").css("display", "block");

});
$("#22").mouseout(function(){
    $("#22-").css("display", "none");
});

$("#23").mouseover(function(){
    $("#23-").css("display", "block");

});
$("#23").mouseout(function(){
    $("#23-").css("display", "none");
});

$("#231").mouseover(function(){
    $("#231-").css("display", "block");

});
$("#231").mouseout(function(){
    $("#231-").css("display", "none");
});

$("#232").mouseover(function(){
    $("#232-").css("display", "block");

});
$("#232").mouseout(function(){
    $("#232-").css("display", "none");
});

$("#24").mouseover(function(){
    $("#24-").css("display", "block");

});
$("#24").mouseout(function(){
    $("#24-").css("display", "none");
});

$("#25").mouseover(function(){
    $("#25-").css("display", "block");

});
$("#25").mouseout(function(){
    $("#25-").css("display", "none");
});

$("#26").mouseover(function(){
    $("#26-").css("display", "block");

});
$("#26").mouseout(function(){
    $("#26-").css("display", "none");
});

$("#menu4").mouseover(function(){
    $("#menu44").css("display", "block");

});
$("#menu4").mouseout(function(){
    $("#menu44").css("display", "none");
});

$("#41").mouseover(function(){
    $("#41-").css("display", "block");

});
$("#41").mouseout(function(){
    $("#41-").css("display", "none");
});

$("#42").mouseover(function(){
    $("#42-").css("display", "block");

});
$("#42").mouseout(function(){
    $("#42-").css("display", "none");
});

$("#43").mouseover(function(){
    $("#43-").css("display", "block");

});
$("#43").mouseout(function(){
    $("#43-").css("display", "none");
});

$("#44").mouseover(function(){
    $("#44-").css("display", "block");

});
$("#44").mouseout(function(){
    $("#44-").css("display", "none");
});

$("#48").mouseover(function(){
    $("#48-").css("display", "block");

});
$("#48").mouseout(function(){
    $("#48-").css("display", "none");
});

$("#49").mouseover(function(){
    $("#49-").css("display", "block");

});
$("#49").mouseout(function(){
    $("#49-").css("display", "none");
});

$("#menu5").mouseover(function(){
    $("#menu55").css("display", "block");
});
$("#menu5").mouseout(function(){
    $("#menu55").css("display", "none");
});

$("#51").mouseover(function(){
    $("#51-").css("display", "block");
});
$("#51").mouseout(function(){
    $("#51-").css("display", "none");
});

$("#menu6").mouseover(function(){
    $("#menu66").css("display", "block");
});
$("#menu6").mouseout(function(){
    $("#menu66").css("display", "none");
});

$("#menu7").mouseover(function(){
    $("#menu77").css("display", "block");
});
$("#menu7").mouseout(function(){
    $("#menu77").css("display", "none");
});

$("#rightnav").mouseover(function(){
    $("#rightnav1").css("display", "block");
});
$("#rightnav").mouseout(function(){
    $("#rightnav1").css("display", "none");
});

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

