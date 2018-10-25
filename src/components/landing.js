import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import FauxDonut from './donut.js';
import NavBar from './navbar';
import wasa from '../resources/saad1.jpg';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';

class Landing extends Component {

  twitter = () => {
    window.open("https://twitter.com/plotreeViz", "TwitterProfile");
  }

  facebook = () => {
    window.open("https://www.facebook.com/plotreeViz/", "FacebookProfile");
  }

  github = () => {
    window.open("https://github.com/plotree", "GitHubProfile");
  }

  linkedIn = () => {
    window.open("https://www.linkedin.com/company/plotree/", "TwitterProfile");
  }

  render () {
    return (
      <div className="landing" id="landing">
        <NavBar/>
        <div className="landingAbsolute landingWhite">
          <FauxDonut/>
        </div>
        <div className="landingAbsolute landingMap">
          <div className="landingGradient">
          </div>
          <img src={wasa} alt="Map WASA Faisalabad" className="wasaMap"/>
        </div>
        <Grid style={{height: '100%'}}>
          <Row className="show-grid" style={{height: '100%'}}>
            <div className="landingColContain">
              <Col lg={6} md={6} sm={6} xs={12} className="landingColumn">
                <div style={{width: '100%', padding: '5px'}}>
                  <h1 className="landingTitle">Plotree Info Design</h1>
                  <h1 className="landingBanner">we find hidden stories from your data</h1>
                </div>
              </Col>
            </div>
            <div className="socialContain">
              <Col lg={12} md={12} sm={12} xs={12} className="socColumnContain">
                <TiSocialLinkedin style={{cursor: 'pointer'}} onClick={() => this.linkedIn()}/>
                <TiSocialFacebook style={{cursor: 'pointer'}} onClick={() => this.facebook()}/>
                <TiSocialTwitter style={{cursor: 'pointer'}} onClick={() => this.twitter()}/>
                <TiSocialGithub style={{cursor: 'pointer'}} onClick={() => this.github()}/>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Landing;
