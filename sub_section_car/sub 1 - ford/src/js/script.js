
$(document).ready(function(){


  
    let winWidth = $(window).width();
    
    if(winWidth < 768){
        mobile();}
        else{pc()}
    
    common( );//공통으로 실행되는 함수
    
    
    
    
        function mobile(){


            $(".read_more").on("click", function(){
                $('.read').addClass("on")
                $('.mo_read_more_bg').addClass("on")
            });


            $(".back_mo").on("click", function(){
                $('.read').removeClass("on")
                $('.mo_read_more_bg').removeClass("on")
            });









        };//mobile



        function pc(){};//pc




        function common(){

            





             //브라우저 리사이징-반응형 웹에서 는 브라우저를 초기화작업
            $(window).resize(function(){
                document.location.reload();});

                





            
        };//common












    })//document
    