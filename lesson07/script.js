"use strict";

const playlist = getPlaylist();
runPlayer(playlist);

function runPlayer() {
  const elementsWrapper = getElements();
  
  elementsWrapper.searchButton.addEventListener("click", () => {
    const searchString = elementsWrapper.searchInput.value;

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


function renderResult(tracks, wrapper) {
  if (tracks.length === 0) {
    console.log("tracks not    found!");
    // elementWrapper.resultDiv.innerHTML...
    wrapper.resultDiv.innerHTML = "tracks not found!";
  } else {
    console.log(tracks);
    for (let i = 0; i < tracks.length; i++) {
      const newValue =
      wrapper.resultDiv.innerHTML +
        `<li><input type='checkbox'/>${tracks[i].name}</li>`;
      wrapper.resultDiv.innerHTML = newValue;
    }
  }
}


function getPlaylist() {
  const track1 = {
    id: 1,
    name: "Here comes your man",
    releaseDate: 2015,
    artist: "Pixies",
    fileUrl: "",
    price: 30,
  };

  const track2 = {
    id: 2,
    name: "Rhinestone eyes",
    releaseDate: 2012,
    artist: "Gorillaz",
    price: 4,
  };

  const track3 = {
    id: 3,
    name: "Candy shop",
    releaseDate: 2002,
    artist: "50cent",
    price: 3
  };
  const track4 = {
    id: 3,
    name: "Candy shop 2",
    releaseDate: 2020,
    artist: "50cent",
    price: 5
  };

  const playlist = [track1, track2, track3];
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

// 1. render the result inside DIV (use innerHTML)
// 2. try to find in track name or name of artist
// 4. read about difference between function declaration and function expression, read about arrow function
// 5. function return

// const calcAge = function (birthYear) {
//    const currYear = 2023
//    const resultAge = currYear - birthYear;
//    return resultAge
// }

// const age = calcAge(1990)
// console.log(age)
// const age2 = calcAge(1988)
// console.log(age2)


const tracks = getPlaylist();

let newestTrack = tracks[0];

for (let i = 0; i < tracks.length; i++){
  if (playlist[i].releaseDate > newestTrack.releaseDate ) {
    newestTrack = playlist[i]
  }
}

console.log(newestTrack);



// find cheapst track;
// find all 50cents tracks
// find tracks that is cheaper then 5  

