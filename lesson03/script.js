"use strict";

const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector("#search-string");
const resultDiv = document.querySelector("#result-div")

const track1 = {
  id: 1,
  name: "Here comes your man",
  releaseDate: 2015,
  artist: "Pixies",
};

const track2 = {
  id: 2,
  name: "Rhinestone eyes",
  releaseDate: 2012,
  artist: "Gorillaz",
};

const track3 = {
  id: 3,
  name: "Candy shop",
  releaseDate: 2002,
  artist: "50cent",
};

const playlist = [
  
  track1,
  track2,
  track3,
];

searchButton.addEventListener("click", () => {
  const searchString = searchInput.value;

  let foundTracks = [];

  for (let i = 0; i < playlist.length; i++) {
     if (playlist[i].name.includes(searchString) || playlist[i].artist.includes(searchString)) {
   //if (playlist[i].name.includes(searchString)) {
      foundTracks.push(playlist[i]);
      // console.log(playlist[i])
    }
  }

  if (foundTracks.length === 0) {
    console.log("tracks not found!");
    resultDiv.innerHTML = "tracks not found!"
  } else {
    console.log(foundTracks);
    debugger;
    for (let i = 0; i < foundTracks.length; i++) {
      const newValue = resultDiv.innerHTML +`<li><input type='checkbox'/>${foundTracks[i].name}</li>`
       resultDiv.innerHTML = newValue
    }
  }
});

// 1. render the result inside DIV (use innerHTML)
// 2. try to find in track name or name of artist
// 3.