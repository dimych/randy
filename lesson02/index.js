// key - value
// property/field

const track1 = {
  id: 1,
  name: "titanic",
  releaseDate: 2011,
  artist: "thomas",
};

const track2 = {
  id: 2,
  name: "titanic 2",
  releaseDate: 2012,
  artist: "john",
};

const track3 = {
  id: 3,
  name: "candy shop",
  releaseDate: 2012,
  artist: "50cent",
};

const playlist = [
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  track1,
  track2,
  track3,
];

// mainUserOfplaylist -> playlistMainUser

// 1. list of tracks
// 2. find tracks by name
// shouldn't use filter method
// tit -> titanic 1, titanic 2, titan
// 3. type search term inside input and run our function by button click
// 4. simple case - result should be in console.log
// 5. more difficult case - result should be in <div>

const searchButton = document.querySelector("#search-button");
const searchInput = document.querySelector('#search-string')

searchButton.addEventListener("click", () => {

  const searchString = searchInput.value

  let foundTracks = [];

  for (let i = 0; i < playlist.length; i++) {
    if (playlist[i].name.includes(searchString)) {
      foundTracks.push(playlist[i]);
      // console.log(playlist[i])
    }
  }

  if (foundTracks.length === 0) {
    console.log("tracks not found!");
  } else {
    console.log(foundTracks);
  }
});

// 1. render the result inside DIV (use innerHTML)
// 2. try to find in track name or in name of artist

