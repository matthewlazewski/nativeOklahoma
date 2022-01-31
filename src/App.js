import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import './App.css';
import About from './components/About';
import Culture from './components/Culture';
import Directories from './components/Directories';
import Events from './components/Events';
import MMIP from './components/MMIP';
import Advertise from './components/Advertise';
import NOKMagazine from './components/NOKMagazine';
import Contact from './components/Contact';
import News from './components/News';


class App extends Component {
  render(){
    return (
      <div className="wrapper d-flex">
        <BrowserRouter>
          <Switch>
            <Route
              exact path = '/'
              render={props => (
                <Home {...props} />
              )}
            />
            <Route
              exact path = '/about'
              render={props => (
                <About {...props} />
              )}
            />
            <Route
              exact path = '/culture'
              render={props => (
                <Culture {...props} />
              )}
            />
            <Route
              exact path = '/news'
              render={props => (
                <News {...props} />
              )}
            />
            <Route
              exact path = '/events'
              render={props => (
                <Events {...props} />
              )}
            />
             <Route
              exact path = '/mmip'
              render={props => (
                <MMIP {...props} />
              )}
            />
            <Route
              exact path = '/advertise'
              render={props => (
                <Advertise {...props} />
              )}
            />
            <Route
              exact path = '/nok-magazine'
              render={props => (
                <NOKMagazine {...props} />
              )}
            />
            <Route
              exact path = '/directories'
              render={props => (
                <Directories {...props} />
              )}
            />
            <Route
              exact path = '/contact'
              render={props => (
                <Contact {...props} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
