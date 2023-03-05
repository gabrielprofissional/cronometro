var sec=00
var min=00
var hr=00
var interval

function two(digit){
    if(digit<10){
        return('0'+digit)
    }
    else{
        return(digit)
    }
}


function start(){
    watch()
    interval = setInterval(watch,1000)
}
function pause(){
    clearInterval(interval)
}
function reset(){
    stop()
    start()
}
function stop(){
    clearInterval(interval)
    sec=0
    min=0
    hr=0
    document.getElementById('timer').innerText='00:00:00'
}
function watch(){
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=00
            hr++
        }
    }
    document.getElementById('timer').innerText=two(hr)+ ':' +two(min)+':'+two(sec) 
}