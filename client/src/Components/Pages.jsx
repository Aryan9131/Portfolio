import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { IntroPage } from './IntroPage';
import { AboutPage } from './AboutPage';
import { SkillPage } from './SkillPage';
import { ProjectPage } from './ProjectPage';
import { Box, Typography } from '@mui/material';
import './Pages.css'
import { AdditionalSkillPage } from './AdditionalSkillPage';
import { ContactPage } from './ContactPage';
import { ToastContainer, toast } from 'react-toastify';

gsap.registerPlugin(ScrollTrigger);

export const Pages = () => {
  const cursorRef = useRef();
  const pagesRef = useRef();

  useEffect(() => {
    const colors = ['#020202', '#ffffff', '#000000', '#ffffff', '#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'];

    gsap.to('body', {
      scrollTrigger: {
        trigger: '#pages-container',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress * (colors.length - 1);
          const index = Math.floor(progress);
          const nextIndex = index + 1;
          const ratio = progress - index;
          const currentColor = gsap.utils.interpolate(colors[index], colors[nextIndex], ratio);

          document.body.style.backgroundColor = currentColor;
        },
      },
    });
  }, []);

  const handleMouseMove = (event) => {
    console.log(event)
    const { clientX, clientY } = event; // Use pageX and pageY instead of clientX and clientY
    if (cursorRef.current) {
      cursorRef.current.style.left = `${clientX-10}px`;
      cursorRef.current.style.top = `${clientY+5}px`;
    }
  };
  
  return (
    <>
      <Box id="toastContainer">
         <ToastContainer />
      </Box>
      <Box
        id="cursor"
        ref={cursorRef}
        sx={{
          position: 'fixed',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          backgroundColor: 'whitesmoke',
          pointerEvents: 'none',
          transform: 'translate(-50%, -50%)',
          // transition:'all linear 0.2s',
          mixBlendMode:'difference',
          zIndex: 1000,
        }}
      ></Box>
      <Box
        sx={{position:'relative', zIndex:5}}
        id="pages-container"
        ref={pagesRef}
        onMouseMove={handleMouseMove} // Attach the mousemove event handler here
      >
        <Typography
          sx={{
            backgroundColor: 'black',
            padding: '3px 5px',
            borderRadius: '5px',
            position: 'fixed',
            zIndex: 10,
            top: '80%',
            right: '0%',
            color: 'white',
            transform: "rotate(90deg)",
            transformOrigin: "center",
          }}
        >
          Aryan Nayak
        </Typography>
        <IntroPage cursorRef={cursorRef} />
        <AboutPage cursorRef={cursorRef}  />
        <SkillPage />
        <AdditionalSkillPage/>
        <ProjectPage cursorRef={cursorRef} />
        <ContactPage/>
      </Box>
    </>
  );
};
