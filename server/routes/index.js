const express=require('express');
const nodemailer =require('nodemailer')
const router=express.Router();
require('dotenv').config()

router.post('/api/mail',(req, res)=>{
   try {
        console.log("Email -> "+process.env.EMAIL )
        console.log(" password -> "+process.env.PASSWORD)
        console.log('data get --> '+JSON.stringify(req.body));
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                 user:process.env.EMAIL,
                 pass:process.env.PASSWORD
            }
        })
        const mailOptions ={
           from :req.body.email,
           to:process.env.EMAIL,
           subject : req.body.subject,
           html:`<p>${req.body.message}</p>`
        }
        transporter.sendMail(mailOptions,(error, info)=>{
            if(error){
                console.log('Error while sending Mail : '+error);
                return res.status(401).json({
                    message:'Error while sending Message !'
                })
            }else{
                console.log('Mail sent successfully : '+info.response);
                return res.status(200).json({
                    message:'Message Sent !'
                })
            }
        })
        
   } catch (error) {
        return res.status(400).json({
            message:'Error while Sending Message !'
        })
   }
})

module.exports=router;