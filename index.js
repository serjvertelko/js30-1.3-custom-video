const videoPlayBtn = document.querySelector(".video__play-control"),
    videoPlayer = document.querySelector(".video__content-item"),
    videoContentPlayMainBtnItem = document.querySelector(".video__content-playMainBtn-item"),
    videoContentControl = document.querySelector(".video__content-control"),
    videoContentPoster = document.querySelector(".video__content-poster"),
    audioProgressControl = document.querySelector(".audio__progress-control"),
    audioPlayMute = document.querySelector(".audio__play-controlaudio__play-control"),
    videoProgressControl = document.querySelector(".video__progress-control");
document.querySelector(".audio__progress-control").oninput = videvolume;
document.querySelector(".audio__play-controlaudio__play-control").onclick = audioMute;
let audio,
    video;


videoPlayer.ontimeupdate = progressUpdate;
videoProgressControl.onclick = videUdate;


function videUdate(event) {
    let w = this.offsetWidth;
    let x = event.offsetX;
    this.value = 100 * x / w;
    videoPlayer.pause();
    videoPlayer.currentTime = videoPlayer.duration * (x / w);
    videoPlayer.play();
}

function audioMute() {
    if (audioPlayMute.classList.contains("audio__play-controlaudio__play-controlActive") && videoPlayer.volume == 0) {
        audioPlayMute.classList.remove("audio__play-controlaudio__play-controlActive")
        audioProgressControl.value = audio;
        videoPlayer.volume = audioProgressControl.value / 100;
    } else {
        audioProgressControl.value = 0;
        videoPlayer.volume = 0;
        audioPlayMute.classList.add("audio__play-controlaudio__play-controlActive");
    }
}
function play() {
    videoPlayer.play();
}
function pause() {
    videoPlayer.pause();
}
function stop() {
    videoPlayer.pause();
    videoPlayer.currentTime = 0;
}

function videvolume(event) {
    audio = this.value;
    videoPlayer.volume = audio / 100;
    console.log("dasdas")
    if (videoPlayer.volume == 0) {
        audioPlayMute.classList.add("audio__play-controlaudio__play-controlActive");
    } else {
        audioPlayMute.classList.remove("audio__play-controlaudio__play-controlActive");
    }
}


function playVideoBtn() {
    videoPlayBtn.addEventListener("click", () => {
        if (videoPlayBtn.classList.contains("video__play-controlActive")) {
            console.log("Нажата пауза")
            pause()
        } else {
            console.log("Нажато проигрывание")
            play()
        }
        videoPlayBtn.classList.toggle("video__play-controlActive")
    })
}
function playVideoContentPlayMainBtnItem() {
    videoContentPlayMainBtnItem.addEventListener("click", () => {
        console.log("item");
        videoContentPlayMainBtnItem.classList.toggle("video__content-playMainBtn-itemActive");
        videoContentControl.classList.add("video__content-controlActive");
        videoContentPoster.classList.add("video__content-posterActive");
        play();
        videoPlayBtn.classList.toggle("video__play-controlActive");
    })
}
function progressUpdate() {
    let t = videoPlayer.currentTime,
        v = videoPlayer.duration;
    videoProgressControl.value = (t * 100) / v
    console.log( videoProgressControl.value)
    if( videoProgressControl.value == 100){
        stop();
        videoContentPlayMainBtnItem.classList.remove("video__content-playMainBtn-itemActive");
        videoContentControl.classList.remove("video__content-controlActive");
        videoPlayBtn.classList.remove("video__play-controlActive")
    }
}
randomCard()
function randomCard() {
    memoryCard.forEach(card => {
        let ramdomPos = Math.floor(Math.random() * 12);
        card.style.order = ramdomPos;
    });
}

playVideoContentPlayMainBtnItem();
playVideoBtn();
