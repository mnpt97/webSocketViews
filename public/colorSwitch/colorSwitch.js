
let winWi  = window.innerWidth;
let winHe = window.innerHeight;
let wrap= document.getElementById('wrapper')

init = () =>{
    //wrap.style.width = winWi;
    wrap.style.height = winHe;

    changeColor()
}

changeColor = () => {
    let r;
    let g;
    let b;
    let change = setInterval(() =>{
        r = Math.random(0,1) * 255;
        g = Math.random(0,1) * 255;
        b = Math.random(0,1) * 255;
        wrap.style.backgroundColor = `rgb(${r},${g},${b})`;
    },750)
}


init()