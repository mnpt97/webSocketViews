let url = 'http://192.168.2.116:3000';
let socket = io();

const page = {
    0: '/view/home.htm',
    1: '/view/colorSwitch/colorSwitch.htm',
    'bouncingBalls': '/view/Animations/bouncingBalls/bouncingBalls_pub.htm',
    'soundVisBars' : '/view/soundVis/soundVis_bars/soundVisBars_pub.htm',
    'clock1' : '/view/Clocks/clock1/clock1_pub.htm'
}

socket.on('changeView', (id) => {
    console.log('id')
    window.location.href = url + page[id]
})
