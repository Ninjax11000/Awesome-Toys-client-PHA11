import React, { useEffect, useState } from 'react';
import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";


const images = [
  {
    original: "https://i.ibb.co/bHHV7YM/Buzz1.jpg",
    thumbnail: "https://i.ibb.co/bHHV7YM/Buzz1.jpg",
  },
  {
    original: "https://i.ibb.co/QkSYMXD/Spiderman.jpg",
    thumbnail: "https://i.ibb.co/QkSYMXD/Spiderman.jpg",
  },
  {
    original: "https://i.ibb.co/mvcb59C/Optimus.jpg",
    thumbnail: "https://i.ibb.co/mvcb59C/Optimus.jpg",
  },
  {
    original: "https://i.ibb.co/r2fgFqx/Bear1.jpg",
    thumbnail: "https://i.ibb.co/r2fgFqx/Bear1.jpg",
  },
  {
    original: "https://i.ibb.co/dMn2byL/Captain1.jpg",
    thumbnail: "https://i.ibb.co/dMn2byL/Captain1.jpg",
  },
  {
    original: "https://i.ibb.co/QCSJp3C/hauler.jpg",
    thumbnail: "https://i.ibb.co/QCSJp3C/hauler.jpg",
  },
];

const Gallery = () => {
   
   
    return (
        <div  className='bg-yellow-500 border-2 border-slate-500 rounded-md py-3'>
            
            <ImageGallery items={images} slideOnThumbnailOver/>
        </div>
    );
};

export default Gallery;