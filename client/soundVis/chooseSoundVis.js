let socket = io();

chooseVis = (pageNo) =>{
    soundID = pageNo
    socket.emit('changeView', pageNo);
}