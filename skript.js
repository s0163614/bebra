$('#slick-views-testimonials-block-1-1').on('init reInit afterChange', function(event, slick, currentSlide, nextSlide){
    var i = (currentSlide ? currentSlide : 0) + 1;
    $(this).find('.slick-slide-num').html('<span class="slick-slide-num-current">' + i + '</span> / ' + slick.slideCount);
});

$('#slick-views-testimonials-block-1-1-slider').slick({
    adaptiveHeight:true,
    centerMode:false,
    fade:true,
    arrows: true,
    prevArrow: $('slprev'),
    nextArrow: $('slnext')
});

$('.slprev').on('click', function() {
    $('#slick-views-testimonials-block-1-1-slider').slick('slickPrev');
});
$('.slnext').on('click', function() {
    $('#slick-views-testimonials-block-1-1-slider').slick('slickNext');
  });
$('#slick-views-our-clients-block-1-2-slider').slick({
    mobileFirst :false, 
    autoplay :true,
    infinite: true,
    pauseOnHover :false,
    arrows:false,
    slidesToShow:5,
    centerMode: true,
    centerPadding: '10%',
    autoplaySpeed: 2000,
    responsive:[{
        breakpoint:1024,settings:
        {
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:3,
            waitForAnimate:false
        }
    },
    {
        breakpoint:600,settings:
        {
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:2,
            waitForAnimate:false
        }
    }]
});

$('#slick-views-our-clients-attachment-1-3-slider').slick({
    mobileFirst:false,
    autoplay:true,
    infinite: true,
    pauseOnHover:false,
    arrows:false,
    slidesToShow:5,
    centerMode: true,
    centerPadding: '10%',
    responsive:[{
        breakpoint:1024,
        settings:{
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:3,
            waitForAnimate:false}},
        {
        breakpoint:600,
        settings:{
            autoplay:true,
            pauseOnHover:false,
            arrows:false,
            slidesToShow:2,
            waitForAnimate:false
        }
        }]
});

$(function () {
    $('.forms').each(function () {
        // Объявляем переменные (форма и кнопка отправки)
        var form = $(this),
            btn = $('.form-submit'),
            check = false;

        // Добавляем каждому проверяемому полю, указание что поле пустое
        form.find('.input').addClass('empty_field');

        // Функция проверки полей формы
        function checkInput() {
            form.find('.input').each(function () {
                if ($(this).val() != '') {
                    // Если поле не пустое удаляем класс-указание
                    $(this).removeClass('empty_field');
                } else {
                    // Если поле пустое добавляем класс-указание
                    $(this).addClass('empty_field');
                }
            });
        }

        $('.form-checkbox').on('change', function () {
            if ($('.form-checkbox').prop('checked')) {
                check = true;
            } else {
                check = false;
            }
        });
        // Проверка в режиме реального времени
        setInterval(function () {
            // Запускаем функцию проверки полей на заполненность
            checkInput();
            // Считаем к-во незаполненных полей
            var sizeEmpty = $('.empty_field').length;
            // Вешаем условие-тригер на кнопку отправки формы
            if (sizeEmpty === 0 && check) {
                if (btn.hasClass('btn-active')) {
                    return false;
                } else {
                    btn.addClass('btn-active');
                }
            } else {
                if(btn.hasClass('btn-active')){
                    btn.removeClass('btn-active');
                } else { 
                    return false;
                }
            }
        }, 500);

        // Событие клика по кнопке отправить
        btn.click(function () {
            if ($(this).hasClass('btn-active')) {
                // Все хорошо, все заполнено, отправляем форму
                if(checkValidity()){
                    form.submit();
                }
            } else {
                return false
            }
           
        });

    });
});
