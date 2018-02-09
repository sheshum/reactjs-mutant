import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Root from "./components/Root";
import Home from "./components/Home";
import Repertoar from "./components/Repertoar";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

class App extends Component {
  
  
  render() {
    
    const RepertoarPage = (props) => {
        return(
          <Repertoar isLoaded={false} /> //pokusao sam da prosledim prop da bih implementirao lazy lodaing
        );
    };
    return (

      <Router>
        <div className="">                 
          <Route path={"/"} component={Root}/>
          <Route exact path={"/"} component={Repertoar}/>        
          <Route path={"/home"} component={Home}/>
          <Route path={"/repertoar"} render={RepertoarPage}/>
          <Route path={"/prices"} component={Prices}/>
          <Route path={"/contact"} component={Contact}/>
        </div>
     </Router>
    );
  }

}

export default App;
