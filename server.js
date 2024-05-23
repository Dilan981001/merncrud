const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());


//route middleware
app.use(postRoutes);


const PORT = 8000;
const DB_URL = 'mongodb+srv://dila:dila123@mernapp.rntxev6.mongodb.net/merncrud?retryWrites=true&w=majority&appName=mernapp';

mongoose.connect(DB_URL)
.then(()=>{
    console.log('DB connected');
})
.catch((err)=>console.log('DB connection error', err));

app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});

