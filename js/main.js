$(function() {

    let i = 1;
    let q = 1;
    
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows header-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows header-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider__dotshead',
    });


    $('.slider__dotshead').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: '.header__slider', 
    });

    $('.surf-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<img class="slider-arrows map-arrows slider-arrows__left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows map-arrows slider-arrows__right" src="img/arrows-right.svg" alt="">',
        asNavFor: '.slider-map',
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 620,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    })

    $(".slider-map").slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.surf-slider',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 1250,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
              }
            },
            {
                breakpoint: 900,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 621,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
          ]
    })

    $(".travel-slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows travel-arrows travel-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows travel-arrows " src="img/arrows-right.svg" alt="">',
    })

    $(".sleep-slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows travel-arrows travel-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows travel-arrows " src="img/arrows-right.svg" alt="">',
    })

    $(".shop-slider").slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows shop-arrows shop-left" src="img/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows shop-arrows " src="img/arrows-right.svg" alt="">',
    })


    $(".number-nights").html(i);
    $(".minus").on('click', () => { 
        if(i<2) {
            i = 2;
        }     
        i--;   
        $(".number-nights").html(i);  
    })


    $(".plus").on('click', () => { 
            
        i++;   
        $(".number-nights").html(i);  
    })


    $(".number-guests").html(q);
    $(".minus2").on('click', () => { 
        if(q<2) {
            q = 2;
        }     
        q--;   
        $(".number-guests").html(q);  
    })


    $(".plus2").on('click', () => { 
            
        q++;   
        $(".number-guests").html(q);  
    })

    $('.advantages-box1').on('click', () => {
        $('.advantages1').toggle('displayNone'),
        $('.advantages-text__box1').toggle("displayNone")
    })

    $('.advantages-box2').on('click', () => {
        $('.advantages2').toggle('displayNone'),
        $('.advantages-text__box2').toggle("displayNone")
    })

    $('.advantages-box3').on('click', () => {
        $('.advantages3').toggle('displayNone'),
        $('.advantages-text__box3').toggle("displayNone")
    })
    $('.burger-btn').on('click', ()=> {
        $('.div').toggle('block');
        
    })
});








