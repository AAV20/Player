import React from 'react'
import AddIcon from '@mui/icons-material/Add';


export default function AddAllButton() {
  return (
    
      //  Add button component 

    <div>
         <button onClick={() => console.log('Add All clicked')}><AddIcon/> Add All</button>
    </div>
  )
}
