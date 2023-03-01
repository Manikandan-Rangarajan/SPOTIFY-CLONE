let songIndex = 0;
let audioElment = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
        {songName:"Let Me Love You", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
        {songName:"Inkem Inkem", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
        {songName:"Oru Thala Kadhal", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
        {songName:"Pasoori", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
        {songName:"En Iniya Thanimaye", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
        {songName:"Kadhal En Kaviye", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
        {songName:"Ae Dil Hai Mushkil", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
        {songName:"Bones", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
        {songName:"Kodana kodi", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
        {songName:"Dil Ko Karaar", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
]

//adding song name and pic
songItems.forEach(function(element, i){
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});


// audioElement.play();

masterPlay.addEventListener('click',()=>{
    if(audioElment.paused||audioElment.currentTime<=0){
      audioElment.play();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      gif.style.opacity=1;
    }
    else{
        audioElment.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//progress bar
audioElment.addEventListener('timeupdate',function(e){
    progress = parseInt((audioElment.currentTime/audioElment.duration)*100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',function(e){
        audioElment.currentTime = (myProgressBar.value*audioElment.duration)/100;
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        audioElment.pause();
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play-circle');
            e.target.classList.add('fa-pause-circle');
            audioElment.src = `songs/${songIndex+1}.mp3`;
            audioElment.currentTime = 0;
            audioElment.play();
            masterSongName.innerText = songs[songIndex].songName;
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
            gif.style.opacity = 1;
    })
});


document.getElementById('forward').addEventListener('click',()=>{
    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
    audioElment.src = `songs/${songIndex+1}.mp3`;
    audioElment.currentTime = 0;
    audioElment.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 0){
        songIndex = 9;
    }
    else{
        songIndex-=1;
    }
    audioElment.src = `songs/${songIndex+1}.mp3`;
    audioElment.currentTime = 0;
    audioElment.play();
    masterSongName.innerText = songs[songIndex].songName;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
});

// let songIndex = 0;
// let audioElment = new Audio('songs/1.mp3');
// let masterPlay = document.getElementById('masterPlay');
// let myProgressBar = document.getElementById('myProgressBar');
// let gif = document.getElementById('gif');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));
// let songs =[
//         {songName:"Let Me Love You", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
//         {songName:"Inkem Inkem Inkem", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
//         {songName:"Minnalai Pudithu", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
//         {songName:"Bones", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
//         {songName:"Akuma No Ko", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
//         {songName:"Kadhal En Kaviye", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
//         {songName:"Ae Dil Hai Mushkil", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
//         {songName:"Etho Seigirai", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"},
//         {songName:"Vaseegara", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
//         {songName:"Dil Ko Karaar", filePath:"songs/10.mp3", coverPath:"covers/10.jpg"},
// ]

// //adding song name and pic
// songItems.forEach(function(element, i){
//     element.getElementsByTagName("img")[0].src = songs[i].coverPath;
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
// });


// // audioElement.play();

// masterPlay.addEventListener('click',()=>{
//     if(audioElment.paused||audioElment.currentTime<=0){
//       audioElment.play();
//       masterPlay.classList.remove('fa-play-circle');
//       masterPlay.classList.add('fa-pause-circle');
//       gif.style.opacity=1;
//     }
//     else{
//         audioElment.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
// //progress bar
// audioElment.addEventListener('timeupdate',function(e){
//     progress = parseInt((audioElment.currentTime/audioElment.duration)*100);
//     myProgressBar.value = progress;
// });

// myProgressBar.addEventListener('change',function(e){
//         audioElment.currentTime = (myProgressBar.value*audioElment.duration)/100;
// });

// const makeAllPlays = ()=>{
//     Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//         element.classList.remove('fa-pause-circle');
//         element.classList.add('fa-play-circle');
//         audioElment.pause();
//     })
// }

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
//     element.addEventListener('click',(e)=>{
//             makeAllPlays();
//             songIndex = parseInt(e.target.id);
//             e.target.classList.remove('fa-play-circle');
//             e.target.classList.add('fa-pause-circle');
//             audioElment.src = `songs/${songIndex+1}.mp3`;
//             audioElment.currentTime = 0;
//             audioElment.play();
//             masterSongName.innerText = songs[songIndex].songName;
//             masterPlay.classList.remove('fa-play-circle');
//             masterPlay.classList.add('fa-pause-circle');
//             gif.style.opacity = 1;
//     })
// });


// document.getElementById('forward').addEventListener('click',()=>{
//     if(songIndex >= 9){
//         songIndex = 0;
//     }
//     else{
//         songIndex+=1;
//     }
//     audioElment.src = `songs/${songIndex+1}.mp3`;
//     audioElment.currentTime = 0;
//     audioElment.play();
//     masterSongName.innerText = songs[songIndex].songName;
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// });

// document.getElementById('previous').addEventListener('click',()=>{
//     if(songIndex <= 0){
//         songIndex = 9;
//     }
//     else{
//         songIndex-=1;
//     }
//     audioElment.src = `songs/${songIndex+1}.mp3`;
//     audioElment.currentTime = 0;
//     audioElment.play();
//     masterSongName.innerText = songs[songIndex].songName;
//     masterPlay.classList.remove('fa-play-circle');
//     masterPlay.classList.add('fa-pause-circle');
// });