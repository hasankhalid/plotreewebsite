import React, { Component } from 'react';
import './App.css';
import Landing from './components/landing'
import About from './components/plotree'
import Footer from './components/footer'
import Projects from './components/projects'
import SimpleSwiper from './components/swiper'
import Company from './components/company'

class App extends Component {
  componentWillMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="App">
        <Landing/>
        <SimpleSwiper/>
        <Company/>
        <Projects/>
        <About/>
        <Footer/>
      </div>
    );
  }
}

export default App;
