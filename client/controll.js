

let socket = io();

changeBackground = (color) => {
   
    socket.emit('changeBGcolor', color);
}

toView = (pageNo) =>{
    socket.emit('changeView', pageNo)
}

let winWi = window.innerWidth;
let winHe = window.innerHeight;
const buttonIDs = ['buttonAni', 'buttonTest1', 'buttonTest2'];

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
        buttons1[i].style.width = winWi /4 +'px'
        buttons1[i].style.height = winHe /6 +'px'
        buttons1[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    }
    for(i = 0; i < buttonIDs.length; i++){
        button2 = document.getElementById(buttonIDs[i]);
        r = Math.random(0,1)*150;
        g = Math.random(0,1)*150;
        b = Math.random(0,1)*150;
        button2.style.width = winWi /2 +'px'
        button2.style.height = winHe /6 +'px'
        button2.style.backgroundColor = 'rgb('+r+', '+g+','+ b+')'
    }
    
    
}

listenClick = (buttons) =>{
    console.log(buttons)
    for(i = 0; i <buttons.length; i++){
        buttons[i].addEventListener('click', (e) =>{
            console.log(buttons,e)
            expandButton(buttons, i)
        }, false)
    }
}

expandButton = (buttons, i) =>{
    
}

init()