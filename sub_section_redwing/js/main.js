$(document).ready(function(){

    /*menu - gnb - li*/
    $(".gnb>li").on("mouseover", function(){
        $(this).children(".sub").stop().slideDown(800);
    });

    /*.gnb안에있는 li(.gnb>li)에 마우스가 벗어나면 sub가 사라져야함(slideUp)*/
    $(".gnb>li").on("mouseout",function(){
        $(this).children(".sub").stop().slideUp();
    });


   /*main .text .textWrap*/
   const text = document.querySelectorAll(".textWrap");

   for (let i = 0; i < text.length; i ++ ){
    const keyframes = {
        opacity : [ 0, 1, 0 ]
    }
    const option = {
        duration : 16000,
        delay : i * 8000,
        fill : 'backwards',
        iterations : Infinity,
    }
    text[i].animate(keyframes,option)
   }



    //스크롤이 메인을 지나 섹션으로 들어가면 헤더에 백그라운드가생김
    $(document).on("scroll", function(){

        let scr = $(window).scrollTop();
        let top = $("section").offset().top;

        if(scr > top){
            $("header").addClass("on")
        }
        else{
            $("header").removeClass("on")
        }
    });



    /*BEST ITEM의 shoesBox를 mouseover하면 shoes_img가 display:none
    hover_shoes_img가 보임*/
    $(".shoesBox a").on("mouseover",function(){
        $(this).children(".shoes_img").css("display","none")
        $(this).children(".hover_shoes_img").css("display","block")
    });
    $(".shoesBox a").on("mouseleave",function(){
        $(this).children(".shoes_img").css("display","block")
        $(this).children(".hover_shoes_img").css("display","none")
    });



    /*row2_newsbanner*/
    var swiper = new Swiper(".mySwiper",{
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
        },

      });


    /*row4에서 버튼을 누르면 각 맞는 스토어의 가게 사진이보임*/
    $(".storepic").on("click",function(){

        let num = $(this).index();

         $(this).parent().prev().children("img").eq(num).css({"display":"block"})
        .siblings().css({"display":"none"});
 
    });





    /*fix는 메인에서 보이지않음*/
    $(document).on("scroll", function(){

        let scrTop = $(window).scrollTop();
        let stop = $("section").offset().top;
        let ftop = $("footer").offset().top;

        if(scrTop > stop){
            $(".fix").css("opacity","1")
        }
        else{
            $(".fix").css("opacity","0")
        }
    });





















});//document