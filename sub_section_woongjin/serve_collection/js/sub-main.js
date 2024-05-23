
$(document).ready(function(){


    // use a script tag or an external JS file
    document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger)});
    // gsap code here!
        



    let wt = $(window).width();
        //wt라는 변수 = 윈도우의 너비()
    if(wt >= 320 && wt < 1200){  //만약 wt는 320이상 또는 1200미만일 경우
        mobile()          //모바일이 실행
    }else{                //아니면
        pc()              //pc실행
    }


    /*mobile함수*/
    function mobile(){

        /*.gnb>li>a를 click하면 형제요소인 .sub가 slideDown
        .sub의 다른 형제요소들은 slideUp - slideToggle()*/
        $(".gnb>li>a").on("click",function(){
            $(this).siblings(".sub").stop().slideToggle()
            $(this).parent().siblings().find(".sub").slideUp()
        })






        /*.m_Btn을 누르면 aside가 나오고
        내부의 .close_btn를 누르면 다시 사라짐 - animate*/
        $(".m_btn").on("click",function(){
            $("aside").stop().animate({"right" : 0})
        })
        
        $(".close_btn").on("click",function(){ 
            $("aside").stop().animate({"right" : "-100%"})

        })






        /*.m_Btn을 누르면 header가 사라짐
        내부의 .close_btn를 누르면 다시 나타남 - animate*/
        $(".m_btn").on("click",function(){
            $(".hWrap").stop().animate({"top" : "-80px"})
        })
        
        $(".close_btn").on("click",function(){ 
            $(".hWrap").stop().animate({"top" : 0})

        })








    
    }//mobile함수끝






    function pc(){

        /*.gnb에 마우스를 올리면 fadeIn()
          .gnb>li에 마우스가 벗어나면 fadeOut()*/
        $(".gnb").on("mouseover",function(){
            $(this).find(".sub").stop().fadeIn();
        }).on("mouseout",function(){
            $(this).find(".sub").stop().fadeOut();
        });





        /*.gnb에 마우스를 올리면 .bg가 fadeIn()
          .gnb에 마우스가 벗어나면 fadeOut()*/
        $(".gnb").on("mouseover",function(){
            $(this).siblings(".bg").stop().fadeIn();
        }).on("mouseout",function(){
            $(this).siblings(".bg").stop().fadeOut();});




            

        /*.asider에 search button를 클릭하면
        풀페이지(width: 100vw; height: 100vh;
            background-color: rgba(0, 0, 0, 0.4);)로
        검색창(width: 50rem; height: 40rem;
            background-color: white;)이 생김
        페이지는 하단 sitemap으로 자동 이동
        검색창의 닫기버튼을 누르면 최상단으로 1.5초만에 animate*/
        $(".search_btn").on("click", function(){

            var searchDown = $(".sitemap").offset().top;

            $(window).scrollTop(searchDown);

            $(".search_aside").stop().css("display", "block"); 
        });

        $(".close").on("click", function(){

            var searchTop = $("html, body").offset().top;

            $(window).scrollTop(searchTop);


            $(".search_aside").stop().css("display", "none");
        });









    }
    //pc함수끝






    //공통함수

    /*.ontop pc을 click하면 최상단으로 1.5초만에 animate*/
    $(".ontop").on("click", function(){
        //.top를 click하면 일어나는 기능

        $("html, body").animate({"scrollTop" : 0},1500)
        //대상(html, body)
        //.animate({"속성" : "속성값"},시간)
    })    



    /*.lang을 click 팝업뜨기(on class) - toggleClass*/
    $(".lang").on("click", function(){
        //.lang를 click하면 일어나는 기능
        $(this).toggleClass("on")
        //header .hWrap aside .aside_header .lang.on를 만들어두어서 대상이 l_pop가 아니여도 가능함
    })

    /*.l_pop의 내부의 a를 누르면 해당 a 내부의 텍스트(text())가 .select 영역에 뜨게 만들기
        변수 설정이 필요함 : lang에있던게 l_pop으로 옮겨져야함*/
        $(".l_pop a").on("click", function(e){
            //.l_pop를 click하면 일어나는 함수
            e.preventDefault();
            //e.preventDefault(); : 브라우저의 기본동작을 실행하지 않도록하는 메소드
            //a태그 클릭시 href속성에 적힌 url로 이동되지 않도록함
            let txt = $(this).text();
            //txt라는 변수는 내가 선택한것에 text를 가져온다
            $(".select").text(txt);
            //대상은 .select 텍스트는 변수txt로
        })



    $(".familysite").on("click", function(){
        //.familysite를 click하면 일어나는 기능
        $(this).toggleClass("on")
    })





    /*화면 resize 함수*/
    $(window).on("resize", function(){
        //윈도우가 resize(사이즈가 변할때마다) 실행할 함수
        let resizeW = $(window).width();
        //함수resizeWidth = 윈도우의 너비()
        if(resizeW < 1200){   //만약 resizeW함수가 1200이하이면
            mobile();         //모바일 함수 실행
        }else{                //아니면
            pc();             //pc 함수 실행
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
 

})
//document끝