// Banner duration timer start time
var startTime;

// Timeline reference
var tl;
var tl1;
var tl2;
var loop = 0;
var loopMax = 2;

// Init tricggered by onLoad in Body tag
function init() {
  // Set Banner duration timer
  startTime = new Date();

  // Set Background Timeline
  tl2 = new TimelineMax({  });

  // Set Global Timeline
  tl1 = new TimelineMax({ onComplete: endTime });

  animate();
}

function animate() {
  // tl1.pause();
  // tl2.pause();
  tl1.set(['#cta'], { force3D: false });
  tl1.set(['#hidden'], { autoAlpha: 0 });
  
  tl1.to(['#flex-alert'], 1,{ y: '-=247', x: '-=247', ease: "power2.inOut" }, 1.4);
  tl1.to(['#flex-alert'], 0.2,{ y: '+=10', x: '+=10', ease: "power2.inOut" }, '-=0');

  tl1.to(['#txt1'], 0.5,{ x: '+=300', ease: "power2.inOut" }, '-=0.5');
  tl1.to(['#logo'], 0.5,{ x: '+=300', ease: "power2.inOut" }, '-=0.25');
  tl1.to(['#txt2a-container'], 0.5,{ width: 150, ease: "power2.inOut" }, '-=0.25');
  tl1.to(['#txt2b-container'], 0.5,{ width: 150, ease: "power2.inOut" }, '-=0.25');
  tl1.to(['#cta'], 0.5,{ x: '+=300', ease: "power2.inOut" }, '-=0.25');

  tl1.to(['#flex-alert'], 1,{ y: '+=237', x: '+=237', ease: "power2.inOut" }, '+=3');
  tl1.to(['#txt1', '#logo', '#cta'], 0.5,{ x: '-=300', ease: "power2.inOut" }, '-=1');
  tl1.to(['#txt2a-container', '#txt2b-container'], 0.5,{ x: '-=300', ease: "power2.inOut" }, '-=1');
  tl1.to(['#txt2a-container', '#txt2b-container'], 0,{ width: 0, x: '+=300', ease: "power2.inOut" }, '-=0');
  
  tl1.to(['#flex-alert'], 1,{ y: '-=247', x: '-=247', ease: "power2.inOut" }, '-=0');
  tl1.to(['#flex-alert'], 0.2,{ y: '+=10', x: '+=10', ease: "power2.inOut" }, '-=0');

  tl1.to(['#txt1'], 0.5,{ x: '+=300', ease: "power2.inOut" }, '-=0.5');
  tl1.to(['#logo'], 0.5,{ x: '+=300', ease: "power2.inOut" }, '-=0.25');
  tl1.to(['#txt2a-container'], 0.5,{ width: 150, ease: "power2.inOut" }, '-=0.25');
  tl1.to(['#txt2b-container'], 0.5,{ width: 150, ease: "power2.inOut" }, '-=0.25');
  tl1.to(['#cta'], 0.5,{ x: '+=300', ease: "power2.inOut" }, '-=0.25');
  
  // timeline2
  tl2.to(['#bkg1-pink'], 2,{ x: '-=600', ease: "power2.inOut" }, 0);
  tl2.to(['#bkg1-orange'], 2.5,{ x: '-=600', ease: "power2.inOut" }, 0);

  tl2.to(['#bkg1-pink', '#bkg1-orange'], 2,{ x: '-=600', ease: "power2.inOut" }, 3.4);
  tl2.to(['#bkg2-pink'], 2,{ x: '-=600', ease: "power2.inOut" }, '-=2');
  tl2.to(['#bkg2-orange'], 2.5,{ x: '-=600', ease: "power2.inOut" }, '-=2');

  tl2.to(['#bkg2-pink', '#bkg2-orange'], 2,{ x: '-=600', ease: "power2.inOut" }, 6.8);
  tl2.to(['#bkg3-pink'], 2,{ x: '-=600', ease: "power2.inOut" }, '-=2');
  tl2.to(['#bkg3-orange'], 2.5,{ x: '-=600', ease: "power2.inOut" }, '-=2');

}

function endTime() {
  // show total banner animation time in browser console.
  var endTime = new Date();

  console.log(
    "Animation duration: " + (endTime - startTime) / 1000 + " seconds"
  );
}

function loopCheck() {
  console.log("loopCheck")
     loop++;
     if (loop < loopMax) {
        console.log("play again")
        tl1.play();
     } else{
       console.log("done")
       endTime();
       tl1.pause();
     }
   }
