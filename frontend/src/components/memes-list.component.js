import React, {Component} from 'react';
import{Link} from 'react-router-dom';
import axios from 'axios';//Axios to send and recieve HTTP request between frontend and backend

//Functional react component returning jsx component

const Meme=props=>(
    <div className="container">
	<div width="100%" className="card-body">
    <h3 className="card-title">{props.meme.username}</h3>
    <h3 className="card-subtitle"> {props.meme.caption}</h3>
	<img src={props.meme.url} width="100%" id="image"></img>
	</div>
         
	</div>
)

//React class component

export default class MemesList extends Component{
    constructor(props){
        super(props);

        this.deleteMeme=this.deleteMeme.bind(this);

        this.state={memes:[]};
    }

    //Axios doing HTTP get request
    componentDidMount(){
        axios.get('https://memestream.abhishek-raj.tech/memes/')
        .then(response=>{
            this.setState({memes:response.data})
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    deleteMeme(id){
        axios.delete('https://memestream.abhishek-raj.tech/memes/'+id)
        .then(res=>console.log(res.data));
        this.setState({
            memes:this.state.memes.filter(el=>el._id !==id)
        })
    }

    //Function returning component for the webpage
    memeList(){
        return this.state.memes.map(currentmeme=> {
            return <div className="col-md-4 col-sm-6 col-12"><Meme meme={currentmeme} deleteMeme={this.deleteMeme} key={currentmeme._id}/> </div>;
        })
    }

    //Body is calling method memeList()

    render(){
        return(
            <div className="row">
                
                        {this.memeList()}
              
            </div>
        )
    }
}
