
let winWi  = window.innerWidth;
let winHe = window.innerHeight;
let wrap= document.getElementById('wrapper')

let changeInterval = 750;

socket.on('slideNum', (obj) =>{
    console.log(obj[1])
    changeInterval = parseInt(obj[1]['Interval'])
    console.log(changeInterval)

})


init = () =>{
    //wrap.style.width = winWi;
    wrap.style.height = winHe;

    setTimeout(changeColor, changeInterval)
}
let r;
let g;
let b;
changeColor = () => {
    
    r = Math.random(0,1) * 255;
    g = Math.random(0,1) * 255;
    b = Math.random(0,1) * 255;
    wrap.style.backgroundColor = `rgb(${r},${g},${b})`;
    setTimeout(changeColor, changeInterval)
    
}


init()