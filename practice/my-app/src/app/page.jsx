'use client'
import Image from "next/image";
import image1 from './image.png'
import { useRef } from "react";
export default function Home() {
  // let imageLoader = ({src , width , quality}) => {
  //   return `https://images.pexels.com/photos/26690662/pexels-photo-26690662/free-photo-of-interior-of-an-ice-cave.jpeg?auto=compress&cs=tinysrgb&w=${width}`
  // }
  const loaderRef = useRef(null);

  const handleImageLoad = () => {
    if (loaderRef.current) {
      loaderRef.current.style.display = 'none';
    }
  };
  return (
    <div className="main container">
      <div ref={loaderRef} className="loader"></div>
      <Image 
        src={image1}  // define image path 
        alt='no image'
        width={500}
        height={300}
        loading="lazy"  // define loading behaviour
        onLoad={handleImageLoad}
        unoptimized
        placeholder="blur"
        // blurDataURL="https://media1.giphy.com/media/c76IJLufpNwSULPk77/200w.gif?cid=6c09b952jpc4egveezimjnrx187kkgei54i54cn1cd6rb75p&ep=v1_gifs_trending&rid=200w.gif&ct=g"
      />
      <div className="header">
        how i do that
      </div>
    </div>
  );
}
