const mongoose =require('mongoose');

const Schema = mongoose.Schema;

//Meme schema validation
const memeSchema =new Schema({
    username: {type: String,required:true},
    caption: {type:String,required:true},
    url:{type:String,required:true},
},{
    timestamps:true,
});

const meme=mongoose.model('meme',memeSchema);

//Exporting Meme schema
module.exports =meme;