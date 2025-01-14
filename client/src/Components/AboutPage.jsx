import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

export const AboutPage = ({ cursorRef }) => {
  const handleMouseEnter = () => {
    cursorRef.current.style.transition = 'padding 0.3s ease-in-out';
    cursorRef.current.style.padding = '25px';
    cursorRef.current.style.backgroundColor = 'transparent';
    cursorRef.current.style.border = '1px solid whitesmoke';
  };

  const handleMouseLeave = () => {
    cursorRef.current.style.transition = 'padding 0.3s ease-in-out';
    cursorRef.current.style.padding = '0px';
    cursorRef.current.style.backgroundColor = 'whitesmoke';
    cursorRef.current.style.border = '0';
  };

  useEffect(() => {
    // Animation for About Text
    gsap.from("#aboutText", {
      x: '-30vw',
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#aboutText",
        start: "top 80%",
        end: "top 50%",
        scrub: true,
      },
    });

    // Animation for College Section
    gsap.from("#collegeData", {
      y: '10vh',
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#college",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      },
    });

    // Animation for Internships Section
    gsap.from("#internshipData", {
      y: '10vh',
      opacity: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: "#internships",
        start: "top 60%",
        end: "top 30%",
        scrub: 2,
      },
    });
  }, []);

  return (
    <Box id="page2" data-scroll-section sx={{ color: 'whitesmoke', width: '100vw', minHeight: '100vh', backgroundColor: 'black', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', backgroundColor: 'black', zIndex: 10 }}>
        <Typography id="aboutText" sx={{ paddingLeft: '20px', color: 'white', fontSize: '3vw', fontWeight: '800' }}>
          A bit about me
        </Typography>
      </Box>

      <Box id="college" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', minHeight: '80vh' }}>
        <Box id="collegeHeading">
          <Typography variant="h2">Qualification</Typography>
        </Box>
        <Box id="collegeData" sx={{ width: '60%' }}>
        <Typography sx={{ fontSize: '1.2rem', width: '70%'}}>
             I completed my higher secondary education at Shri
               Aurobindo English Higher Secondary School, Panna, 
               where I developed a strong foundation in science and mathematics.
               Following my passion for technology and problem-solving, 
               I prepared for the prestigious JEE Mains examination. 
          </Typography>
          <br/>
          <br/>
          <Typography sx={{ fontSize: '1.2rem', width: '70%'}}>
              My dedication and perseverance earned me a seat in Lakshmi Narain College
               of Technology (LNCT), Bhopal, one of the top engineering institutions
               in Madhya Pradesh.
                <br />
               Here, I pursued a Bachelor's degree in Computer Science
               and Engineering, honing my skills in software development, algorithms,
               and modern technological advancements. 
               <br />
               This journey not only equipped
               me with technical expertise but also instilled a mindset of innovation
               and continuous learning.
          </Typography>

        </Box>
      </Box>

      <Box id="internships" sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-around', minHeight: '80vh' }}>
        <Box id="internshipHeading">
          <Typography variant="h2">Internships</Typography>
        </Box>
        <Box id="internshipData" sx={{ width: '60%' }}>
        <Typography sx={{ fontSize: '1.2rem', width: '70%' }}>
              During my academic journey, I had the privilege of participating in the Persistent
              Martian Internship Program, where I gained hands-on experience with foundational
              concepts like Operating Systems, Core Java, DBMS, and Data Structures. 
              <br />
              This internship not only deepened my technical understanding but also enhanced 
              my problem-solving and programming skills, culminating in a recognized certification. 
              <br /><br />
              Currently, I am advancing my expertise through a Full Stack Web Development Internship
              with Unified Mentor. This role allows me to build dynamic, responsive web applications 
              while mastering technologies across the frontend and backend spectrum, equipping me to
              create scalable and user-focused solutions.
          </Typography>
          <Box 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
              <Button><a href="https://drive.google.com/file/d/16F8t5QF-XfAhnH2LqE2SDUydMq-M_AVS/view?usp=sharing" target="_blank" style={{textDecoration:'none', color:'blue'}}>Certificate</a></Button>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};
