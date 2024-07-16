import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {heroVideo, smallHeroVideo} from '../utils';

const Hero = () => {
  const mobileScreenSize = 760;
  const[videoSrc, setVideoSrc] = useState(window.innerWidth < mobileScreenSize ? smallHeroVideo : heroVideo)
  
  const handleVideoSrcSet  = () => {
    if (window.innerWidth < mobileScreenSize){
        setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    return () =>  {
      window.removeEventListener('resize', handleVideoSrcSet);
    }
  })

  useGSAP (() => {
    gsap.to('#hero-title', {
      opacity: 1,
      duration: 2
    })
    gsap.to('#cta', {
      opacity: 1,
      y: -50,
      duration: 2
    })

  }, [])
  return (
    <section className='nav-height relative w-full bg-black'>
      <div className='flex-center h-5/6 w-full flex-col'>
        <p id='hero-title' className='hero-title'>Iphone 16 Pro</p>
        <div className='w-9/12 md:w-10/12'>
          <video className='pointer-events-none' autoPlay muted  key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id='cta' className='flex translate-y-20 flex-col items-center opacity-0'>
        <a id='highlights' href='#' className='btn'>Buy</a>
        <p className='text-xl font-normal'>From £33.29/mo or £799</p> 
      </div>
    </section>
  )
}

export default Hero