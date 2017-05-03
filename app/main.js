//document ready function
$(document).ready(function(){
// // Carousel starts here
//  $(".owl-carousel").owlCarousel({
//    loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$('.main-carousel').flickity({
  // options
  cellAlign: 'center',
  contain: true
});
 });
// // Smooth Scrolling starts here
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
// //email validation starts here
function ValidateEmail(inputText){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat)){
    alert("Thank you for subscribing");
    document.form1.text1.focus();
    return true;
  }
  else{
    alert("Please enter a valid email address");
    document.form1.text1.focus();
    return false;
  }
}
