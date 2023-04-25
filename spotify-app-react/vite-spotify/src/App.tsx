import "./App.css";

type TrackType = {
  id: number;
  name: string;
  releaseDate: number;
  artist: string;
  price: number;
  addedToFavorite: boolean;
  mp3FileName: string;
};

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

export default function App() {

  return <div>APP</div>
}

