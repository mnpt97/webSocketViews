let url = 'http://localhost:3000';
let socket = io();

let page = {
    0: '/view/home.htm',
    1: '/view/view.htm',
    2: '/view/colorSwitch/colorSwitch.htm'
}

socket.on('changeView', (num) => {
    window.location.href = url + page[num]
})