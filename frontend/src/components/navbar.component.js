import React,{Component} from 'react';
import {Link} from 'react-router-dom';//Imported link to link different routes

export default class Navbar extends Component {

//rendering navbar component
    render(){
        return(
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top">
  <a class="navbar-brand" href="#"><h1>Meme Stream</h1></a>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/"><h4>Home</h4></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/create"><h4>Submit meme</h4></a>
    </li>
  </ul>
</nav>

        );
    }
}