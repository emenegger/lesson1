$('nav').onePageNav();

$('#menu-icon').click(function() {
	$('nav').slideToggle();
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 400); // Change image every 2 seconds
    console.log("Hello World")
}

$(".button").click(function(){
	console.log("button is working");
	$(".bruce-lee").toggleClass("kick");
});

$('button').mouseenter(function() {
	$(this).fadeTo('fast', 0.2);
});
$('button').mouseleave(function() {
	$(this).fadeTo('fast', 1);
});

// $(".resume-section-1-button").click(function(){
// 	$(this).toggleClass('resume-section-1');
// }); 

$(".resume-section-1").click(function(){
    $(".resume-section-1-button").slideDown("slow");
});

$(".resume-section-2").click(function(){
    $(".resume-section-2-button").slideDown("slow");
});

$(".resume-section-3").click(function(){
    $(".resume-section-3-button").slideDown("slow");
});

$(".resume-section-4").click(function(){
    $(".resume-section-4-button").slideDown("slow");
});

// $(".resume-section-2-button").click(function(){
//	$(this).toggleClass('resume-section-2');
// });

$(document).ready(function() {
	$(".home-image").slideLeft(1000)
});
