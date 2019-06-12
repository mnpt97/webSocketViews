

getSlideNum = ()  =>{
    let slider = document.getElementById("durationRange");
    console.log(slider.value)
    let obj;
    let controllID = 'slideNum'
    slider.oninput = () => {
        obj = {'Interval': slider.value}
        socket.emit('changeParams', [controllID, obj])
    }
}