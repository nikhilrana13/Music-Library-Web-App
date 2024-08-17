const songs = [
    {
        title:'Murder',
        singer:'Shree brar',
        music:'proof',
        img:'images/Murder-1.jpg',
        file:'Murder.mp3',
    },
     
    {
        title:'Ranjha Mirza',
        singer:'Mankirat Aulakh',
        music:'proof',
        img:'images/Ranjha-Mirza-1.jpg',
        file:'Ranjha Mirza.mp3'
    },

    {
        title:'Sarpanchi 2024',
        singer:'Jass bajwa',
        music:'proof',
        img:'images/Sarpanchi-2024-1.jpg',
        file:'Sarpanchi 2024.mp3',
    },
    {
        title:'tom ford ',
        singer:'Kulbir jhinjer',
        music:'proof',
        img:'images/Tom-Ford-1.jpg',
        file:'Tom Ford.mp3',

    },
    {
        title:'Trump ',
        singer:'Cheema y',
        music:'proof',
        img:'images/Trump-1.jpg',
        file:'Trump.mp3',

    },
    {
        title:'tom ford ',
        singer:'Kulbir jhinjer',
        music:'proof',
        img:'images/Tom-Ford-1.jpg',
        file:'Tom Ford.mp3',

    },


]

const musiclibrary = document.querySelector('.music-library')


function displaysongs(filtersongs = songs){

    musiclibrary.innerHTML = '';
    filtersongs.forEach((song, index)=>{
        const newdiv = document.createElement("div")
        newdiv.classList.add("songs")
        musiclibrary.appendChild(newdiv)
        newdiv.innerHTML = `
        <div class="song-img">
        <img src="${song.img}".jpg">
        </div>
        <div class="title">
        <p>Title:${song.title}</p>
        <p>Singer:${song.singer}</p>
        <p>Music:${song.music}</p>
        <button id="playbtn" onclick="playSong(${index})">Play</button>
        </div> 
        `

    })
  

}







function playSong(index){
    const musicPlayer = document.getElementById("musicPlayer");
    const songSource = document.getElementById("songSource");

    songSource.src = songs[index].file;
    musicPlayer.load();
    musicPlayer.play();
}


displaysongs()


function filtersongs(){
    const searchInput = document.getElementById("searchinput").value;
    console.log('Search Input:', searchInput);

    const filtersongs = songs.filter(song => song.title.toLowerCase().includes(searchInput));
    console.log('Filter Songs:', filtersongs); 
    displaysongs(filtersongs);
    

}
document.getElementById("searchinput").addEventListener('input', filtersongs);

window.onload = () =>{
    displaysongs();

}
