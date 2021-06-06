// all song name
const songsName = ['crazy','falling','naruto','way-back-home','without-me'];

// track element
const btnContainer = document.getElementById('btn-container');

console.log(btnContainer);
// create btn and append btn container
songsName.forEach(song=>{
    // create btn
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = song.split('-').join(' ');
    
    // add event listener
    btn.addEventListener('click',event=>{
        // stop songs here
        stopSongs();

        // play song here
        let songBox = document.getElementById(song);
        btn.classList.add('play');
        songBox.play();
    });

    // append btn div container
    btnContainer.appendChild(btn);
})

// function play song
function stopSongs(){
    songsName.forEach(song=>{
        let songBox = document.getElementById(song);
        songBox.pause();
        songBox.currentTime = 0;

        document.querySelectorAll('.btn').forEach(btn=>{
            btn.classList.remove('play');
        })
    })
}