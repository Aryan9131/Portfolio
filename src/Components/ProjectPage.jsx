import { Box, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import './ProjectPage.css'
import { useGSAP } from '@gsap/react'
const ProjectItem = ({ project, onMouseEnter, onMouseLeave }) => {
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
      <span
        className="projectListItems"
        style={{ fontWeight: '800', fontFamily: 'sans-serif' }}
      >
        {project}
      </span>
    </ListItem>
  );
};

export const ProjectPage = ({ cursorRef }) => {
  const handleMouseEnter = (url) => {
    cursorRef.current.style.borderRadius='0%'
    cursorRef.current.style.transition = 'background-image,width,height  .3s ease-in-out';
    cursorRef.current.style.backgroundImage = `url(${url})`;
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
          onMouseEnter={() =>
            handleMouseEnter(
              'https://images.unsplash.com/photo-1732482124606-697008dab09c?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            )
          }
          onMouseLeave={handleMouseLeave}
        />
        <ProjectItem
          project="Employee Review System"
          onMouseEnter={() =>
            handleMouseEnter(
              'https://plus.unsplash.com/premium_photo-1676587149248-6ff1abdcf10e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            )
          }
          onMouseLeave={handleMouseLeave}
        />
        <ProjectItem
          project="Issue Tracker Project"
          onMouseEnter={() =>
            handleMouseEnter(
              'https://plus.unsplash.com/premium_photo-1676587160191-59fc16bd8520?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            )
          }
          onMouseLeave={handleMouseLeave}
        />
        <ProjectItem
          project="Movie Catalog Project"
          onMouseEnter={() =>
            handleMouseEnter(
              'https://plus.unsplash.com/premium_photo-1677646867397-6b4fe631acc3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            )
          }
          onMouseLeave={handleMouseLeave}
        />
      </List>
    </Box>
  );
};
