let url = 'http://192.168.2.116:3000';
let socket = io();

const page = {
    0: '/view/home.htm',
    1: '/view/colorSwitch/colorSwitch.htm',
    2: '/view/pixelAnimations/pixelAnimations.htm'
}

socket.on('changeView', (num) => {
    window.location.href = url + page[num]
})

