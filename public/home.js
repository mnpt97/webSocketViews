let url = 'http://localhost:3000';
let socket = io();
let page = {
    1: 'view.htm'
}
socket.on('changeBGcolor', (color) =>{
    console.log(color + 'home');
    document.body.style.backgroundColor = color;
})

socket.on('changeView', (num) => {
    window.location.href = url + '/view/' + page[num]
})