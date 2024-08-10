/// <reference types="../@types/jquery"/>



// function refreshTop(){
//   $("html,body").animate({scrollTop:'0'})
// }
// refreshTop()




$(".close").on("click", function () {
  $("#sidenav").animate({ width: "0px" }, 250);
  $(".nav-item").animate({ left: "-140px" }, 250);
  $(".close").animate({ left: "-140px" }, 250);
  $(".openparent").animate({ left: "10px" }, 250);
  $(".partyparent").animate({ left: "0px" }, 250);
});

$(".open").on("click", function () {
  $("#sidenav").animate({ width: "250px" }, 250);
  $(".nav-item").animate({ left: "15px" }, 250);
  $(".close").animate({ left: "178px" }, 250);
  $(".openparent").animate({ left: "260px" }, 250);
  $(".partyparent").animate({ left: "100px" }, 250);
});

$(".headone").on("click", function () {
  $(".bodyone").slideToggle(500);
  $(".bodytwo").slideUp(500);
  $(".bodythree").slideUp(500);
  $(".bodyfour").slideUp(500);
});

$(".headtwo").on("click", function () {
  $(".bodytwo").slideToggle(500);
  $(".bodyone").slideUp(500);
  $(".bodythree").slideUp(500);
  $(".bodyfour").slideUp(500);
});
$(".headthree").on("click", function () {
  $(".bodythree").slideToggle(500);
  $(".bodyone").slideUp(500);
  $(".bodytwo").slideUp(500);
  $(".bodyfour").slideUp(500);
});
$(".headfour").on("click", function () {
  $(".bodyfour").slideToggle(500);
  $(".bodyone").slideUp(500);
  $(".bodytwo").slideUp(500);
  $(".bodythree").slideUp(500);
});

$(".nav-link").on("click", function (e) {
  let section = $(e.target).attr("href");
  let secscroll = $(section).offset().top;
  $("html,body").animate({ scrollTop: secscroll}, "slow" );
});


$("textarea").on('keypress',function () {
let x = $(".txtarea").val().length+1
$(".thespan").text(100-x <= 0? "Your Available Characters Finished" :100-x)

  })



  $('#getting-startedhr').countdown('2543/8/12', function(event) {
    $(this).html(event.strftime('%H h'));
  });

  
  $('#getting-startedmin').countdown('2543/08/12', function(event) {
    $(this).html(event.strftime('%M m'));
  });

  
  $('#getting-startedsec').countdown('2543/08/12', function(event) {
    $(this).html(event.strftime('%S s'));
  });

