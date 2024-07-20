import { useGSAP } from '@gsap/react'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { animateWithGsap } from '../utils/animations'
import { explore1Img, explore2Img, exploreVideo } from '../utils'

gsap.registerPlugin(ScrollTrigger)

const Features = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    useGSAP(() => {
        const section = sectionRef.current;

        gsap.to('#exploreVideo', {
            scrollTrigger: {
                trigger: '#exploreVideo',
                toggleActions: 'play pause reverse restart',
                start: '-10 bottom'
            },
            onComplete: () => {
                videoRef.current.play();
            }
        });

        animateWithGsap('#features_title', { y: 0, opacity: 1 }, { trigger: section, start: 'top 80%' });
        
        animateWithGsap('.g_grow', 
            { scale: 1, opacity: 1, ease: 'power1' },
            { trigger: section, start: 'top 60%', end: 'bottom 40%', scrub: 2 }
        );
        
        animateWithGsap('.feature-text',
            { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 },
            { trigger: '.feature-text-container', start: 'top 80%' }
        );
    }, []);

    return (
        <section ref={sectionRef} className='h-full common-padding bg-zinc relative overflow-hidden'>
            <div className='screen-max-width'>
                <div className='mb-12 w-full'>
                    <h1 id='features_title' className='section-heading'>Explore the full story.</h1>
                </div>
                <div className='flex flex-col justify-center items-center overflow-hidden'>
                    <div className='mt-32 mb-24 pl-24'>
                        <h2 className='text-5xl lg:text-7xl'>iPhone.</h2>
                        <h2 className='text-5xl lg:text-7xl'>Forged in titanium</h2>
                    </div>

                    <div className='flex-center flex-col sm:px-10'>
                        <div className='relative h-[50vh] w-full flex items-center'>
                            <video playsInline id='exploreVideo' className='h-full w-full object-cover object-center' preload='none' muted autoPlay ref={videoRef}>
                                <source src={exploreVideo} type='video/mp4'/>
                            </video>
                        </div>
                        <div className='flex flex-col w-full relative'>
                            <div className='feature-video-container'>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore1Img} alt='titanium' className='feature-video g_grow'/>
                                </div>
                                <div className='overflow-hidden flex-1 h-[50vh]'>
                                    <img src={explore2Img} alt='titanium' className='feature-video g_grow'/>
                                </div>
                            </div>
                        </div>
                        <div className='feature-text-container'>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text'>
                                    iPhone 16 Pro is {' '}
                                    <span className='text-white'>
                                        the first iPhone to feature an aerospace-grade titanium design
                                    </span>
                                    {' '}using the same alloy that spacecrafts use for missions to Mars.
                                </p>
                            </div>
                            <div className='flex-1 flex-center'>
                                <p className='feature-text'>
                                   Titanium has one of the best strength to weight ratios of any metal, making these our {' '}
                                    <span className='text-white'>
                                        lightest pro models ever.
                                    </span>
                                   {' '} You'll notice the difference the moment you pick one up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Features