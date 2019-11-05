import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing'
import About from './components/plotree'
import Footer from './components/footer'
import Projects from './components/projects'
import SimpleSwiper from './components/swiper'
import Company from './components/company'
import Esw from './components/esw'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  componentWillMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="App">
              <Landing/>
              <SimpleSwiper/>
              <Company/>
              <Projects/>
              <About/>
              <Footer/>
            </div>
          </Route>
          <Route exact path="/esw">
            <Esw/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
