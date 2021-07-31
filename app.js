var width = window.innerWidth;
var height = window.innerHeight;
$(".guideAnimation").css("width", width);
$(".guideAnimation").css("height", height);

$( ".bl" ).click(function() {
  $( ".guideAnimation" ).addClass("blur");
  setTimeout(function(){
    $( ".guideAnimation" ).addClass("blurStatic");
 }, 3500);
});
