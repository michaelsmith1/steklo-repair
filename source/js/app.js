  (function(){
    var 
      init = function(){
        setup_listener();
        
      },
      menu = $(".menu-top"),
      hamburger = $(".mobile-menu"),
      squad = $(".squad"),
      list = $(".list"),
      uslugs = $(".uslugs-list"),
      marki = $(".marki__list"),
      scroll_link = $(".scroll-js"),
      in_name = $(".input_name"),
      in_phone = $(".input_phone"),
      in_track = $(".input_track"),
      cocie_window = $('.cocie-window'),
      btn = $(".btn-js");
      
      
    setup_listener = function () {
      hamburger.click(function(){
        $(this).add(menu).toggleClass("active")
      });
      squad.click(function(e){
        e.preventDefault();
        uslugs.addClass('squad-ui');
      });
      list.click(function(e){
        e.preventDefault();
        uslugs.removeClass('squad-ui');
      });
      
      scroll_link.click(function(){
        href = $(this).attr("href"),
        offs = $(href).offset().top;
        if(!$(this).hasClass('mouse')){
          hamburger.add(menu).toggleClass("active");
        };
        $("html, body").animate({scrollTop: offs+"px"}, 1200);
        return false;
      });
      
      $('.up').on('click', function () {
        $("body, html").animate({
            scrollTop: 0
        }, 800);
        return false;
      });

      $(window).scroll(function(){
        var bo = $(window).scrollTop();
        if ( bo > 200 ) { $(".up").css("display", "flex"); } else { $(".up").css("display", "none"); }
      });

      SmoothScroll(
        {
          // Прокрутка Core 
         animationTime     :  600 , // [ms] 
         stepSize          :  100 , // [px]
     
         // Ускорение 
         ускоренияDelta :  50 ,   // 50 
         ускорениеMax    :  3 ,    // 3
     
         // Настройки клавиатуры
         keyboardSupport    :  true ,   // option 
         arrowScroll        :  50 ,     // [px]
     
         // Импульс (менее настраиваемый) 
         // отношение «хвоста» к «ускорению» 
         pulseAlgorithm    :  true ,
         pulseScale        :  5 ,
         pulseNormalize    :  1 ,
     
         // Other 
         touchpadSupport    :  false , // игнорирует тачпад по умолчанию 
         fixedBackground    :  true ,
         исключено           :  ' '     
     })

      btn.click(function(){
       var ex = $(this).data('track');
        in_track.val(ex)
      }).fancybox({
        padding: 0,
        height: 400,
      });
      
      
      
      $("form").submit(function() {
        $.ajax({
          type: "POST",
          url: "mail.php",
          data: $(this).serialize()
        }).done(function() {
          $.fancybox.close();
          in_name.add(in_phone).add(in_track).val('');
          setTimeout(function() {
            swal({
              title: "Спасибо за заявку!",
              text: "В ближайшее время наш менеджер свяжется с вами.",
              type: "success",
              allowOutsideClick: "true",
              confirmButtonColor: "#a5dc86"
            });
          }, 100);
        });
        return false;
      });

      marki.slick({
        autoplay: true,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 4,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          
        ]
      });
      // preloader___________


      var preloader = (function () {
        var
            preloader = $('.preloader'),
            persentsTotal = 0;
            // cardAnimate = $('.usercart');
        var imgPath = $('*').map(function (ind, element) {
    
            var
                background = $(element).css('background-image'),
                path = '';
            var isImg = $(element).is('img');
    
            if (background != 'none') {
                path = background.replace('url("', '').replace('")','')
            }
    
            if (isImg) {
                path = $(element).attr('src')
            }
    
            if (path) return path;
        });
    
        var setPersents = function (total, current) {
    
            var persents = Math.ceil(current / total *100);
            $('.js_percents').text(persents + '%');
            if (persents >= 100) {
                preloader.fadeOut();
                $('body').css('overflow','visible')
            }
        };
    
        var loadImages = function (images) {
            if (!images.length) preloader.fadeOut();
    
            images.forEach(function (img, i, images) {
                var fakeImages = $('<img>', {
                    attr: {
                        src: img
                    }
                });
    
                fakeImages.on('load error', function () {
                    persentsTotal++;
                    setPersents(images.length, persentsTotal);
                })
            });
    
        };
    
        return {
            init: function () {
                var imgs = imgPath.toArray();
                loadImages(imgs);
            }
        }
    }());
    
    $(function () {
        preloader.init();
    });
    



      // cocie
      var 
        setCookie = function (name, value) {
        document.cookie = name + "=" + value;
        },
        getCookie = function (name) {
          var r = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
          if (r) return r[2];
          else return "";};

      setTimeout(function(){
        if (!getCookie('user')){
          cocie_window.slideDown();
        }
      },3000);
      $('.cocie__btn').click(function(){
        cocie_window.slideUp()
        setCookie('user', 'completed')       
      })
      // cocie
      // mask_phone
      in_phone.mask('+7 (999) 999-99-99');
      // mask_phone
    }
      return init();
  })();


