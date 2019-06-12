const buttonIDs = ['buttonAni', 'buttonTest1', 'buttonTest2'];

let socket = io();

changeBackground = (color) => {
   
    socket.emit('changeBGcolor', color);
}

toView = (pageNo, id) =>{
    socket.emit('changeView', pageNo)
}

let winWi = window.innerWidth;
let winHe = window.innerHeight;


init = () =>{
    let r;
    let g; 
    let b;
    let buttons1 = document.getElementsByClassName('button1');
  
    
}


expandButton = (id) =>{
    console.log('in expand')
    let button = document.getElementById(id);
    
    console.log(buttonExp[id][0])
    console.log(buttonExp[id]['value'])
    if(buttonExp[id]['value'] === 0){
        button.innerHTML += buttonExp[id][0]
        button.style.height = winHe / 3 +'px'
        buttonExp[id]['value'] = 1
        console.log(buttonExp[id]['value'])
    }
    else if(buttonExp[id]['value'] === 1){
        button.innerHTML = buttonExp[id]['base']
        button.style.height = winHe / 6 +'px'
        buttonExp[id]['value'] = 0
    }
    
}

init()