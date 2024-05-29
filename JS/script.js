let username_info = document.getElementById('username');
let password_info = document.getElementById('password');
let toggle_switch_info = document.getElementById('toggle-switch');
let toggle_text_info = document.getElementById('toggle-text');

const toggleFunction = () => {
    if (toggle_switch_info.checked) {
        toggle_text_info.innerHTML = HIDE_PASSWORD;
        password_info.type = TEXT_STYLE;
    }
    else {
        toggle_text_info.innerHTML = SHOW_PASSWORD;
        password_info.type = PASSWORD_STYLE;
    }
    toggleAnimation(3);
}

toggle_text_info.addEventListener("click", () => {
    toggle_switch_info.checked = !toggle_switch_info.checked;
    toggleFunction();
});

const toggleAnimation = (trigger_value) => {
    // 1 - click on password field
    // 2 - password checking
    if (trigger_value == 1) {
        if (toggle_switch_info.checked)
            console.log(`Open Eye`);
        else
            console.log(`Close Eye`);
    } else if (trigger_value == 2) {
        let wrong_password = checkPassword(username_info.value, password_info.value);
        if (wrong_password)
            console.log(`Node Head To NO`);
        else
            console.log(`Show thumps UP`);
    } else if (trigger_value == 3) {
        if (password_info.value !== "")
            console.log(`Be Happy`);
    }
}

const checkPassword = (enter_username, enter_password) => {

    for (let value of data) {
        console.log(`${enter_username === value.username} ${value.username}`);
        if (enter_username === value.username) {
            console.log(`${value.username} ${value.password}`);
            return enter_password !== value.password;
        }
    }
    return true;
}

const clearInputs = () => {
    username_info.value = "";
    password_info.value = "";
    toggle_switch_info.checked = false;
    toggle_text_info.innerHTML = SHOW_PASSWORD;
}

const loginFunction = () => {
    let enter_username = username_info.value;
    let enter_password = password_info.value;

    if (enter_username === "")
        alert("Please enter a username");
    else if (enter_password === "")
        alert("Please enter a password");
    else {
        toggleAnimation(2);
        if (!checkPassword(enter_username, enter_password))
            alert(`Welcome ${enter_username} !`);
    }
}