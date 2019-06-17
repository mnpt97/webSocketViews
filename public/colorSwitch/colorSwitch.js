
let winWi  = window.innerWidth;
let winHe = window.innerHeight;
let wrap= document.getElementById('wrapper')

let changeInterval = 750;
let BW = 0;

socket.on('colSwitch', (obj) =>{
    console.log(obj[1])
    //if black/white button is pressed or slider is moving
    if(obj[1]['id'] === 'slideNum'){
        changeIntervalFunc(obj)
    }
    else if(obj[1]['id'] === 'changeBW'){
        changeBW(obj)
    }
    

})

changeBW = (obj) =>{
    BW = obj[1]['value']
}

changeIntervalFunc = (obj) =>{
    console.log(obj)
    changeInterval = parseInt(obj[1]['value'])
}


init = () =>{
    //wrap.style.width = winWi;
    wrap.style.height = winHe;

    setTimeout(changeColor, changeInterval)
}
let r;
let g;
let b;
changeColor = () => {
    if(BW === 0){
        r = Math.random(0,1) * 255;
        g = Math.random(0,1) * 255;
        b = Math.random(0,1) * 255;
    }
    if(BW === 1){
        r = Math.random(0,1) * 255;
        g = r;
        b = r;
    }
    
    wrap.style.backgroundColor = `rgb(${r},${g},${b})`;
    setTimeout(changeColor, changeInterval)
    
}


init()