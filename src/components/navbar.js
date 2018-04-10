import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../resources/logo.svg'
import {Button} from 'react-bootstrap'

class NavBar extends Component {
  projectButtonClick = () => {
      window.scroll({
        top: 2*window.innerHeight- 160,
        left: 0,
        behavior: 'smooth'
      });
  }

  render () {
    return (
      <Navbar fixedTop={true} style={{display: 'flex'}}>
        <Navbar.Header style={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
          <Navbar.Brand>
            <img style={{height: '75px'}} src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
        </Navbar.Header>
          <Nav pullRight>
            <NavItem eventKey={1} href="#">
              <Button className="projButt" onClick={(e) => this.projectButtonClick()} style={{fontWeight: '300'}}>PROJECTS</Button>
            </NavItem>
          </Nav>
      </Navbar>
    )
  }
}
export default NavBar;
