"use strict";

const playlist = getPlaylist();
runPlayer(playlist);

function runPlayer(playlist) {
  const elementsWrapper = getElements();

  elementsWrapper.searchButton.addEventListener("click", () => {
    const searchString = elementsWrapper.searchInput.value;
    refresh(elementsWrapper.resultDiv);

    // extract this code to function
    // let foundTracks = filterTracks(playlist, searchString)
    let foundTracks = [];

    for (let i = 0; i < playlist.length; i++) {
      // if (isTrackFitTheCondition(playlist[i]))
      if (
        playlist[i].name.includes(searchString) ||
        playlist[i].artist.includes(searchString)
      ) {
        //if (playlist[i].name.includes(searchString)) {
        foundTracks.push(playlist[i]);
        // console.log(playlist[i])
      }
    }

    // renderResult(foundTracks)
    renderResult(foundTracks, elementsWrapper);
  });
}

function refresh(el) {
  el.innerHTML = "";
}

function renderResult(tracks, wrapper) {
  if (tracks.length === 0) {
    console.log("tracks not found!");
    // elementWrapper.resultDiv.innerHTML...
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

function getLIkeImageString(track) {
  if (track.addedToFavorite === true) {
    return '<img src="../assets/images/thumbs-up.jpg" alt="" style="width:50px;">';
  } else {
    return '<img src="../assets/images/940_like_icon.jpg" alt="" style="width:50px;">';
  }
}

// todo: put mp3 file name to all tracks
function getPlaylist() {
  const track1 = {
    id: 1,
    name: "Here comes your man",
    releaseDate: 2015,
    artist: "Pixies",
    fileUrl: "",
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

// we want to add to favorite some track: we should button near the each track ADD TO FAVORITE
// save favorite tracks inside local storage
