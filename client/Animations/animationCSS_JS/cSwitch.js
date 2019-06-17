let controllID = 'colSwitch'

getSlideNum = ()  =>{
    let slider = document.getElementById("durationRange");
    console.log(slider.value)
    let obj;
    
    slider.oninput = () => {
        obj = {'id': 'slideNum',
            'value': slider.value}
        socket.emit('changeParams', [controllID, obj])
    }
}




let buttonBW = 0
changeBW = () =>{
    console.log('in bw')
    let button = document.getElementById('blackWhiteButton');
    if(buttonBW === 0){
        button.innerHTML = 'Colors'
        buttonBW = 1
    }
    else if(buttonBW === 1){
        button.innerHTML = 'Black & White';
        buttonBW = 0
    }
    obj = {'id': 'changeBW',
            'value': buttonBW}
    socket.emit('changeParams', [controllID, obj])
}