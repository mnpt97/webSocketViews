function getTime(){
    this.time = new Date()
    this.h;
    this.m;
    this.s;
    getN = (n) =>{
        return n<10?'0'+n:n
    }
    setInterval(() =>{
        console.log(getN(9))

    },1000)
}

let time = new getTime()