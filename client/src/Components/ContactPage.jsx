import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import * as React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';
import { toast } from 'react-toastify';

gsap.registerPlugin(ScrollTrigger);

export const ContactPage = () => {
  const [name, setName] =React.useState("")
  const [email, setEmail] =React.useState("")
  const [subject, setSubject] =React.useState("")
  const [message, setMessage] =React.useState("")

  useGSAP(()=>{
     const tl=gsap.timeline({
      scrollTrigger:{
        trigger:'#page6',
        start:'top 60%',
        end:'top 20%',
        scrub:2
      }
     })
     tl.fromTo(
      '#title',
      {
        y:'-100%'
      },
      {
        y:'0%'
      }
     )
     tl.fromTo(
      '#left',
      {
        x:'-100%'
      },
      {
        x:'0%'
      }
     )
     tl.fromTo(
      '#right',
      {
        x:'200%'
      },
      {
        x:'0%'
      }
     )
  })
  const handleSubmit=async (e)=>{
     try {
      e.preventDefault();
      const obj={
        name:name,
        from:email,
        subject:subject,
        message:message
      }
     const sendResponse =await fetch('https://portfolio-aqjafnobr-aryan-nayaks-projects.vercel.app/api/mail',{
       method:'POST',
       headers :{
          'Content-Type' :'application/json'
       },
       body : JSON.stringify(obj)
     })
     console.log(obj);
     const sendData = await sendResponse.json();
     toast('Message Sent !')
     console.log("Message sent successfull : "+JSON.stringify(sendData))
     setName("");
     setEmail("");
     setSubject("");
     setMessage("");
     } catch (error) {
        console.log("Error while sending MEssage : "+JSON.stringify(error))
        toast('Error While Sending Message!')
     }

  }
  return (
    <Box id="page6" data-scroll-section sx={{ display: 'flex',flexDirection:'column', backgroundColor: "black", width: '100vw', height: '100vh' }}>
      <Box id="title" sx={{textAlign:'center'}}>
        <Typography sx={{fontSize:'2rem', fontWeight:'800', color:'whitesmoke'}}>Contact Me</Typography>
      </Box>
      <Box  sx={{ display: 'flex', width: '100vw', height: '95%' }}>
        <Box id="left" sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '60%', height: '100%' }}>
          <Box
            component="form"
            sx={{
              backgroundColor: 'whitesmoke', display: 'flex', flexDirection: 'column',
              '& .MuiTextField-root': { m: 1, width: '90%' }, padding: '30px 20px',
              width: { xs: '100%', md: '60%' }
            }}
            noValidate
            autoComplete="off"
            onSubmit={(e)=>{handleSubmit(e)}}
          >
            <Typography variant='h3' sx={{ color: '#525252', fontWeight: '600' }}>Send Message</Typography>
            <TextField
              id="nameInput"
              label="Your Name"
              variant="standard"
              sx={{ width: '90%' }}
              InputProps={{
                sx: { fontWeight: '600' },
              }}
              value={name}
              onChange={(e)=>{setName(e.target.value)}}
            />
            <TextField
              id="emailInput"
              label="Your Email"
              variant="standard"
              sx={{ width: '90%' }}
              InputProps={{
                sx: { fontWeight: '600' },
              }}
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
            />
             <TextField
              id="subjectInput"
              label="Subject"
              variant="standard"
              sx={{ width: '90%' }}
              InputProps={{
                sx: { fontWeight: '600' },
              }}
              value={subject}
              onChange={(e)=>{setSubject(e.target.value)}}
            />
            <TextField
              id="messageInput"
              label="Type your Message"
              multiline
              maxRows={4}
              variant="standard"
              sx={{ width: '90%' }}  // This applies margin to the outer container
              InputProps={{
                sx: { fontWeight: '600' },  // Styling for the input text itself
              }}
              value={message}
              onChange={(e)=>{setMessage(e.target.value)}}
            />

            <Button type='submit' variant='contained' sx={{ width: 'fit-content', boxShadow: 'none', borderRadius: '0', margin: '20px 10px 9px', padding: '10px 25px' }}>Send</Button>
          </Box>
        </Box>
        <Box id="right" sx={{display:'flex', flexDirection:'column',justifyContent:'flex-end', width: '40%', height: '70%' }}>
           <Box sx={{height:'70px'}}>
              <IconButton sx={{backgroundColor:'whitesmoke',transition:'all 0.4s ease-in-out', '&:hover':{backgroundColor:'purple'}, color:'black', padding:'20px'}}><FileDownloadIcon/></IconButton>
               <Typography variant='span' color='white' sx={{marginLeft:'5px'}}>Resume(.pdf)</Typography>
           </Box>
           <Box sx={{height:'70px', margin:'15px 0px'}}>
              <IconButton sx={{backgroundColor:'whitesmoke',transition:'all 0.4s ease-in-out', '&:hover':{backgroundColor:'purple'}, color:'black', padding:'20px'}}><PhoneIcon/></IconButton>
               <Typography variant='span' color='white' sx={{marginLeft:'5px'}}>+91-9131694047</Typography>
           </Box>
           <Box sx={{height:'70px'}}>
              <IconButton sx={{backgroundColor:'whitesmoke',transition:'all 0.4s ease-in-out', '&:hover':{backgroundColor:'purple'}, color:'black', padding:'20px'}}><EmailIcon/></IconButton>
               <Typography variant='span' color='white' sx={{marginLeft:'5px'}}>aryannayak9131@gmail.com</Typography>
           </Box>
        </Box>
      </Box>
    </Box>
  )
}


