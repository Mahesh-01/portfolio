// Banner duration timer start time
var startTime;

var loop = 0;
var loopMax = 0;


// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });
  // tl.repeat(3); 

  animate();
  setRollover();
}

function animate() {
  tl.set(["#main"], { autoAlpha: 1, force3D: true });
  tl.set(["#sparkHolder, #spark"], { force3D: true, rotationZ: 0.01 });
  tl.set(["#txt2", "#txt3", "#txt4", "#txt5", "#cta",  "#cta_logo,  #legals2, #legals3"], { autoAlpha: 0});
  

  // tl.set(["#sparkGuide"], {autoAlpha: .2 });

  tl.from("#txt2", 0.5, {scale:.9, autoAlpha: 0, ease: Power1.easeInOut}, "-=.2")
  tl.to("#txt2", 0.5, {scale:.9, autoAlpha: 0, ease: Power1.easeInOut}, "+=2.7")

  tl.from("#txt3", 0.5, {scale:.9, autoAlpha: 0, ease: Power1.easeInOut})
  tl.to("#txt3", 0.5, {scale:.9, autoAlpha: 0, ease: Power1.easeInOut}, "+=2.7")

  tl.from("#txt4", 0.5, {scale:.9, autoAlpha: 0, ease: Power1.easeInOut})
  tl.to("#txt4", 0.5, {scale:.9, autoAlpha: 0, ease: Power1.easeInOut}, "+=2.7")

  tl.from("#txt5", 0.5, {scale:.9, autoAlpha: 0, ease: Power1.easeInOut})
  tl.to("#txt5", 0.5, {scale:.9, autoAlpha: 0, ease: Power1.easeInOut}, "+=2.7")

  tl.to("#spark", 2, { autoAlpha: 1}, "-=10.3")
  tl.to("#spark", 1.9, {rotation:50, x:"+=80",y:"+=5", scale:3.8, ease: Power1.easeInOut}, "-=1.9")

  tl.to("#cta, #cta_logo, #legals3", 0.5, { autoAlpha: 1, ease: Power1.easeInOut}, "+=0")
  tl.to("#logo, #legals1", 0.2, { autoAlpha: 0, ease: Power1.easeInOut}, "-=1")

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("bgExit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("bgExit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta", "#cta1"], 0.3, { scale: 1.1, ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta", "#cta1"], 0.3, { scale: 1, ease: Power1.easeOut, delay: 0 });
}



