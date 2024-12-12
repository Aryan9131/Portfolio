//font-family Recklessneue,sans-serif

import { useGSAP } from '@gsap/react';
import { Box, Typography } from '@mui/material';
import React, { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const IntroPage = ({cursorRef}) => {
  const imageRef = useRef();
  const pageRef = useRef();
  const introText = useRef();
  useGSAP(() => {
    gsap.fromTo(
      '.landingText',
      {
        y: '100px',
        rotate: 5, // Start with a 5-degree tilt
        opacity: 0, // Start fully transparent
      },
      {
        rotate: 0,
        y: '0',
        opacity: 1,
        ease: 'power2.inOut',
        stagger: 0.1, // Add a 0.2-second delay between each element's animation
      }
    );
  });


  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top top", // Animation starts when page top hits viewport top
        end: "200%", // Animation ends at 200% scroll height
        scrub: 1, // Smooth scrolling animation
        pin: true,
        // markers: true
      }
    })
    
    // ScrollTrigger for image animation
    tl.to(imageRef.current, {
      x: "45vw", // Move to the right half of the viewport
      scale: 0.6,
      onUpdate: () => {
        const progress = tl.scrollTrigger.progress.toFixed(2); // Progress is a value between 0 and 1
        const size = 100 - progress * 70; // Dynamically calculate background size
        imageRef.current.style.width = `${size}%`
        const radius = progress * 20;
        imageRef.current.style.borderRadius = `${radius}px`
      },
    })
    tl.fromTo(
      introText.current,
      {
        y: '30vh',
      },
      {
        y: '-15vh',
      }
    )
  }, []);
  const handleMouseEnter=()=>{
    cursorRef.current.style.transition='padding 0.3s ease-in-out'
    cursorRef.current.style.padding='35px';
    cursorRef.current.style.backgroundColor='transparent';
    cursorRef.current.style.border='1px solid whitesmoke'
  }
  const handleMouseLeave=()=>{
    cursorRef.current.style.transition='padding 0.3s ease-in-out'
    cursorRef.current.style.padding='0px'
    cursorRef.current.style.backgroundColor='whitesmoke';
    cursorRef.current.style.border='0'
  }

  return (
    <Box
      ref={pageRef}
      id="page1"
      sx={{
        width: "100vw",
        overflow: "hidden",
        height: "100vh",
        display: "flex", // Use flexbox to align items side-by-side
        position: "relative",
        backgroundColor:'#020202'
      }}
    >
      {/* Left Container */}
      <Box
        ref={introText}
        sx={{
          width: { xs: "100%", md: "57%" }, // Reserve 40% for text on medium or larger screens
          height: "114vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          zIndex: '2',
          paddingLeft: '20px',
        }}
      >
        <Box
          sx={{ marginBottom: '20px', lineHeight: '1', fontSize: "5.4rem", color: "#d9d7d7", display: "flex", flexDirection: 'column', fontWeight: '100', fontFamily: "'RecklessNeue', sans-serif" }}
        >
          <span className='landingText'> Hey there!👋 </span>
          <span className='landingText'>I'm Aryan, a</span>
          <span className='landingText'>passionate Full-Stack </span>
          <span className='landingText'>Web Developer</span>
        </Box>
        <Typography variant='p' sx={{ lineHeight: '1.2', fontSize: '1.5rem', fontWeight: '300', color: '#d6d6d6', fontFamily: "'RecklessNeue', sans-serif" }} >
          I specialize in crafting responsive, dynamic,
          and animated websites that bring ideas to life.
          Whether it's building seamless user experiences or robust backend solutions,
          I’m all about delivering impactful digital creations.
          <br />
          Welcome to my world—let’s create something amazing together!
        </Typography>
        <Box sx={{width:'80%', display: "flex", alignItems: 'center',justifyContent:'space-between', position: 'absolute', bottom: '8%' }}>
          <Box sx={{ display: "flex", alignItems: 'center'}}>
            <Box sx={{ fontWeight: 'bold', fontSize: '20px', color: 'purple', backgroundColor: 'yellow', width: '30px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>gt</span>
            </Box>
            <Box sx={{ fontWeight: 'bold', fontSize: '20px', color: 'yellow', backgroundColor: 'orange', width: '30px', height: '40px', margin: '0px 20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>in</span>
            </Box>
            <Box sx={{ fontWeight: 'bold', fontSize: '20px', color: 'orange', backgroundColor: 'purple', width: '30px', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>cn</span>
            </Box>
          </Box>
          <Box
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}
          sx={{
                    border:'1px solid purple', padding:'10px 20px', borderRadius:'5px',
                    transition:'all .3s ease-in-out',
                    color:'white',
                    '&:hover':{
                        backgroundColor:'purple',
                        cursor:'pointer'
                    }    
                  }}>
             <span>Download</span>
          </Box>
        </Box>
      </Box>

      {/* Right Container with Image */}
      <Box
        ref={imageRef}
        id="rightContainer"
        sx={{
          width: '100vw', // Reserve 60% for image on medium or larger screens
          height: "100vh",
          backgroundImage: `url('https://cdn.prod.website-files.com/6405fcf125150a174dce6e85/64079deb61285e86c2e9825b_matteo-fabbiani-design.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: 'absolute',
          zIndex: '1',
          backgroundRepeat: 'no-repeat',
        }}
      ></Box>
    </Box>

  );
};
