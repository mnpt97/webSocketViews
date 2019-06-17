const can = document.getElementById('can');
const ctx = can.getContext('2d');

let canWi = window.innerWidth;
let canHe = window.innerHeight;

let canBCol = 'black'

let objects1 = []; 

buildCanvas = () =>{
    can.height = canHe;
    can.width = canWi;
    can.style.backgroundColor = canBCol;
    
}

start = () =>{

    buildCanvas();
}

start();