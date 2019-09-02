let socket = io();

chooseClock = (pageNo) =>{
    socket.emit('changeView', pageNo);
}