const data = [
  {
    title: "Death Bed",
    artist: "Powfu",
    artwork: "https://samplesongs.netlify.app/album-arts/death-bed.jpg",
    url: "https://samplesongs.netlify.app/Death%20Bed.mp3",
    id: "1",
  },
  {
    title: "Bad Liar",
    artist: "Imagine Dragons",
    artwork: "https://samplesongs.netlify.app/album-arts/bad-liar.jpg",
    url: "https://samplesongs.netlify.app/Bad%20Liar.mp3",
    id: "2",
  },
  {
    title: "Faded",
    artist: "Alan Walker",
    artwork: "https://samplesongs.netlify.app/album-arts/faded.jpg",
    url: "https://samplesongs.netlify.app/Faded.mp3",
    id: "3",
  },
  {
    title: "Hate Me",
    artist: "Ellie Goulding",
    artwork: "https://samplesongs.netlify.app/album-arts/hate-me.jpg",
    url: "https://samplesongs.netlify.app/Hate%20Me.mp3",
    id: "4",
  },
  {
    title: "Solo",
    artist: "Clean Bandit",
    artwork: "https://samplesongs.netlify.app/album-arts/solo.jpg",
    url: "https://samplesongs.netlify.app/Solo.mp3",
    id: "5",
  },
  {
    title: "Without Me",
    artist: "Halsey",
    artwork: "https://samplesongs.netlify.app/album-arts/without-me.jpg",
    url: "https://samplesongs.netlify.app/Without%20Me.mp3",
    id: "6",
  },
];

const audio = document.getElementById("audio");
const previous = document.getElementById("previous");
const container = document.querySelector(".container");
const titleHeading = document.querySelector(".titleHeading");
const artistHeading = document.querySelector(".artistHeading");
const next = document.getElementById("next");
const shuffle = document.getElementById("shuffle");
const heading = document.querySelector(".heading h1");
let current = 0;

const createImg = document.createElement("img");
createImg.id = "styleImg";

function createAudio(current) {
  audio.src = data[current].url;
  createImg.src = data[current].artwork;
  titleHeading.innerHTML = data[current].title;
  artistHeading.innerHTML = data[current].artist;
  container.prepend(createImg);
}

previous.addEventListener("click", () => {
  if (current === 0) {
    current = data.length - 1;
    createAudio(current);
  } else {
    current--;
    createAudio(current);
  }
});

next.addEventListener("click", () => {
  if (current === data.length - 1) {
    current = 0;
    createAudio(current);
  } else {
    current++;
    createAudio(current);
  }
});

createAudio(current);

const playlistButton = document.querySelector(".playlistButton");
const playlistData = document.querySelector(".playlistData");
const search = document.querySelector(".search");
const addPlaylist = document.querySelector(".addPlaylist");

function playListCreated(data) {
  playlistData.innerHTML += data
    .map((e, index) => {
      return `
    <div class="containerNewSong" key=${index}>
       <div id="styleImg">
          <img src="${e.artwork}" alt=img ${index + 1}/>
        </div>
        <div class="title">
          <h3 class="titleHeading">${e.title}</h3>
        </div>
        <div class="artist">
          <p class="artistHeading">${e.artist}</p>
        </div>
        <div class="audioDiv">
          <audio controls id="audio" src="${e.url}"></audio>
        </div>
        <div>
          <button id="removeBtn" onClick="removePlaylistData(${index})">Remove</button>
        </div>
   </div>
  `;
    })
    .join("");
}

shuffle.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * data.length);
  createAudio(randomIndex);
});

function createButton() {
  const button = document.createElement("button");
  button.innerHTML = "Back";

  button.onclick = () => {
    window.location.reload();
  };
  playlistData.appendChild(button);
}

function newSongAdd() {
  const imgURL = document.getElementById("imgURL");
  const title = document.getElementById("title");
  const artist = document.getElementById("artist");
  const audioURL = document.getElementById("audioURL");

  if (
    imgURL.value !== "" &&
    title.value !== "" &&
    artist.value !== "" &&
    audioURL.value !== ""
  ) {
    let newData = {
      title: title.value,
      artist: artist.value,
      artwork: imgURL.value,
      url: audioURL.value,
    };

    data.unshift(newData);
    playlistData.innerHTML = "";
    playListCreated(data);
    createButton();
    imgURL.value = "";
    title.value = "";
    artist.value = "";
    audioURL.value = "";
  } else {
    alert("Please Enter the Data");
  }
}

function removePlaylistData(index) {
  data.splice(index, 1);
  playlistData.innerHTML = "";
  playListCreated(data);
  createButton();
}

playlistButton.addEventListener("click", () => {
  container.remove();
  search.style.display = "block";
  heading.innerHTML = "Playlist";
  playListCreated(data);
  createButton();
});

addPlaylist.addEventListener("click", () => {
  newSongAdd();
});
