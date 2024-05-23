
$(document).ready(function(){


   let wt = $(window).width();
       //wt라는 변수 = 윈도우의 너비() 
   if( wt >= 320 && wt < 767 ){        //wt는 320이상 또는 767미만일 경우
       mobile()                        //모바일이 실행
   }else if(wt >= 768 && wt < 1023){   //wt는 768이상 또는 1023미만일 경우
       tab()                           //tab실행
   }else{
    pc()
   }









   /*mobile함수*/
   function mobile(){

        $('.side_menu_button').on('click',function(){
           $('.side_menu_wrap').css('right','0')
           $('header').css('opacity','0')
        });

        $('.close').on('click',function(){
            $('.side_menu_wrap').css('right','-100%')
            $('header').css('opacity','1')
        });


        
        $(".side_menu>li").on("click",function(e){
        
            e.preventDefault();
    
            let index2 = $(this).index()

            let offsetTop2 = $(".wrap").children("section").eq(index2).offset().top
    
            $("html, body").animate({"scrollTop" : offsetTop2})
    
       });
    


       $(window).on("scroll",function(){

            let scr = $(window).scrollTop();
            let top = $(".wrap").offset().top

            if(0 <= scr && top > scr){
                $(".mobile_scroll_top").css({"opacity" : "0"})}
            else{
                $(".mobile_scroll_top").css({"opacity" : "1"})}
        });


       $(".scroll_top").on("click", function(e){
       
            e.preventDefault();

            $("html, body").animate({"scrollTop" : 0},1000)

        });    
  


       
   
   }//mobile함수끝








   /*태블릿함수*/
   function tab(){

    $('.side_menu_button').on('click',function(){
        $('.side_menu_wrap').css('right','-3.5%')
        $('header').css('opacity','0')
        $('.close').css('display','block')
        $('.index2').css('display','none')
     });



    $('.close').on('click',function(){
        $('.side_menu_wrap').css('right','-75%')
        $('header').css('opacity','1')
        $('.close').css('display','none')
        $('.index2').css('display','block')
    });


   

    $(window).on("scroll",function(){

        let scr = $(window).scrollTop();
        let top = $(".wrap").offset().top

        if(0 <= scr && top > scr){
            $(".indexSection").css({"opacity" : "0"})}
        else{
            $(".indexSection").css({"opacity" : "1"})}
    });





    $(".indexSection>li").click(function(e){

        e.preventDefault();

        var i = $(this).index();
        let distance = $("section").siblings().eq(i).offset().top

        $("section").animate({"scrollTop" : distance});
        $(this).addClass("on").siblings().removeClass("on");
        $("section").eq(i).addClass("on").siblings().removeClass("on");
    });



    $(".side_menu>li").on("click",function(e){
        
        e.preventDefault();
    
        let index1 = $(this).index()
        // console.log(index1)
        let offsetTop = $(".wrap").offset().top
        // console.log(offsetTop)
       
        $(".indexSection>li").eq(index1).addClass("on").siblings().removeClass("on");
        $("section").eq(index1).addClass("on").siblings().removeClass("on");
        $("html, body").animate({"scrollTop" : offsetTop})
    
    });
    
   
      




   }//태블릿 함수 끝










   function pc(){

    $('.side_menu_button').on('click',function(){
        $('.side_menu_wrap').css('right','0')
        $('.close').css('display','block')
        $('.side_menu_bg').css('display','block')
        $('.index2').css('display','none')
     })


    $('.close').on('click',function(){
        $('.side_menu_wrap').css('right','-41.2%')
        $('header').css('opacity','1')
        $('.close').css('display','none')
        $('.side_menu_bg').css('display','none')
        $('.index2').css('display','block')
    })

  


    $(window).on("scroll",function(){

        let scr = $(window).scrollTop();
        let top = $(".wrap").offset().top

        if(0 <= scr && top > scr){
            $(".indexSection").css({"opacity" : "0"})}
        else{
            $(".indexSection").css({"opacity" : "1"})}
    });





    $(".indexSection>li").click(function(e){

        e.preventDefault();

        var i = $(this).index();

        let distance = $("section").siblings().eq(i).offset().top

        $("section").animate({"scrollTop" : distance})
        $(this).addClass("on").siblings().removeClass("on");
        $("section").eq(i).addClass("on").siblings().removeClass("on");
    });

      


    $(".side_menu>li").on("click",function(e){
        
        e.preventDefault();
    
        let index1 = $(this).index()
 
        let offsetTop = $(".wrap").offset().top

        $(".indexSection>li").eq(index1).addClass("on").siblings().removeClass("on");
        $("section").eq(index1).addClass("on").siblings().removeClass("on");
        $("html, body").animate({"scrollTop" : offsetTop})
    
    });
    




   }
   //pc함수끝











   //공통함수


   









   
   /*화면 resize 함수*/
   $(window).on("resize", function(){
       //윈도우가 resize(사이즈가 변할때마다) 실행할 함수
       let resizeW = $(window).width();
       //함수resizeWidth = 윈도우의 너비()
       if(resizeW < 767){   
           mobile();         
       }else if(resizeW < 1023){                
           tab();             
       }else{
        pc();
       }
   })

   //브라우저 리사이징-반응형 웹에서는 브라우저를 초기화작업
   
   var cachedWidth = $(window).width();
   $(window).resize(function(){
       var newWidth = $(window).width();
       if(newWidth !== cachedWidth){
       var delay = 300;
       var re_timer = null;
       $(window).on('resize', function(){
           clearTimeout(re_timer);
           re_timer = setTimeout(function(){
           document.location.reload();
           }, delay);
       });

           cachedWidth = newWidth;
       }
   });



});
//document끝