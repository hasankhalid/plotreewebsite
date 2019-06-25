import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
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
        <Grid style={{height: '100%'}}>
          <Row className="show-grid" style={{height: 'calc(100% - 80px)'}}>
            <div className="landingColContain">
              <Col lg={6} md={6} sm={6} xs={12} className="landingColumn">
                <div style={{width: '100%'}}>
                  <h1 className="landingTitle">Plotree Info Design</h1>
                  <h1 className="landingBanner frank_ruhl">Growing Data Narratives</h1>
                  <p className="eighteen landingDesc">We are an <span style={{fontWeight: '700'}}>information design studio</span> based in Lahore. We help organizations communicate insights underlying their data through interactive web based data visualizations</p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12} className="bannerVis">
                <div className="banner_vis_contain">
                  <img className="wasa" title="Map of Faisalabad city showing rate of absence of water connections by ‘Water and Sanitation Authority’ across colonies (encoded by circle radius). Colonies with more than 25 % commercial units are colored light green. Data source: GAT Consulting (Pvt Ltd.)" alt="Map of Faisalabad city showing rate of absence of water connections by Water and Sanitation Authority across colonies." src={wasa}></img>
                </div>
              </Col>
            </div>
            <div className="socialContain">
              <Col lg={12} md={12} sm={12} xs={12} className="socColumnContain">
                <TiSocialLinkedin className="landingSocial" style={{cursor: 'pointer', marginLeft: '-3px'}} onClick={() => this.linkedIn()}/>
                <TiSocialFacebook className="landingSocial" style={{cursor: 'pointer'}} onClick={() => this.facebook()}/>
                <TiSocialTwitter className="landingSocial" style={{cursor: 'pointer'}} onClick={() => this.twitter()}/>
                <TiSocialGithub className="landingSocial" style={{cursor: 'pointer'}} onClick={() => this.github()}/>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Landing;
