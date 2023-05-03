import { useState } from "react";

type TrackType = {
  id: number;
  title: string;
};

export const TrackManipulation = (props: any) => {
  const [tracks, setTracks] = useState<TrackType[]>([
    { id: 1, title: "Track" },
    { id: 2, title: "Track" },
  ]);

  return (
    <div>
      <b>Add Track</b>
      <button
        onClick={() => {
          const tracksWithNewTrack = [
            ...tracks,
            { id: Number(new Date()), title: "New Track" },
          ];

          setTracks(tracksWithNewTrack);
        }}
      >
        +
      </button>
      <ul>
        {tracks.map((track) => (
          <li>
            <b>{track.title}</b>
            <button
              onClick={() => {
                const tracksWithoutDeletedTrack: TrackType[] = tracks.filter(
                  (t) => t.id !== track.id
                );
                setTracks(tracksWithoutDeletedTrack);
              }}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
