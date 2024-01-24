
import SongRow from '../songrow/SongRow'
import style from './songlist.module.css'


export default function SongList() {

  
  return (

    // SongList component

    <div className={style.songlistContainer}>
        <div className={style.songlistContent}>
          <div className={style.line}></div>
          <div className={style.songNameList}>
            <h2>Song Name</h2>
          </div>
          <div className={style.line}></div>
          <div className={style.songNameList}>
            <h2>Artist Name</h2>
            <div className={style.artistName}>
          </div>
          </div>
          <div className={style.line}></div>
          <div className={style.songNameList}>
            <h2>Track</h2>
          </div>
          <div className={style.line}></div>
        </div>
        <SongRow/>
    </div>
  )
}
