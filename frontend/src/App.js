import React from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";//imported bootstrap

//imported different components

import CreateMeme from "./components/create-meme.component"
import Navbar from "./components/navbar.component";
import MemesList from "./components/memes-list.component";


//We've router path for each route for the application for all the components

function App() {
  return (
    <Router>
      <div className="Container">
    <Navbar />
    <br/>
    <Route path="/" exact component={MemesList} />
    <Route path="/create" component={CreateMeme} />
    </div>
    </Router>
  );
}

export default App;
