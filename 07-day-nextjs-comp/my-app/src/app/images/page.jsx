'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import image1 from '../assessts/image.png'

export default function page() {
  let [isLoading , setIsLoading] = useState(true)
  return (
    <div>
      {isLoading && <div className="loader">Loading...</div> }
      <Image
        src={image1}
        alt="Description of image"
        width={900}
        placeholder='blur'
        // blurDataURL='loading...'
        loading='lazy'
        // unoptimized
        onLoadingComplete={()=>{setIsLoading(false)}}
      />
    </div>
  )
}