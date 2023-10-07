const songs = [
    {title: 'Arerey Manasa', 
    artist: 'Sid Sriram',
    imgSrc: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/falaknuma-das-et00101008-17-04-2019-03-03-47.jpg',
    songSrc: 'track2.mp3',
},
{   title: 'Pillaa Raa', 
    artist: ' Anurag Kulkarni',
    imgSrc: 'https://m.media-amazon.com/images/M/MV5BNzIzYjI0NzUtMjczZC00OTRlLTlkOGUtYjk0ZGFiMWQ0YTkwXkEyXkFqcGdeQXVyODk2ODI3MTU@._V1_.jpg',
    songSrc: 'track2.mp3',
},
{   title: 'Hukum', 
    artist: 'Anirudh Ravichander',
    imgSrc: 'https://c.saavncdn.com/959/Hukum-Thalaivar-Alappara-From-Jailer-Tamil-2023-20230717071502-500x500.jpg',
    songSrc: 'track3.mp3',
},
{   title: 'Brahmastra', 
    artist: 'Arijit Singh',
    imgSrc: 'https://c.saavncdn.com/044/Deva-Deva-From-Brahmastra-Hindi-2022-20220812225424-500x500.jpg',
    songSrc: 'track4.mp3',
},
{   title: 'Agar Tum Saath Ho', 
    artist: '	Arijit Singh',
    imgSrc: 'https://www.pagalworld.pw/GpE34Kg9Gq/9989/thumb-song-of-the-day-oct-2015-300.jpg',
    songSrc: 'track5.mp3',
},
]
let currIndex =0;
let title = document.getElementById("name");
let artist = document.getElementById("singer");
let img = document.getElementById("songImg");
let song = document.getElementById("song");
let playBtn = document.getElementById("ctlIcon");
let progress = document.getElementById("progress");
let btnDiv = document.getElementById("btnContainer");
let box = document.getElementById("music-box");
let tracks= document.getElementById("tracks");
let music = document.getElementById("music");
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};


function controls(){
    if(playBtn.classList.contains("fa-pause")){
        song.pause();
        playBtn.classList.replace("fa-pause", "fa-play");

    }
    else{
        playBtn.classList.replace("fa-play", "fa-pause");
        song.play();
        if(song.play()){
            setInterval(()=>{
                progress.value = song.currentTime
            },500);
        }

        
    }
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playBtn.classList.replace("fa-play", "fa-pause");

}

const prevBtn= ()=>{
    currIndex = (currIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currIndex]);
    box.classList.remove('rotate');
    
    // Use setTimeout to re-add the 'rotate' class after a small delay
    setTimeout(() => {
        box.classList.add('rotate');
    }, 10);

}
const nextBtn=()=>{
    currIndex = (currIndex +1) % songs.length;
    loadSong(songs[currIndex]);
    box.classList.remove('rotate');
    
    // Use setTimeout to re-add the 'rotate' class after a small delay
    setTimeout(() => {
        box.classList.add('rotate');
    }, 10);
    

}

const loadSong = (songs) =>{

    title.textContent = songs.title;
    artist.textContent = songs.artist;
    img.src=songs.imgSrc;
    song.src = songs.songSrc;

}

