const express=require('express');
const cors=require('cors')
const app=express();
const PORT=process.env.port || 8000;

app.use(cors())
app.use(express.urlencoded());
app.use(express.json())
app.use('/', require('./routes'))

app.listen(PORT, (error)=>{
    if(error){
        console.log("Error while running server : "+error);
    }else{
        console.log("Server is running at port : "+PORT);
    }
})