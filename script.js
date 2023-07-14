
const img = document.querySelector("img");
const music = document.querySelector("audio");
const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

const songs = [
    {
        name: "song1",
        title: "Apna Bana Le",
        artist: "Arjit Singh"
    },
    {
        name: "song2",
        title: "Falak Tak chal",
        artist: "Udit Narayan"
    },
    {
        name: "song3",
        title: "Tip Tip Barsha",
        artist: "Udit Narayan"
    },
    {
        name: "song4",
        title: "Tu Jo Has-Has",
        artist: "Udit Narayan"
    },
    {
        name: "song5",
        title: "Tum Mile to",
        artist: "Javed Ali"
    },
    {
        name: "song6",
        title: "Udja Kale kawa",
        artist: "Udit Narayan"
    },
    {
        name: "song7",
        title: "Daru Badnaam",
        artist: "Param Singh"
    },
    {
        name: "song8",
        title: "Jane Wale Laut",
        artist: "B Praak"
    },
    {
        name: "song9",
        title: "Hawayein",
        artist: "Arjit Singh"
    },
    {
        name: "song10",
        title: "Kahani_Suno 2.0",
        artist: "Kaifi Khalil"
    },
    {
        name: "song11",
        title: "Mashup_Night-Lofi",
        artist: "Mix Singers"
    },
    {
        name: "song12",
        title: "Ek Raat",
        artist: "Vilen"
    },
    {
        name: "song13",
        title: "Humnawa Rington",
        artist: "Papon"
    },
    {
        name: "song14",
        title: "Zaalima",
        artist: "Arjit Singh"
    },
    {
        name: "song15",
        title: "Radha Kaise na Jale",
        artist: "A.R Rahman"
    }
];




let isPlaying = false;

// for play function
const playMusic = () => {
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
};

// for pause function
const pauseMusic =  () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
};

play.addEventListener('click', () =>{
    // if(isPlaying){
    //     pauseMusic();
    // }else{
    //     playMusic();
    // }
    isPlaying ? pauseMusic().img.classList.play() : playMusic().img.classList.pause();  //ternary operator
});

// Changing the Music Data

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".m4a", ".mp3";
    img.src = "images/" + songs.name + ".jpg";
}

songIndex = 0;
// loadSong(songs[1]);

const nextSong = () =>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = () =>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);