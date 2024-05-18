import React from 'react';
import Gallery from './Gallery';
import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import img3 from "./assets/img3.jpg";

export default function App() {

const imgs = [img1, img2, img3, img1, img2 ];

  return (
    <Gallery imgs = {imgs}/>
  )
}
