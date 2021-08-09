//We need express and cors for the server
const express =require('express');
const cors=require('cors');
//Helps to connect to mongoDB sever
const mongoose=require('mongoose');

//This configure to have enviroment variable
require('dotenv').config();

//This is how we create express server port=5000
const app=express();
const port=process.env.port || 8081;

//We've middleware cors and parsing json.So that server can send and recieve json
app.use(cors());
app.use(express.json());

//We get uri from mongoDB dashboard which is mongoDB database uri
const uri="mongodb://localhost/XMeme";
mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true});
//uri is where our database is stored
//Once connection is eastablished it shows following message
const connection=mongoose.connection;
connection.once('open',() => {
    console.log("MongoDB database connection established successfully");
})

//reuiring files from routes
const memesRouter =require('./routes/memes');

//using files that were required above in memes router
app.use('/memes',memesRouter);

//Starting server
app.listen(port,() => {
console.log('Server is running on port: ',port);
});
