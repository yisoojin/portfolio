
$(document).ready(function(){


  
let winWidth = $(window).width();

if(winWidth < 768){
    mobile();}
    else{pc()}

common();//공통으로 실행되는 함수




    function mobile(){


    /*각 슬라이드(인덱스)마다
        1. .car_title_box의
        2. <h2 class="brand">,<h3 class="car">
        컬러가 변해야함
        1. 머스탱 : #09203F
        2. 닛산 : #9D9D9C
        3. 페라리 : #AC0000*/
    $(window).on("scroll",function(){
        let scr = $(window).scrollTop();
        let top2 = $(".slide2").offset().top;
        let top3 = $(".slide3").offset().top;

        if(0 <= scr && top2 > scr){
            $(".slidewrap h2, h3").css({"color" : "#09203F"})
        }
        else if(top2 <= scr && top3 > scr){
            $(".slidewrap h2, h3").css({"color" : "#9D9D9C"})
        }
        else{
            $(".slidewrap h2, h3").css({"color" : "#AC0000"})
        }
    })
        




    /*slick*/
    $(function(){
        $('.car_list').slick({
            infinite : true, 	//무한 반복 옵션	 
            slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
            slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
            speed : 100,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
            arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
            dots : false, 		// 스크롤바 아래 점으로 페이지네이션 여부
            autoplay : true,			// 자동 스크롤 사용 여부
            prevArrow : "<button type='button' class='slick-prev'>Previous</button>",	// 이전 화살표 모양 설정
            nextArrow : "<button type='button' class='slick-next'>Next</button>",	// 다음 화살표 모양 설정
            draggable : true, 	//드래그 가능 여부
        });
      })
    
    

      /*gsap사용해보기*/
        //.car_img>img
        const car1 = document.querySelector(".slide1 .car_img>img");
        const car2 = document.querySelector(".slide2 .car_img>img");
        const car3 = document.querySelector(".slide3 .car_img>img");

        gsap.to(car1,{scrollTrigger :
            {trigger : car1,
             start : "top top",
             end : "100% bottom",
             scrub : 5,}, 
            x : 500, duration : 3, opacity : 0});

        gsap.from(car2,
            {scrollTrigger :
                {trigger : car2,
                 start : "0% 50%",
                 end : "100% bottom",
                 scrub : 5,}, 
                x : 500, duration : 3, opacity : 0});

        gsap.from(car3,
            {scrollTrigger :
                {trigger : car3,
                    start : "0% 50%",
                    end : "100% bottom",
                    scrub : 5,}, 
                x : 500, duration : 3, opacity : 0});



    };//mobile







    function pc(){

        /*gsap사용해보기*/
        //.car_img>img
        const car1 = document.querySelector(".slide1 .car_img>img");
        const car2 = document.querySelector(".slide2 .car_img>img");
        const car3 = document.querySelector(".slide3 .car_img>img");

        gsap.to(car1,{scrollTrigger :
            {trigger : car1,
             start : "50% center",
             end : "100% bottom",
             scrub : 5,}, 
            x : 500, duration : 3, opacity : 0});

        gsap.from(car2,
            {scrollTrigger :
                {trigger : car2,
                 start : "0% 50%",
                 end : "100% bottom",
                 scrub : 5,}, 
                x : 500, duration : 3, opacity : 0});

        gsap.from(car3,
            {scrollTrigger :
                {trigger : car3,
                    start : "0% 50%",
                    end : "100% bottom",
                    scrub : 5,}, 
                x : 500, duration : 3, opacity : 0});


        //ul = answer의 li
        // const answer1 = document.querySelector(".slide1 .answer li");
        // const answer2 = document.querySelector(".slide2 .answer li");
        // const answer3 = document.querySelector(".slide3 .answer li");
        
        // gsap.to(answer1,{scrollTrigger :
        //     {trigger : answer1,
        //      start : "50% center",
        //      end : "100% bottom",
        //      scrub : 5,}, 
        //     x : 500, duration : 3, opacity : 0});

        // gsap.from(answer2,
        //     {scrollTrigger :
        //         {trigger : answer2,
        //          start : "0% 50%",
        //          end : "100% bottom",
        //          scrub : 5,}, 
        //         x : 500, duration : 3, opacity : 0});

        // gsap.from(answer3,
        //     {scrollTrigger :
        //         {trigger : answer3,
        //             start : "0% 50%",
        //             end : "100% bottom",
        //             scrub : 5,}, 
        //         x : 500, duration : 3, opacity : 0});


        
    };//pc








    function common(){

   

        /*.side_menu_btn을 클릭하면 nav,bg 펼쳐짐
        add on class*/
        $(".side_menu_btn").on("click",function(){
            $(".nav_box").toggleClass("on")
            $(".bg").toggleClass("on")
        });



        /*각 슬라이드(인덱스)마다
        1. .side_menu_btn
        2. .car_info .line
        3. .car_info .Dimensions .circle
        컬러가 변해야함
        1. 머스탱 : #09203F
        2. 닛산 : #9D9D9C
        3. 페라리 : #AC0000*/
        $(window).on("scroll",function(){
            let scr = $(window).scrollTop();
            let top2 = $(".slide2").offset().top;
            let top3 = $(".slide3").offset().top;

            if(0 <= scr && top2 > scr){
                $(".side_menu_btn").css({"backgroundColor" : "#09203F"})
                $(".car_info .line").css({'borderColor' : "#09203F"})
                $(".car_info .Dimensions .circle").css({"backgroundColor" : "#09203F"})

            }
            else if(top2 <= scr && top3 > scr){
                $(".side_menu_btn").css({"backgroundColor" : "#9D9D9C"})
                $(".car_info .line").css({'borderColor' : "#9D9D9C"})
                $(".car_info .Dimensions .circle").css({"backgroundColor" : "#9D9D9C"})
            }
            else{
                $(".side_menu_btn").css({"backgroundColor" : "#AC0000"})
                $(".car_info .line").css({'borderColor' : "#AC0000"})
                $(".car_info .Dimensions .circle").css({"backgroundColor" : "#AC0000"})
            }
        });
        

       


        //마우스 휠을 내리면 각 섹션에 맞게 휠이 내려감
        $("section").on("mousewheel",function(e,d){

            //e.stopPropagation();
            //e.preventDefault();
            
            if(d<0){
                let nxt = $(this).next().offset().top;
                $("html, body").stop().animate({"scrollTop" : nxt})
            }
            else if(d>0){
                let prv = $(this).prev().offset().top;
                $("html, body").stop().animate({"scrollTop" : prv})
            }
            
        });



        //스크롤을 내리면 각 섹션에 맞는 .index li에 addclass 'on'
        $(window).on("scroll",function(){
            let scr = $(window).scrollTop();
            let top2 = $(".slide2").offset().top;
            let top3 = $(".slide3").offset().top;

            if(0 <= scr && top2 > scr){
                $(".index li").eq(0).addClass("on").siblings().removeClass("on")
            }
            else if(top2 <= scr && top3 > scr){
                $(".index li").eq(1).addClass("on").siblings().removeClass("on")
            }
            else{
                $(".index li").eq(2).addClass("on").siblings().removeClass("on")
            }
        });



        //.index li를 클릭하면 각 섹션으로 이동
        $(".index li").on("click",function(){

            let i = $(this).index()

            let distance = $("#slideBox").children().eq(i).offset().top
            $('html, body').animate({"scrollTop" : distance})
        });
     




        //{ passive: true } 옵션은 이벤트 리스너가 preventDefault()를 호출하지 않겠다고 브라우저에게 알려준다.
        //보통 스크롤 성능을 향상 시키기 위해서 사용한다.
        //모바일 사이트 전용을 만들지않는 이상 마우스휠 이벤트 사용은 어렵다 ㅠㅠ...
        //모바일 사이트 전용을 만들면 휠 이벤트가 아닌 터치이벤트 사용가능 
        // $.event.special.mousewheel = {
        //     setup: function(_, ns, handle) {
        //         this.addEventListener('mousewheel', handle, { passive: true });
        //     }
            
        // };
        
   
        



        

    }//common

         //브라우저 리사이징-반응형 웹에서 는 브라우저를 초기화작업
        // $(window).resize(function(){document.location.reload();});




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


     

    })//document


 




   
   



  













