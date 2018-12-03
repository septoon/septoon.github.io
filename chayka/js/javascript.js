$(document).ready(function(){
    $('.slider').bxSlider({
        slideWidth: 907,
        mode: 'fade',
        captions: true,
        adaptiveHeight: true
    });
  });

var lastScrollPosition = 0;

$('#scroll-up').click(function(){
    if ($(document).scrollTop() > 0 ){
        $('body').animate({scrollTop:0},1000);
        lastScrollPosition = $(document).scrollTop();
    } else {
        $('body').animate({scrollTop:lastScrollPosition},1000);
    }
});

$('.price_header').click(function(){
    if ($('.price').hasClass('price_active')){
        $('.price').removeClass('price_active');
    } else{
        $('.price').addClass('price_active');
    }
});

$('.price_list').click(function(){
    if($('.price_list_header').hasClass('price_list_active')){
        $('.price_list_header').removeClass('price_list_active', 500, 'swing');
    } else {
        $('.price_list_header').addClass('price_list_active', 500, 'swing');
    }
});

function slowScroll (id) {
    var offset = 0;
    $('html, body').animate ({
        scrollTop: $(id).offset ().top - offset
    }, 500);
    $('#scroll-up').css("display","block");
    return false;
 }

 $('.menu-btn').on('click', function(e){
     e.preventDefault();
    $('.burger_menu').toggleClass('burger_menu_active');
    $('.menu-btn').toggleClass('menu_btn_active');  
})

$('a').click(function(){
    if($('.burger_menu').hasClass('burger_menu_active')){
        $('.burger_menu').removeClass('burger_menu_active');
    } else {
        $('.burger_menu').addClass('burger_menu_active');
    }
});

/*     БУРГЕР МЕНЮ


$('.burger').click(function(){
    if($('.nav_mob').hasClass('nav_mob_active')){
        $('.nav_mob').removeClass('nav_mob_active');
    } else {
        $('.nav_mob').addClass('nav_mob_active');
    }
});



*/