import React, { useState } from 'react'
import './Image.css'

const ImageGallery = () => {

    const [images, setImages] = useState([
        "https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg",
        "https://media.istockphoto.com/id/873873202/photo/close-up-finger-pointing-on-stock-exchange-chart.jpg?s=612x612&w=0&k=20&c=ZqTyYIJA7I4Vv6bm1y0fFdCjqQm8vcntuKeb1Ie-iGA=",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcZgzHS5HS02nxVXYM-ZV7LxuHqbUNdCj8A&s",
      ]);
      const [inputValue, setInputValue] = useState("");
    
      const addImage = () => {
        if (inputValue.trim() !== "") {
          setImages([...images, inputValue]);
          setInputValue("");
        }
      };
    
      const removeImage = (index) => {
        setImages(images.filter((_, i) => i !== index));
      };

  return (
    <div className="gallery-container">
      <h2>Image Gallery</h2>
      
      
      <div className="input-container">
        <input
          type="text"
          placeholder="Enter image URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={addImage}>Add Image</button>
      </div>

      
      <div className="image-grid">
        {images.map((src, index) => (
          <img key={index} src={src} alt={`img-${index}`} onClick={() => removeImage(index)} />
        ))}
      </div>
    </div>
  )
}

export default ImageGallery
