import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import './ProjectPage.css'
import { useGSAP } from '@gsap/react'
const ProjectItem = ({ project,url, onMouseEnter, onMouseLeave }) => {
  return (
    <ListItem
      sx={{
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'nowrap',
        borderTop: '1px solid rgb(206, 205, 205)',
        height: '150px',
        fontSize: '4.5rem',
        color: 'transparent',
        padding: 0,
        transition: 'all .5s ease-in',
        '&:hover': {
          cursor: 'pointer',
          color: 'rgb(206, 205, 205)',
        },
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <a
        href={url}
        target='_blank'
        className="projectListItems"
        style={{textDecoration:'none', fontWeight: '800', fontFamily: 'sans-serif' , color:'inherit'}}
      >
        {project}
      </a>
    </ListItem>
  );
};

export const ProjectPage = ({ cursorRef }) => {
  const handleMouseEnter = (url) => {
    cursorRef.current.style.borderRadius='0%'
    cursorRef.current.style.transition = 'background-image,width,height  .3s ease-in-out';
    cursorRef.current.style.backgroundImage = `url(${url})`;
    cursorRef.current.style.backgroundSize = 'contain'; // Ensure the image fits the container
    cursorRef.current.style.backgroundRepeat = 'no-repeat'; // Prevent repeating the image
    cursorRef.current.style.backgroundPosition = 'center'; // Center the image
    cursorRef.current.style.width = '30vw';
    cursorRef.current.style.height = '40vh';
    cursorRef.current.style.zIndex='5000'
  };

  const handleMouseLeave = () => {
    cursorRef.current.style.transition = 'background-image,width,height .5s ease-in-out';
    cursorRef.current.style.backgroundImage = 'none';
    cursorRef.current.style.backgroundPosition = 'center';
    cursorRef.current.style.width = '20px';
    cursorRef.current.style.height = '20px';
    cursorRef.current.style.borderRadius='50%'
    cursorRef.current.style.transition = 'none';
  };

  return (
    <Box
    data-scroll-section
      sx={{
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position:'relative',
        zIndex:5
      }}
    >
      <List
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <ProjectItem
          project="Social Media Project"
          url='https://social-mern-project-frontend.onrender.com/sign-up'
          onMouseEnter={() =>
            handleMouseEnter(
              'https://res.cloudinary.com/anayak/image/upload/v1740574128/sh0vxhityki2rwlizzog.png'
            )
          }
          onMouseLeave={handleMouseLeave}
        />
        <ProjectItem
          url='https://digital-gram-panchayat-services-frontend.vercel.app/user'
          project="Digital Gram Panchayat"
          onMouseEnter={() =>
            handleMouseEnter(
              'https://res.cloudinary.com/anayak/image/upload/v1740574129/p3znxebi8ca6kjzctjik.png'
            )
          }
          onMouseLeave={handleMouseLeave}
        />
        <ProjectItem
          url='https://employee-review-system-p4tr.onrender.com/'
          project="Employee Review System"
          onMouseEnter={() =>
            handleMouseEnter(
              'https://res.cloudinary.com/anayak/image/upload/v1740574128/ykfohe9xkjjfhae23jqo.png'
            )
          }
          onMouseLeave={handleMouseLeave}
        />
        <ProjectItem
          url='https://school-payment-and-dashboard-application-three.vercel.app/'
          project="School Payment Management"
          onMouseEnter={() =>
            handleMouseEnter(
              'https://res.cloudinary.com/anayak/image/upload/v1740574128/f1j39lt52cww5cg9erc8.png'
            )
          }
          onMouseLeave={handleMouseLeave}
        />
      </List>
    </Box>
  );
};
