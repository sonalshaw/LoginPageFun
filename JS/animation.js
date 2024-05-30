let eyeR = document.querySelector('#right-eye');
let eyeL = document.querySelector('#left-eye');

const startBlinking = (delay) => {
    if(delay) {
        delay = getRandomInt(delay);
    } else {
        delay = 1;
    }
    let blinking = TweenMax.to([eyeL, eyeR], .1, {
        delay: delay, scaleY: 0, yoyo: true, repeat: 1, transformOrigin: "center center", onComplete: function () {
            startBlinking(8);
        }
    });
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
}

startBlinking(5);