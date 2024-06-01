let eyeR = document.querySelector('#right-eye');
let eyeL = document.querySelector('#left-eye');

let password = document.querySelector('#password');

let blinking;

const startBlinking = (delay) => {
    if(delay) {
        delay = getRandomInt(delay);
    } else {
        delay = 1;
    }
    blinking = TweenMax.to([eyeL, eyeR], .1, {
        delay: delay, scaleY: 0.05, yoyo: true, repeat: 1, transformOrigin: "center center", onComplete: function () {
            startBlinking(8);
        }
    });
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const closeEye = () => {
    TweenMax.killTweensOf([eyeL, eyeR]);
    TweenMax.to([eyeL, eyeR], .1, {scaleY: 0.05, yoyo: true, transformOrigin: "center center"});
}

const openEyeL = () => {
    TweenMax.killTweensOf(eyeR);
    TweenMax.to(eyeL, .1, {scaleY: 0.7, yoyo: true, transformOrigin: "center center"});
    TweenMax.to(eyeR, .1, {scaleY: 0.05, yoyo: true, transformOrigin: "center center"});
}

const resetFace = () => {

    try {
        blinking.kill();
    } catch (e) {console.log('Handled blinking');}

    TweenMax.to([eyeL, eyeR], .1, {scaleY: 1, yoyo: true, transformOrigin: "center center"});
    startBlinking(5);
}


resetFace();
