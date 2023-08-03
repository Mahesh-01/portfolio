// Global transition speed
var transitionSpeed = 0.5;

// Global ease setting
var easing = Power4.easeOut;

// Banner duration timer start time
var startTime;

// Timeline reference
var tl;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Global Timeline
  tl = new TimelineMax({ onComplete: endTime });

  animate();
  var delayRollover = setTimeout(setRollover, 2500);
}

function animate() {
  tl.set(["#main_content"], { autoAlpha: 1, force3D: true });

  tl.set(["#cta", "#cta_roll"], { autoAlpha: 0, force3D: false });

  tl.set(["#bkg_holder"], { transformOrigin: "50% 50%", scale: 1 });

  tl.set(["#txt1", "#txt2", "#txt3", "#terms"], {
    autoAlpha: 0,
  });

  tl.to(["#txt1"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 0.5);

  tl.to(["#txt2"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 1.5);

  tl.to(["#cta"], 0.5, { autoAlpha: 1, ease: Power1.easeOut }, 2.5);
}

// CTA grow on hover

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", default_over, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", default_out, false);
}

function default_over(event) {
  TweenMax.to(["#cta_roll"], 0.3, { autoAlpha: 1, ease: Power1.easeOut, delay: 0 });
}

function default_out(event) {
  TweenMax.to(["#cta_roll"], 0.3, { autoAlpha: 0, ease: Power1.easeOut, delay: 0 });
}

// End timer

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}
