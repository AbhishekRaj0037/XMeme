//Express router
const router =require('express').Router();

//This our mongoose model which we require
let Meme =require('../models/meme.model');


//Endpoint which handle http GET request
router.route('/').get((req,res) => {
    Meme.find()
    .sort({_id:-1,})
    .then(memes => res.json(memes))
    .catch(err => res.status(400).json('Error : ' + err));
});


//Endpoint which handle http POST request
router.route('/').post((req,res) => {
    const username=req.body.username;
    const caption=req.body.caption;
    const url=req.body.url;

    const newMeme =new Meme({
        username,
        caption,
        url,
    });

    newMeme.save()
    .then(() =>res.json('Meme added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Again we've another end point which is http GET request to get user data by /id
router.route('/:id').get((req,res)=>{
    Meme.findById(req.params.id)
    .then(meme => res.json(meme))
    .catch(err => res.status(400).json('Error: ' + err));
});


//Exporting the router
module.exports =router;