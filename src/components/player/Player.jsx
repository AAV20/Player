import style from './player.module.css'
import PlayerHeader from '../playerheader/PlayerHeader'
import SongList from '../songlist/SongList'
import MusicUploadForm from '../musicuploadform/MusicUploadForm'

export default function Player({songs}) {

  const handleUpload = (file) => {
    console.log('Handling file upload:', file);
  };

  return (

    // Player component

    <div className={style.playerContainer}>
        <PlayerHeader/>
        <SongList songs={songs}/>
        <MusicUploadForm onUpload={handleUpload}/>
    </div>
  )
}
