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
        delay: delay, scaleY: 0, yoyo: true, repeat: 1, transformOrigin: "center center", onComplete: function () {
            startBlinking(8);
        }
    });
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

const closeEye = () => {
    TweenMax.killTweensOf([eyeL, eyeR]);
    TweenMax.to([eyeL, eyeR], .1, {scaleY: 0.1});
}

const openEyeL = () => {
    TweenMax.killTweensOf(eyeL);
    TweenMax.to(eyeL, .1, {scaleY: 0.7});
}

const initAnimation = () => {
    startBlinking(5);
}

initAnimation();
