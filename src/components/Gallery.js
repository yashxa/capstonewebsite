import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('/api/gallery')
      .then(response => setImages(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="gallery">
      <h2>Gallery</h2>
      <div className="image-grid">
        {images.map((img, index) => (
          <img key={index} src={img.url} alt={`Robot ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
