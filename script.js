let video = document.querySelector('#video-player');
let display;
let progress;


 document.querySelector('#play').onclick = function(){
    video.play();
 }

document.querySelector('#pause').onclick = function(){
    video.pause();
}

document.querySelector('#stop').onclick = function(){
    video.pause();
    video.currentTime = 0;
}

document.querySelector('#speed-up').onclick = function(){
    video.play();
    video.playbackRate = 3;
}

document.querySelector('#speed-down').onclick = function(){
    video.play();
    video.playbackRate = 0.5;
}

document.querySelector('#speed-normal').onclick = function(){
    video.play();
    video.playbackRate = 1;
}
document.querySelector('#volume').oninput = function(){
    let v = this.value;
    console.log(v);
    video.volume  = v/100;
}

progress = document.querySelector('#progress'); 
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind; // отвечает за перемотку


function progressUpdate(){
    console.log(video.duration);// полное время
    console.log(video.currentTime);//текущее время
    progress.value = (100 * video.currentTime) / video.duration; // обычная пропорция

    document.querySelector('#out').innerHTML = Math.round(video.currentTime) + " sec";
}

function videoRewind(){
    let width = this.offsetWidth; // получаю ширину прогресс бара
    let currentPosition = event.offsetX;
    console.log(width);
    console.log(currentPosition);
    this.value = (100 * currentPosition)/ width;// перематываю  прогресс бар
    // связываю перемотку бара с видео
    video.pause();
    video.currentTime = video.duration * (currentPosition / width);
    video.play();
}