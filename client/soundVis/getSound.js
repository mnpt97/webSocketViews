//let socket = io();
let soundID;
let transferSize = 32

//using transferVal to treansfer data to the right visual page
let transferVal = {
    'soundVisBars': 'soundBarsVal'
}
lsitening = () =>{

    navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;
    if (navigator.getUserMedia) {
    navigator.getUserMedia({
        audio: true
        },
        (stream) =>{
        audioContext = new AudioContext();
        analyser = audioContext.createAnalyser();
        microphone = audioContext.createMediaStreamSource(stream);
        javascriptNode = audioContext.createScriptProcessor(2048, 1, 1);

        analyser.smoothingTimeConstant = 0.7;
        analyser.fftSize = transferSize;

        microphone.connect(analyser);
        analyser.connect(javascriptNode);
        javascriptNode.connect(audioContext.destination);

        javascriptNode.onaudioprocess = function() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            
            analyser.getByteFrequencyData(array);
            var values = 0;

            var length = array.length;
            for (var i = 0; i < length; i++) {
                values += (array[i]);
            }

            var average = values / length;

            //console.log(Math.round(average));
            vis(array)
            
            } // end fn stream
        },
        (err) => {
        console.log("The following error occured: " + err.name)
        });
    } else {
    console.log("getUserMedia not supported");
    }
}

lsitening()
let params

vis = (val) =>{
    params = [transferVal[soundID], {id: 'soundVal', value: val, length: transferSize/2}]
    console.log(params[1]['length'])
    socket.emit('changeParams', params)
}