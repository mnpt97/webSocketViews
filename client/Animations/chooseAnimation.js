const cbo = controllBoardOptions;
const cssF = cssFiles;
let loadedCSS = 0;
let socket = io();


chooseAnimation = (pageNo, cboID) => {
    //emit pageNo to page Switcher
    socket.emit('changeView', pageNo);

    let cboDiv = document.getElementById('innerControll');
    cboDiv.innerHTML = 0;
    
    cboDiv.innerHTML = cbo[cboID];

    loadCSS(cboID);
    
}

loadCSS = (id) =>{
    if(loadedCSS === 1){
        let linkNode = document.getElementsByTagName('link')[1];
        linkNode.parentNode.removeChild(linkNode);
        loadedCSS = 0
    }
    let head = document.getElementsByTagName('HEAD')[0]
    let link = document.createElement('link');  
    link.rel = 'stylesheet';  
    link.type = 'text/css'; 
    console.log(cssF[id])
    link.href = cssF[id];  
    head.appendChild(link);
    loadedCSS = 1;
    getSlideNum();
}