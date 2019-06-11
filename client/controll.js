const buttonIDs = ['buttonAni', 'buttonTest1', 'buttonTest2'];

let socket = io();

changeBackground = (color) => {
   
    socket.emit('changeBGcolor', color);
}

toView = (pageNo, id) =>{
    socket.emit('changeView', pageNo)
    console.log(id)
    if(buttonIDs.includes(id)){
        expandButton(id)
    }
}

let winWi = window.innerWidth;
let winHe = window.innerHeight;


init = () =>{
    let r;
    let g; 
    let b;
    let buttons1 = document.getElementsByClassName('button1');
    let button2;
    for(i = 0; i < buttons1.length; i++){
        r = Math.random(0,1)*150;
        g = Math.random(0,1)*150;
        b = Math.random(0,1)*150;
        buttons1[i].style.width = winWi * (1/3.3) +'px'
        buttons1[i].style.height = winHe * (1/6) +'px'
        buttons1[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    for(i = 0; i < buttonIDs.length; i++){
        button2 = document.getElementById(buttonIDs[i]);
        r = Math.random(0,1)*150;
        g = Math.random(0,1)*150;
        b = Math.random(0,1)*150;
        button2.style.width = winWi *(1/3.3) +'px'
        button2.style.height = winHe *(1/6) +'px'
        button2.style.backgroundColor = 'rgb('+r+', '+g+','+ b+')'
    }
    
    
    
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