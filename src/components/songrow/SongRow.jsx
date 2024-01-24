
import React from 'react'
import { useRef, useState } from 'react'
import track1 from './songs/Suncrown - Legend of the Forgotten Centuries.mp3'
import track2 from './songs/ytmp3free.cc_craig-david-walking-away-official-video-youtubemp3free.org.mp3'
import track3 from './songs/ytmp3free.cc_cynthia-erivo-stand-up-lyrics-youtubemp3free.org.mp3'
import track4 from './songs/ytmp3free.cc_imany-dont-be-so-shy-filatov-karas-remix-official-music-video-youtubemp3free.org.mp3'
import track5 from './songs/ytmp3free.cc_miley-cyrus-flowers-official-video-youtubemp3free.org.mp3'
import track6 from './songs/ytmp3free.cc_outlandish-callin-u-official-video-youtubemp3free.org (1).mp3'
import style from './songrow.module.css'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from '@mui/icons-material/Check';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ReplyIcon from '@mui/icons-material/Reply';

export default function SongRow() {

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
    };
  
    const songNames = [

      {id:1, songName: 'Suncrown'},
      {id:2, songName: 'Walking'},
      {id:3, songName: 'Cynthia-erivo'},
      {id:4, songName: 'Imany-dont'},
      {id:5, songName: 'Miley-cyrus'},
      {id:6, songName: 'Outlandish'}
    ]

    const artistName = [

      {id:1, artistName: 'Legend'},
      {id:2, artistName: 'Craig David'},
      {id:3, artistName: 'Twin Flames'},
      {id:4, artistName: 'Left to Hurt'},
      {id:5, artistName: 'Starlight'},
      {id:6, artistName: 'Callin'}
    ]

    const trackNumber = [

      {id:1, trackNumber: 1},
      {id:2, trackNumber: 2},
      {id:3, trackNumber: 3},
      {id:4, trackNumber: 4},
      {id:5, trackNumber: 5},
      {id:6, trackNumber: 6}
    ]

    const icons = [

      {id:1, favorit:<FavoriteIcon className={style.favorit}/>,check:<CheckIcon className={style.check}/>,replay:<ReplyIcon className={style.replay}/>,arrow:<ArrowDropDownIcon className={style.keyboardarr}/>},
      {id:2, favorit:<FavoriteIcon className={style.favorit}/>,check:<CheckIcon/>,replay:<ReplyIcon/>,arrow:<ArrowDropDownIcon className={style.keyboardarr}/>},
      {id:3, favorit:<FavoriteIcon className={style.favorit}/>,check:<CheckIcon/>,replay:<ReplyIcon/>,arrow:<ArrowDropDownIcon className={style.keyboardarr}/>},
      {id:4, favorit:<FavoriteIcon className={style.favorit}/>,check:<CheckIcon/>,replay:<ReplyIcon/>,arrow:<ArrowDropDownIcon className={style.keyboardarr}/>},
      {id:5, favorit:<FavoriteIcon className={style.favorit}/>,check:<CheckIcon/>,replay:<ReplyIcon/>,arrow:<ArrowDropDownIcon className={style.keyboardarr}/>},
      {id:6, favorit:<FavoriteIcon className={style.favorit}/>,check:<CheckIcon/>,replay:<ReplyIcon/>,arrow:<ArrowDropDownIcon className={style.keyboardarr}/>}
    ]
    
  return (

    // SongRow component

    <div className={style.songRowContainer}>
        <div className={style.songRowContent}>
          <div className={style.playList}>
            <div className={style.songRowsBlock}>
            {trackList.map((track) => (
              <div key={track.id} className={style.songRows}>
                <audio ref={audioRefs.current[track.id]} src={track.src}></audio>
                <button onClick={() => play(track.id)}>
                  {track.isPlaying ? (
                    <PauseIcon className={style.pause} />
                  ) : (
                    <PlayArrowIcon className={style.play} />
                  )}
                </button>
                  <div className={style.songName}>{songNames.find((name) => name.id === track.id)?.songName}</div>
                  <div className={style.artistName}>{artistName.find((name) => name.id === track.id)?.artistName}</div>
                  <div className={style.trackNumber}>{trackNumber.find((name) => name.id === track.id)?.trackNumber}</div>
                  <div className={style.icons}>{icons.find((name) => name.id === track.id)?.favorit}</div>
                  <div className={style.icons}>{icons.find((name) => name.id === track.id)?.check}</div>
                  <div className={style.icons}>{icons.find((name) => name.id === track.id)?.replay}</div>
                  <div className={style.icons}>{icons.find((name) => name.id === track.id)?.arrow}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
