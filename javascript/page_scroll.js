
$('.down-arrow').click(function(){
$("html, body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 800);
return "hello";
});

// $('.up-arrow').click(function(){
// $("html, body").animate({ scrollTop: window.scrollTop(0), 300);
// });
$('.down-arrow-body').click(function(){
$("html, body").animate({ scrollTop: window.pageYOffset + $(window).height()}, 800);
return "hello";
});

$('.up-arrow-body').click(function(){
$("html, body").animate({ scrollTop: window.pageYOffset - $(window).height()*4}, 800);
return "hello";
});
