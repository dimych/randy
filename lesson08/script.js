function getPlaylist() {
  const track1 = {
    id: 1,
    name: "Here comes your man",
    releaseDate: 2015,
    artist: "Pixies",
    fileUrl: "",
    price: 4,
  };

  const track2 = {
    id: 2,
    name: "Rhinestone eyes",
    releaseDate: 2012,
    artist: "Gorillaz",
    price: 7,
  };

  const track3 = {
    id: 3,
    name: "Candy shop",
    releaseDate: 2002,
    artist: "50cent",
    price: 3,
  };
  const track4 = {
    id: 3,
    name: "Candy shop 2",
    releaseDate: 2020,
    artist: "50cent",
    price: 5,
  };

  const playlist = [track1, track2, track3, track4];
  return playlist;
}

// find cheapst track; ✅
// find all 50cents tracks
// find tracks that is cheaper then 5
// find tracks that names started with "C" letter
// find tracks that newer than 2015 and chiper than 6   &&
// find tracks that newer than 2020 or chiper than 3    ||

// 1. get array with data
const playlist2 = getPlaylist();

// 2. create memory variable to save our result
let cheapestTrack = playlist2[0]; // 3. make asumption that first track is the cheapest track

// 4 iteration
for (let i = 0; i < playlist2.length; i++) {
  // 5 check condition
  if (cheapestTrack.price > playlist2[i].price) {
    // 6 if ok - do somethig with our memory variable
    cheapestTrack = playlist2[i];
  }
}

// 7 check results

console.log(cheapestTrack);

const playlist3 = getPlaylist();

let newestTrack = playlist3[0];

for (let i = 0; i < playlist3.length; i++) {
  //  console.log(playlist3[i])
  if (newestTrack.releaseDate < playlist3[i].releaseDate) {
    newestTrack = playlist3[i];
  }
}

console.log(newestTrack);

const playlist4 = getPlaylist();

let cheapestThan5Tracks = [];

for (let i = 0; i < playlist4.length; i++) {
  if (playlist4[i].price < 5) {
    cheapestThan5Tracks.push(playlist4[i]);
  }
}

console.log(cheapestThan5Tracks);

const playlist5 = getPlaylist();

let TracksThatStartC = [];

for (let i = 0; i < playlist5.length; i++) {
  if (playlist5[i].name.startsWith("C")) {
    TracksThatStartC.push(playlist5[i]);
  }
}

console.log(TracksThatStartC);

const playlist6 = getPlaylist();

let releaseTracks = [];

for (let i = 0; i < playlist6.length; i++) {
  if (playlist6[i].releaseDate > 2015 && playlist6[i].price < 6) {
    releaseTracks.push(playlist6[i]);
  }
}

console.log(releaseTracks);

const playlist7 = getPlaylist();

let releaseTracks2 = [];

for (let i = 0; i < playlist7.length; i++) {
  if (playlist7[i].releaseDate >= 2020 || playlist7[i].price <= 3) {
    cheapestTracks.push(playlist7[i]);
  }
}

console.log(cheapestTracks);
