$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
                autoplay:true,
                autoplayTimeout:3000,
            },
            600:{
                items:3,
                nav:false,
                autoplay:true,
                autoplayTimeout:3000,
               
            },
            1000:{
                items:3,
                nav:true,
                loop:true,
                autoplay:true,
                autoplayTimeout:3000,
            }
        }


    })

    $("#form1").validate({


        rules:     
        { fullName:
            {
           required:true,
            minlength: 2
            },
        
            email:{
            required:true,
            
            }

        },




     messages:{
       fullName:{
        required:"name is mendator",
    }
      


     }



     })














})







