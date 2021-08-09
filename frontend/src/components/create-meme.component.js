import React, {Component} from 'react';
import axios from 'axios';//Axios for connecting Frontend to send and recieve HTTP requeset from backend

export default class CreateMemes extends Component{
    constructor(props){
        super(props);

        //Binding this to each method we created

        this.onChangeUsername=this.onChangeUsername.bind(this);
        this.onChangeCaption=this.onChangeCaption.bind(this);
        this.onChangeUrl=this.onChangeUrl.bind(this);
        this.onSubmit=this.onSubmit.bind(this);

        this.state ={
            username: '',
            caption : '',
            url: '',
            users:[]
        }
    }


    //We've created field properties of the state which correspond to the field of MongoDB document

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        });
    }
    onChangeCaption(e){
        this.setState({
            caption: e.target.value
        });
    }
    onChangeUrl(e){
        this.setState({
            url: e.target.value
        });
    }

    async onSubmit(e){
        e.preventDefault();
        const meme={
            username:this.state.username,
            caption:this.state.caption,
            url:this.state.url
        }
        console.log(meme);
        await axios.post('https://memestream.abhishek-raj.tech/memes/add',meme)//Used axios to send data to backend by POST request
        .then(res=>console.log(res.data));
        window.location='/';
    }


    //Create meme component which will get render on our page
    render(){
        return(
           <div>
               <form onSubmit={this.onSubmit}>
               <div className="form-group">
                       <label><h3>Meme owner</h3></label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.username}
                       onChange={this.onChangeUsername}
                       placeholder="Enter your full name"/>
                   </div>
                   <div className="form-group">
                       <label><h3>Caption</h3></label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.caption}
                       onChange={this.onChangeCaption}
                       placeholder="Be creative with the caption"/>
                   </div>
                   <div className="form-group">
                       <label><h3>Meme URL</h3></label>
                       <input type="text"
                       required
                       className="form-control"
                       value={this.state.url}
                       onChange={this.onChangeUrl}
                       placeholder="Enter URL of meme here"/>
                   </div>
           <div className="form-group">
               <input type="submit" value="Submit meme" className="btn btn-primary" />
           </div>
           </form>
           </div>
        )
    }
}