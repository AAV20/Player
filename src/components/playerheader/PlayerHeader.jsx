
import React, { useState } from 'react';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import SearchIcon from '@mui/icons-material/Search';
import PlayAllButton from '../playallbtn/PlayAllButton';
import AddAllButton from '../addallbtn/AddAllButton';
import style from './playerheader.module.css';

export default function PlayerHeader() {
  const [filterText, setFilterText] = useState('');

  const songNames = [
    { id: 1, songName: 'Suncrown' },
    { id: 2, songName: 'Walking' },
    { id: 3, songName: 'Cynthia-erivo' },
    { id: 4, songName: 'Imany-dont' },
    { id: 5, songName: 'Miley-cyrus' },
    { id: 6, songName: 'Outlandish' }
  ];

  const filteredSongNames = songNames.filter((song) =>
    song.songName.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className={style.playerHeaderContainer}>
      <div className={style.playerHeaderContent}>
        <div className={style.playAllBtn}>
          <PlayAllButton />
          <AddAllButton />
        </div>
        <div className={style.trackNumBtn}>
          <button>
            <ImportExportIcon /> Track Nu...
          </button>
          <div className={style.filterBlock}>
          <SearchIcon className={style.searchIcon} />
          <input
            type="text"
            placeholder="Filter"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
           <div>
            {filterText && (
                <div className={style.filterParentBlock}>
                  {filteredSongNames.map((song) => (
                    <div className={style.filterList} key={song.id}>{song.songName}</div>
                  ))}
                </div>
              )}
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}