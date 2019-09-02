
let soundVal;
let soundLength;
let valID = 'soundVal';
let barWidth = 5;
let bars;
let barsDraw = 0;
let wrap = document.getElementById('wrapper');
let winWi = window.innerWidth;
let winHe = window.innerHeight;
console.log(winHe)
socket.on('soundBarsVal', (val) =>{
    if(val[1]['id'] === valID){
        soundVal = val[1]['value']
         
        if(barsDraw === 0){
            
            soundLength = val[1]['length']
            console.log(soundLength)
            drawBars(soundLength)
        }
        
        draw(soundVal)
    }
})

draw = (soundVal) =>{

    for(i = 0; i < bars.length; i++){
        bars[i].style.width = soundVal[i] * 2 + 'px'
    }
    
}

let bar;
drawBars = (length) =>{
    bar = `<div class = 'bar' style = 'background-color: white; margin: 5px auto 0 auto;
         height: ${winHe/soundLength - 5}px; width: 5px;'></div>`
    barsDraw = 1;
    console.log(bar)
    console.log(wrap)
    for(i = 0; i < length; i++){
        wrap.innerHTML += bar
    }
    bars = document.getElementsByClassName('bar')
    console.log(bars[1])
}