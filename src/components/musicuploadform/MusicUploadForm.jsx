import React, { useState } from 'react'
import style from './upload.module.css'

export default function MusicUploadForm({ onUpload }) {
    const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log(`Uploading file: ${selectedFile.name}`);

    
      setUploading(true);
      setTimeout(() => {
        console.log('Upload complete');
        setUploading(false);
        onUpload(selectedFile);
      }, 2000);
    }
  };

  return (
    
    // Music upload form component

    <div className={style.uploadContainer}>
        <input type="file" accept=".mp3,.wav" onChange={handleFileChange} />
        {selectedFile && <p>Selected File: {selectedFile.name}</p>}
        <button onClick={handleUpload} disabled={!selectedFile || uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
        </button>
    </div>
  )
}
