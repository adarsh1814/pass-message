

function passMsg() {

    const msg = document.getElementById('msg').value;
    const getMsg = document.getElementById('passedMsg');
    document.querySelector('#msg').value = '';
    getMsg.innerHTML = msg;

}

document.querySelector("#msg").addEventListener("keydown", (event) => {
    if (event.key === "Enter")
        passMsg();
});

