var width = window.innerWidth;
var height = window.innerHeight;
console.log(height);
$(".landingSection").css("height", height);
$(".landingSection").css("width", width);

var glitch = ["░", "▒", "▓", "█", ">", "<","/"];

var timeInterval = setInterval(heroTitle, 100);

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
    }, 3500);
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
