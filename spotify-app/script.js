"use strict";

const playlist = getPlaylist();
runApp(playlist);

function refreshUI() {
  const elementsWrapper = getElements();
  const searchString = elementsWrapper.searchInput.value;
  refresh(elementsWrapper.resultDiv);

  let foundTracks = [];

  for (let i = 0; i < playlist.length; i++) {
    if (
      playlist[i].name.includes(searchString) ||
      playlist[i].artist.includes(searchString)
    ) {
      foundTracks.push(playlist[i]);
    }
  }
  renderResult(foundTracks, elementsWrapper);
  bindLikeEventHandlers();
}

function runApp(playlist) {
  const elementsWrapper = getElements();

  elementsWrapper.searchButton.addEventListener("click", () => {
    refreshUI();
  });
}

function refresh(el) {
  el.innerHTML = "";
}

function renderResult(tracks, wrapper) {
  if (tracks.length === 0) {
    console.log("tracks not found!");
    wrapper.resultDiv.innerHTML = "tracks not found!";
  } else {
    for (let i = 0; i < tracks.length; i++) {
      const newValue =
        wrapper.resultDiv.innerHTML +
        `<li><audio controls src='../music/${tracks[i].mp3FileName}'></audio>${
          tracks[i].name
        } 
${getLIkeImageString(tracks[i])}
        </li>`;
      wrapper.resultDiv.innerHTML = newValue;
    }
  }
}

function getLIkeImageString(tracks) {
  if (tracks.addedToFavorite === true) {
    return '<img src="../assets/images/thumbs-up.jpg" alt="" style="width:50px;" class="unlike">';
  } else {
    return '<img src="../assets/images/940_like_icon.jpg" alt="" style="width:50px;" class="like">';
  }
}

function bindLikeEventHandlers() {
  const likeButtons = document.querySelectorAll(".like, .unlike");
  for (let i = 0; i < likeButtons.length; i++) {
    likeButtons[i].addEventListener("click", () => {
      playlist[i].addedToFavorite = !playlist[i].addedToFavorite;
      runApp();
    });
  }
}

function getPlaylist() {
  const track1 = {
    id: 1,
    name: "Here comes your man",
    releaseDate: 2015,
    artist: "Pixies",
    price: 30,
    addedToFavorite: true,
    mp3FileName: "HereComesYourMan.mp3",
  };

  const track2 = {
    id: 2,
    name: "Rhinestone eyes",
    releaseDate: 2012,
    artist: "Gorillaz",
    price: 4,
    addedToFavorite: false,
    mp3FileName: "RhinstoneEyes.mp3",
  };

  const track3 = {
    id: 3,
    name: "Candy shop",
    releaseDate: 2002,
    artist: "50cent",
    price: 3,
    addedToFavorite: true,
    mp3FileName: "CandyShop.mp3",
  };
  const track4 = {
    id: 3,
    name: "Just a lil bit",
    releaseDate: 2020,
    artist: "50cent",
    price: 5,
    addedToFavorite: true,
    mp3FileName: "JustALilBit.mp3",
  };

  const playlist = [track1, track2, track3, track4];
  return playlist;
}

function getElements() {
  const searchButton = document.querySelector("#search-button");
  const searchInput = document.querySelector("#search-string");
  const resultDiv = document.querySelector("#result-div");
  const wrapper = {
    searchButton: searchButton,
    searchInput: searchInput,
    resultDiv: resultDiv,
  };
  return wrapper;
}
