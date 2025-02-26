//font-family Recklessneue,sans-serif
import SendIcon from '@mui/icons-material/Send';
import './IntroPageStyle.css'
import { useGSAP } from '@gsap/react';
import { Box, Button, Divider, Typography } from '@mui/material';
import React, { useRef, useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const IntroPage = ({ cursorRef }) => {
  const imageRef = useRef();
  const pageRef = useRef();
  const introText = useRef();

  const handleMouseEnter = () => {
    cursorRef.current.style.transition = 'padding 0.3s ease-in-out'
    cursorRef.current.style.padding = '35px';
    cursorRef.current.style.backgroundColor = 'transparent';
    cursorRef.current.style.border = '1px solid whitesmoke'
  }
  const handleMouseLeave = () => {
    cursorRef.current.style.transition = 'padding 0.3s ease-in-out'
    cursorRef.current.style.padding = '0px'
    cursorRef.current.style.backgroundColor = 'whitesmoke';
    cursorRef.current.style.border = '0'
  }

  return (
    <Box
      data-scroll-section
      ref={pageRef}
      id="page1"
      sx={{
        width: "100vw",
        overflow: "hidden",
        height: "100vh",
        display: "flex", // Use flexbox to align items side-by-side
        position: "relative",
      }}
    >
      <Box
        id="leftContainer"
        sx={{ width: '55vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '10px' }}
      >
         <Box id="imgContainer" sx={{margin:'1px 40px', width:'150px', height:'150px', borderRadius:'50%' , backgroundColor:"#ffb109da",border:'1px solid blue'}}>
            <img src="https://res.cloudinary.com/anayak/image/upload/v1740570990/j0mf0olns73jnjxxhdjj.png" alt="profilePic"style={{width:'150px', height:'150px', borderRadius:'50%'}}  />
         </Box>
        <Box
          id="introText"
          sx={{
            color: "whitesmoke",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "10px 40px",
          }}
        >
          <h1 style={{ fontFamily:'anzo2',fontSize:'4.1vw', textTransform:'uppercase'}}>
            I'm <span style={{ fontFamily:'anzo2',fontSize:'4.1vw', textTransform:'uppercase'}}>Full Stack<sup style={{ border:'1px solid blue',borderRadius:'10px', padding:'1px 8px', fontFamily:'anzo1', fontSize:'25px', color:'purple'}}>MERN</sup></span>
          </h1>
           <h1 style={{lineHeight:'3.5vw', fontFamily:'anzo3',fontSize:'5vw',fontWeight:'1000', textTransform:'uppercase'}}>
              Developer !
          </h1>
          <Typography sx={{marginTop:'15px', lineHeight: "1.3", color: "whitesmoke" }}>
            I create responsive, dynamic, and engaging websites that bring ideas to life. From crafting seamless user
            experiences to building scalable backend systems, I focus on delivering high-quality digital solutions.
          </Typography>
          <Typography variant="h6" sx={{ maxWidth: "800px", lineHeight: "1.6", color: "#ccc", mt: 2 }}>
            Let's build something amazing together.
          </Typography>
        </Box>

        <Box id="profileIcons" sx={{ width: '45%', padding: '1px 20px', display: 'flex', justifyContent: 'space-evenly' }}>
          <a href="https://www.linkedin.com/in/aryan-nayak-558188335/" target='_blank'>in</a>
          <a href="https://github.com/Aryan9131" target='_blank'>gt</a>
          <a href="https://www.naukri.com/code360/profile/d8faa988-d0d5-4d1c-a2a7-20f1385db692" target='_blank'>cn</a>
          <a href="#page6"><SendIcon sx={{width:'12px', marginRight:'2px'}} /> Contact</a>
        </Box>
      </Box>
      <Box
        id="rightContainer"
        sx={{ width: '45vw', height: '100vh' }}
      >
        <video loop autoPlay playsInline muted type='video/mp4' style={{ width: '100%', height: '100%' }} src="/hero-video.mp4"></video>
      </Box>
    </Box>

  );
};
