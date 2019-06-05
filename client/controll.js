let socket = io();

changeBackground = (color) => {
   
    socket.emit('changeBGcolor', color);
}

toView = (pageNo) =>{
    socket.emit('changeView', pageNo)
}
