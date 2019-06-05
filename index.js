let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.use('/view',express.static('public'));
app.use('/client', express.static('client'));



server.listen(3000, () =>{
    console.log('listening on port 30000')
})

io.on('connection', (socket) =>{
    socket.on('changeBGcolor', (color) =>{
        io.emit('changeBGcolor', color)
    })
    socket.on('changeView', (pageNo) =>{
        io.emit('changeView', pageNo)
    })
    
    
    
})


