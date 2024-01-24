import React, { useEffect, useRef, useState } from 'react'
import track1 from './playAlltrack/Suncrown - Legend of the Forgotten Centuries.mp3';
import track2 from './playAlltrack/ytmp3free.cc_craig-david-walking-away-official-video-youtubemp3free.org.mp3';
import track3 from './playAlltrack/ytmp3free.cc_cynthia-erivo-stand-up-lyrics-youtubemp3free.org.mp3';
import track4 from './playAlltrack/ytmp3free.cc_imany-dont-be-so-shy-filatov-karas-remix-official-music-video-youtubemp3free.org.mp3';
import track5 from './playAlltrack/ytmp3free.cc_miley-cyrus-flowers-official-video-youtubemp3free.org.mp3';
import track6 from './playAlltrack/ytmp3free.cc_outlandish-callin-u-official-video-youtubemp3free.org (1).mp3';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

export default function PlayAllButton() {
  
  const [trackList, setTrackList] = useState([
    { id: 1, src: track1, isPlaying: false },
    { id: 2, src: track2, isPlaying: false },
    { id: 3, src: track3, isPlaying: false },
    { id: 4, src: track4, isPlaying: false },
    { id: 5, src: track5, isPlaying: false },
    { id: 6, src: track6, isPlaying: false },
  ]);

  const audioRefs = useRef(
    trackList.reduce((acc, track) => {
      acc[track.id] = React.createRef();
      return acc;
    }, {})
  );

  const [currentTrackIndex, setCurrentTrackIndex] = useState(null);

  const play = (trackId) => {
    setTrackList((prevTrackList) =>
      prevTrackList.map((track) =>
        track.id === trackId
          ? { ...track, isPlaying: !track.isPlaying }
          : { ...track, isPlaying: false }
      )
    );

    const currentAudioRef = audioRefs.current[trackId];

    if (trackList.find((track) => track.isPlaying)) {
      currentAudioRef.current.pause();
    } else {
      currentAudioRef.current.play();
    }

    setCurrentTrackIndex(trackId);
  };

  const playAll = async () => {
    for (let i = 0; i < trackList.length; i++) {
      play(trackList[i].id);
      await new Promise((resolve) => {
        const currentAudioRef = audioRefs.current[trackList[i].id];
        currentAudioRef.current.addEventListener('ended', resolve, { once: true });
      });
    }
  };
  useEffect(() => {
    return () => {
      for (const audioRef of Object.values(audioRefs.current)) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, []);
  return (

    // Play All button component

    <div>
      <button onClick={playAll}><PlayArrowIcon/>Play All</button>
      <div>
        {trackList.map((track) => (
          <div key={track.id}>
            <audio ref={audioRefs.current[track.id]} src={track.src}></audio>
          </div>
        ))}
      </div>
    </div>
  )
}
