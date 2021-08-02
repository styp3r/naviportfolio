var width = window.innerWidth;
var height = window.innerHeight;
console.log(height);
$(".landingSection").css("height", height);
$(".landingSection").css("width", width);

var glitch = ["░", "▒", "▓", "█", ">", "<","/"];

var timeInterval = setInterval(heroTitle, 70);

  function heroTitle(){
    $(".headerIntro").text(showGlitch());//showGlitch();
    $(".myName").text(showGlitch());
    $(".whatIDo").text(showGlitch());
    $(".iAm").text(showGlitch());

    setTimeout(function(){
      clearInterval(timeInterval);
        $(".headerIntro").text("My name is");
        $(".myName").text("Navjyot Jaiswal.");
        $(".whatIDo").text("I build for the web.");
        $(".iAm").html("I am a <span class = 'fewd'>Front-End Web Developer</span> based in Bangalore, India specializing in next-generation web design and occasionally create exceptional interactive user experiences.");
    }, 2000);
}

function showGlitch(){
  var c = glitch[Math.floor(Math.random()*6) + 1] +
  glitch[Math.floor(Math.random()*6) + 1]+glitch[Math.floor(Math.random()*6) + 1] +
  glitch[Math.floor(Math.random()*6) + 1]+glitch[Math.floor(Math.random()*6) + 1] +
  glitch[Math.floor(Math.random()*6) + 1]+glitch[Math.floor(Math.random()*6) + 1] +
  glitch[Math.floor(Math.random()*6) + 1]+glitch[Math.floor(Math.random()*6) + 1] +
  glitch[Math.floor(Math.random()*6) + 1]+glitch[Math.floor(Math.random()*6) + 1] +
  glitch[Math.floor(Math.random()*6) + 1];
  return c;
}

setTimeout(function() {
  $( ".guideAnimationTest" ).addClass("blur");

  setTimeout(function(){
    $( ".guideAnimationTest" ).addClass("blurStatic");
 }, 3000);

}, 6500);

setTimeout(function(){
  $( ".navBar" ).animate({
    opacity: 1
  }, 1000, function() {
    // Animation complete.
  });
}, 2000);

setTimeout(function(){
  $( ".encircle" ).animate({
    opacity: 1
  }, 1000, function() {
    // Animation complete.
  });
}, 3000);

$( ".line" ).animate({
  width: 60,
  marginLeft: 100
}, 3000, function() {
  // Animation complete.
  $(".line").animate({
    marginLeft: 0
  }, 5000);
});

setTimeout(function(){
  $( ".social" ).animate({
    opacity: 1
  }, 2000, function() {
    // Animation complete.
  });
}, 3000);

$(".contactButton").hover(()=>{
  $(".rotate").css("transitionDuration", "0.5s");
  $(".rotate").css("backgroundColor", "#9933ff");
}, ()=>{
  $(".rotate").css("transitionDuration", "0.5s");
  $(".rotate").css("backgroundColor", "#ffffff");
});
