const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();
// Enable CORS
const corsOptions = {
    origin: '*', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], 
    allowedHeaders: ['Authorization', 'Content-Type'],
    credentials: true, // Allow cookies, if needed
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes'));

// Start the server
app.listen(PORT, (error) => {
    if (error) {
        console.log("Error while running server : " + error);
    } else {
        console.log("Server is running at port : " + PORT);
    }
});
