import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../resources/logo-invert-1.svg'

class NavBar extends Component {
  projectButtonClick = () => {
      window.scroll({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
  }

  render () {
    return (
      <Navbar className='navTrans'>
        <Navbar.Header style={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
          <Navbar.Brand>
            <img style={{height: '71px', width: '150px'}} src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight style={{display: 'flex', alignItems: 'center'}} className='navRightEight'>
            <NavItem eventKey={1} href="#">
              <p className='projButt' onClick={(e) => this.projectButtonClick()}>PROJECTS</p>
            </NavItem>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}
export default NavBar;
