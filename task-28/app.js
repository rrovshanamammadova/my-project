import { playlist } from "./data.js";

let audioBody=document.querySelector(".info")
let audio=document.getElementById("mus")
let backward=document.querySelectorAll(".buttons")[0]
let pause=document.querySelectorAll(".buttons")[1]
let play=document.querySelectorAll(".buttons")[2]
let forward=document.querySelectorAll(".buttons")[3]
let range=document.getElementById("range")
let time=document.getElementById("time")
let i=0

function addUi(i){
audioBody.innerHTML= 
    `
        <div class="info">
            <img id="cover" src="./images/${playlist[i].ImagePath}" alt="cover">
            <h3 id="title">${playlist[i].Music}</h3>
            <p id="artist">${playlist[i].Singer}</p>
        </div>    
    `;

    audio.src=`./musics/${playlist[i].MusicPath}`;
    range.max=playlist[i].Time;
}

window.addEventListener("DOMContentLoaded",()=>{
    addUi(i);
})

play.addEventListener("click",()=>{
    audio.play()
    play.style.display="none"
    pause.style.display="inline"
})

pause.addEventListener("click",()=>{
    audio.pause()
    pause.style.display="none"
    play.style.display="inline"
})

forward.addEventListener("click",()=>{
    if(i<4){
        i++
    }
    else{
        i=0
    }
    addUi(i)
    audio.play()
    play.style.display="none"
    pause.style.display="inline"
})

backward.addEventListener("click",()=>{
    if(i>0){
        i--
    }
    else{
        i=4
    }
    addUi(i)
    audio.play()
    play.style.display="none"
    pause.style.display="inline"
})

audio.addEventListener("timeupdate",()=>{
    range.value=audio.currentTime
    let min=Math.trunc(audio.currentTime/60);
    let sec=Math.trunc(audio.currentTime%60);
    time.innerHTML=`${min<10 ? "0" + min : min} : ${sec<10 ? "0" + sec : sec}`
    
})

range.addEventListener("input",()=>{
    audio.currentTime=range.value
    audio.play()
    play.style.display="none"
    pause.style.display="inline"
})

audio.addEventListener("ended",()=>{
    if(i<4){
        i++
    }
    else{
        i=0
    }
    addUi(i)
    audio.play()
    play.style.display="none"
    pause.style.display="inline"
})