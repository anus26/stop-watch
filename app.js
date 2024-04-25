// const second =document.querySelector('#sec');
// const minutes =document.querySelector('#min')
// function startWatch(){
//     let sec = 0
//     setInterval(function(){
//         sec += 1
//         second.innerHTML = sec
//     },100)
// }
// function stopInterval(){
//     let min = 0
//     setInterval(function(){
//         min += 1
//         minutes.innerHTML = min

//     },1)
// }

// // function stopInterval(){
// //     clearInterval(seconds)
// //     clearTimeout(second)
// // }

let milli= 0;

let  sec =0
let min =0
let hr =0


let timer=false

function start(){
    timer = true;
    myFun();
}

function stop(){
    timer = false;
    myFun();
}

function reset(){
    location.reload();
}
function myFun(){
    if(timer == true){
        milli = milli + 1
        if(milli == 100){
            sec = sec +1
            milli = 0
        }
        if(sec == 60){
            min = min + 1
            sec = 0
        }
        if(min == 60){
            hr = hr + 1
            min = 0
        }
        let getSec = sec
        let getMin = min
        let getHR = hr

        if (sec < 10){
            getSec = "0"+sec
        }
        if(min < 10){
            getMin="0"+min
        }
        if(hr<10){
            getHR="0"+hr
        }
        setTimeout("myFun()",10)
        document.getElementById("milli").innerHTML=milli
        document.getElementById("sec").innerHTML= getSec
        document.getElementById("min").innerHTML=getMin
        document.getElementById("hr").innerHTML=getHR
    }
}















