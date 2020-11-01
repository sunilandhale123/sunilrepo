    $(document).ready(function() {

       

        $(window).scroll(function() {    
            var scroll = $(window).scrollTop();
            if (scroll >= 10) {
                $(".headerSec").addClass("fixedHeader");
            } else {
                $(".headerSec").removeClass("fixedHeader");
            }
        });

        $(".moreCategory .catHeading").click(function(){
            $(".moreCategory .catNav").slideToggle();
            $(".moreCategory .catHeading").toggleClass("active");  
        });
   
        $(".gridB").click(function(){
            $(".productListChild").addClass("fullwidth");        
        });

        $(".gridA").click(function(){
            $(".productListChild").removeClass("fullwidth");       
        });

        $(".gridList ul li").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        });

        $(".prSize ul li").click(function(){
            $(this).addClass('active').siblings().removeClass('active');
        }); 

        $(".hammer").click(function(){
            $("body").toggleClass("showMenu");        
        });   
        $(".bg").click(function(){
            $("body").removeClass("showMenu");        
        });

        $(".fliterBTN").click(function(){
            $("body").toggleClass("showFilter");        
        });  
        $(".bgFilter,.closeIcon").click(function(){
            $("body").removeClass("showFilter");        
        });

        $('.owl-carousel').owlCarousel({
        margin:20,
        loop:true,    
        items:4,
        responsive:{
            0:{
                items:1,
                nav:true,
                autoWidth:false,
            },
            400:{
                items:2,
                nav:false,
                autoWidth:false,
                nav:true,
            },
            600:{
                items:3,
                nav:false,
                autoWidth:false,
                nav:true,
            },
            768:{
                items:4,
                nav:false,
                autoWidth:false,
                nav:true,
            },
            1000:{
                items:7,            
                loop:false
            }
        }
    })

        $('.ratingA').mdbRate();
        $('.ratingB').mdbRate();
        $('.ratingC').mdbRate();
        $('.ratingD').mdbRate();
        $('.ratingE').mdbRate();
        $('.ratingF').mdbRate();
        $('.ratingG').mdbRate();
        $('.ratingH').mdbRate();
        $('.ratingI').mdbRate();
        $('.ratingJ').mdbRate();
        $('.ratingK').mdbRate();
        $('.ratingK').mdbRate();
        
        $('.rating1').mdbRate();
        $('.rating2').mdbRate();
        $('.rating3').mdbRate();
        $('.rating4').mdbRate();
        $('.rating5').mdbRate();
        $('.rating6').mdbRate();
        $('.rating7').mdbRate();
        $('.rating8').mdbRate();
        $('.rating9').mdbRate();
        $('.rating10').mdbRate();
        $('.rating11').mdbRate();
        $('.rating12').mdbRate();
       
        var one = $(".range-example-2").asRange({
        range: true,
        limit: true,
        tip: {
            active: 'onMove'
        }
        });
        console.log(one.asRange('set', [0, 20]));
        
    });