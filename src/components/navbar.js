import React, { Component } from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import logo from '../resources/logo.svg'

class NavBar extends Component {
  projectButtonClick = () => {
      window.scroll({
        top: window.innerHeight - 70,
        left: 0,
        behavior: 'smooth'
      });
  }

  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 20;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render () {
    return (
      <Navbar fixedTop={true} className={this.state.isTop ? 'navTrans' : 'navColor'}>
        <Navbar.Header style={{display: 'flex', flexDirection: 'column', alignItems: 'left'}}>
          <Navbar.Brand>
            <img style={{height: '65px', width: '134px'}} src={logo} className="App-logo" alt="logo" />
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight style={{display: 'flex', alignItems: 'center'}} className={this.state.isTop ? 'navRightEight' : 'navRightSeven'}>
            <NavItem eventKey={1} href="#">
              <p className={this.state.isTop ? 'projButt' : 'projButtColor'} onClick={(e) => this.projectButtonClick()} style={{fontWeight: '300'}}>PROJECTS</p>
            </NavItem>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
    )
  }
}
export default NavBar;
