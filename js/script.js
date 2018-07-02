$(document).ready(function() {
    $(".nav-mobile").click(function() {
        $(".header .nav").toggle(200)
    })

    $('.verif-search__block input').click(function() {
    	$('.verif-search__list').toggle(200)
    })


    $('.header__logo img').mouseover(function() {
        $('.logo-abs').show()
    })

    $('.header__logo img').mouseout(function() {
        $('.logo-abs').hide()
    })


    $('.header__btn').click(function() {
    	var navh = $('.header__nav').outerHeight()
    	$('.header__btn').toggleClass('header__btn-active')
    	$('.header__menu').toggle()
    })

    $('.popup__checkbox input').change(function () {
        if($(this).is(':checked')) {
            $(this).parents('.popup__item1').addClass('popup__item1-active');
        }
        else {
            $(this).parents('.popup__item1').removeClass('popup__item1-active');
        }
    });

    $('#popup-btn-1').click(function() {
        $('.popup__block1').hide()
        $('.popup__block2').show()
    })

    $('#popup-btn-2').click(function() {
        $('.popup__block2').hide()
        $('.popup__block3').show()
    })

    $('#popup-btn-3').click(function() {
        $('.popup__block2').hide()
        $('.popup__block1').show()
    })

    $('#popup-btn-4').click(function() {
        $('.popup__block2').show()
        $('.popup__block3').hide()
    })


    $('#popup-show').click(function() {
        $('.popup__block2').hide()
        $('.popup__block3').hide()
        $('.egrul__popup').show()
        $('.popup__block1').show()
    })

    $('#popup-close').click(function() {
        $('.egrul__popup').hide()
    })

    $('.egrul__popup').click(function(e) {
        e.stopPropagation();
        $('.egrul__popup').hide()
    })
});