import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar'
import Landing from './components/landing'
import About from './components/plotree'
import Footer from './components/footer'
import Projects from './components/projects'

class App extends Component {
  componentWillMount() {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }
  }
  render() {
    return (
      <div className="App">
        <NavBar/>
        <Landing/>
        <About/>
        <Projects/>
        <Footer/>
      </div>
    );
  }
}

export default App;
