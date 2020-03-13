// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         infinite: true,
//         speed: 900,
//         autoplaySpeed: 3000,
//         prevArrow: '<button type="button" class="slick-prev"><img src="img/left-arrow.png"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="img/right-arrow.png"></button>',
//         responsive: [
//             {
//                 breakpoint: 1030,
//                 settings: {
//                 arrows: false,
//                 dots: true
//                 }
//             }
//         ]
//       });
//   });

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,

  });