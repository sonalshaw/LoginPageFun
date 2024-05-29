let leftEye = document.getElementById('left-eye');
let rightEye = document.getElementById('right-eye');
let inputField = document.getElementById('username');

const updateEyePosition = () => {
    let caretPosition = inputField.selectionStart;

    // Define the original positions of the eyes
    let originalLeftEyePositionX = 30;
    let originalRightEyePositionX = 70;

    // Define the range within which the eyes can move
    let eyeMovementRange = 10;

    // Calculate the new positions of the eyes based on the caret position
    let newLeftEyePositionX = originalLeftEyePositionX + (caretPosition / inputField.value.length) * eyeMovementRange;
    let newRightEyePositionX = originalRightEyePositionX + (caretPosition / inputField.value.length) * eyeMovementRange;

    if (inputField.value.length == 0) {
        newLeftEyePositionX = originalLeftEyePositionX;
        newRightEyePositionX = originalRightEyePositionX;
    }
    // Update the positions of the eyes
    leftEye.setAttribute('cx', String(newLeftEyePositionX));
    rightEye.setAttribute('cx', String(newRightEyePositionX));
}

inputField.addEventListener('input', updateEyePosition);