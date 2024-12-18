import React, { useState, useEffect, useRef } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Model } from "./3DModel";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useProgress, Html, ScrollControls } from "@react-three/drei";
import './SkillPage.css';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(1)}% loaded</Html>;
}

export function SkillPage() {
  useGSAP(() => {
    gsap.to("#curveWrapper", {
      height: '0px',
      margin: '0px',
      scrollTrigger: {
        trigger: "#curveWrapper",
        start: "top 70%",
        end: "top 40%",
        scrub: 2,
        // markers: true,
      },
    });
  })
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#page3',
        pin: true,
        start: 'top top', // Ensure it triggers after the AboutPage completes
        end: 'top -30%', // Adjust for the desired length of animation
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
    tl.fromTo(
      '#text1',
      {
        x: '0vw',
      },
      {
        x: '-=13vw',
        y: '-=1vh'
      },
      'anim'
    )
    tl.fromTo(
      '#text2',
      {
        x: '0vw',
      },
      {
        x: '+=15vw',
        y: '-=5vh'
      },
      'anim'
    )
    tl.fromTo(
      '#skillset',
      {
        width: '20%',
        height: '20%',
        opacity:'0'
      },
      {
        width: '100%',
        height: '90%',
        y: '-=3vh',
        opacity:'1'
      },
      'anim'
    ),
    tl.fromTo(
      '#skillTag',
      {
        opacity:'1'
      },
      {
        y:'-10vh',
        opacity:'0'
      },
      'anim'
    )
  });

  return (
    <Box id="page3" data-scroll-section sx={{ height: '100vh', width: '100vw', backgroundColor: 'white' }}>
      <Box id="curveWrapper" sx={{ position: 'relative', overflow: 'hidden', width: '100%', height: '15%', backgroundColor: 'black' }}>
        <Box id="curve" sx={{ position: 'absolute', left: '-50%', top: '0', width: '200%', height: '150vh', borderRadius: '50%', backgroundColor: 'white' }}>
        </Box>
      </Box>
      <Box sx={{position:'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100vw' }}>
        {/* <Box sx={{position:'absoulte', top:0, left:0}}>
                     <Typography sx={{fontWeight:'800', fontSize:'5vw'}}>MERN</Typography>
               </Box> */}
        <Box id="text1" sx={{ fontFamily: 'sans-serif', position: 'relative', left: '-10vw', overflow: 'hidden' }}>
          <Typography sx={{ whiteSpace: "nowrap", fontWeight: '800', fontSize: '5vw' }}>FULL STACK MERN</Typography>
        </Box>
        <Box id="text2" sx={{ position: 'relative', left: '+10vw', overflow: 'hidden' }}>
          <Typography sx={{ whiteSpace: "nowrap", fontWeight: '800', fontSize: '5vw' }}>WEB DEVELOPER</Typography>
        </Box>
        <Box id="skillset" sx={{ display: 'flex', position: 'relative', height: '20%', width: '20%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', width: '100%', height: '80%' }}>
            <Box sx={{ color: 'black', fontWeight: '800', width: '100%', height: '150px', display: 'flex', alignItems: 'center' }}>
              <Divider
                sx={{
                  position: 'relative',
                  width: '20%', // Increase the width for better visibility
                  borderColor: 'orange',
                  borderWidth: '2px', // Ensure the Divider itself is visible
                }}
              />
              <Box sx={{  height: '90%', width: '80%', display: 'flex', alignItems: 'center' }}>
                <Typography variant="span" sx={{fontWeight:'1000', fontSize:'2rem'}}>Web : &nbsp;</Typography>
                <Typography variant="span" sx={{fontWeight:'100', fontSize:'1.3rem'}}> HTML, CSS, Javascript, React.js, Node.js, GSAP</Typography>    
              </Box>
            </Box>
            <Box sx={{color: 'black', fontWeight: '800', width: '100%', height: '150px', display: 'flex', alignItems: 'center' }}>
              <Divider
                sx={{
                  position: 'relative',
                  width: '40%', // Increase the width for better visibility
                  borderColor: 'orange',
                  borderWidth: '2px', // Ensure the Divider itself is visible
                }}
              />
              <Box sx={{ height: '90%', width: '60%', display: 'flex', alignItems: 'center' }}>
                <Typography variant="span" sx={{ fontWeight: '1000',fontSize:'2rem' }}>Databases: &nbsp; </Typography>
                <Typography variant="span" sx={{ fontWeight: '100',fontSize:'1.3rem' }}> MongoDB, MySQL</Typography>   
              </Box>
             </Box>
            <Box sx={{ color: 'black', fontWeight: '800', width: '100%', height: '150px', display: 'flex', alignItems: 'center' }}>
              <Divider
                sx={{
                  position: 'relative',
                  width: '20%', // Increase the width for better visibility
                  borderColor: 'orange',
                  borderWidth: '2px', // Ensure the Divider itself is visible
                }}
              />
              <Box sx={{ height: '90%', width: '80%', display: 'flex', alignItems: 'center' }}>
                <Typography variant="span" sx={{ fontWeight: '1000',fontSize:'2rem' }}>Frameworks </Typography>
                <Typography variant="span" sx={{ fontWeight: '100',fontSize:'1.3rem' }}>: Express.js, Material-UI, Bootstrap</Typography>              </Box>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', width: '100%', height: '100%' }}>
            <Box sx={{color: 'black', fontWeight: '800', width: '100%', height: '150px',justifyContent:'flex-end', display: 'flex', alignItems: 'center' }}>
              <Box sx={{ height: '90%', width: '80%', display: 'flex', alignItems: 'center', justifyContent:'flex-end' }}>
                <Typography variant="span" sx={{ fontWeight: '1000',fontSize:'2rem' }}>Programming : &nbsp; </Typography>
                <Typography variant="span" sx={{ fontWeight: '100',fontSize:'1.3rem' }}>Core Java, JavaScript</Typography>      
              </Box>
              <Divider
                sx={{
                  position: 'relative',
                  width: '20%', // Increase the width for better visibility
                  borderColor: 'orange',
                  borderWidth: '2px', // Ensure the Divider itself is visible
                }}
              />
            </Box>
            <Box sx={{ color: 'black', fontWeight: '800', width: '100%', height: '150px', display: 'flex', alignItems: 'center',justifyContent:'flex-end' }}>
              <Box sx={{ height: '90%', width: '70%', display: 'flex', alignItems: 'center',justifyContent:'flex-end' }}>
                <Typography variant="span" sx={{ fontWeight: '1000',fontSize:'2rem' }}> Tools: &nbsp; </Typography>
                <Typography variant="span" sx={{ fontWeight: '100',fontSize:'1.3rem' }}>VS Code, Git, GitHub Codespaces</Typography>       
              </Box>
              <Divider
                sx={{
                  position: 'relative',
                  width: '30%', // Increase the width for better visibility
                  borderColor: 'orange',
                  borderWidth: '2px', // Ensure the Divider itself is visible
                }}
              />
            </Box>
            <Box sx={{ color: 'black', fontWeight: '800', width: '100%', height: '150px', display: 'flex', alignItems: 'center', justifyContent:'flex-end' }}>
              <Box sx={{ height: '90%', width: '80%', display: 'flex', alignItems: 'center', justifyContent:'flex-end' }}>
                <Typography variant="span" sx={{ fontWeight: '1000',fontSize:'2rem' }}>Additional : &nbsp; </Typography>
                <Typography variant="span" sx={{ fontWeight: '100',fontSize:'1.3rem' }}>DSA, SQL, DBMS, OOPS</Typography>  
              </Box>
              <Divider
                sx={{
                  position: 'relative',
                  width: '20%', // Increase the width for better visibility
                  borderColor: 'orange',
                  borderWidth: '2px', // Ensure the Divider itself is visible
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box id="skillTag" sx={{position:'absolute',top:'70%', left:'45%' }}>
            <Typography variant="h3">
                   Skills
            </Typography>
          </Box>
      </Box>
    </Box>
  );
}

{/* <Box>
            hello Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Ea, ducimus sequi. Exercitationem ipsum quae culpa accusantium 
            libero asperiores voluptates. Obcaecati?
         </Box> */}