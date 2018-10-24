import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TiSocialTwitterCircular from 'react-icons/lib/ti/social-twitter-circular';
import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular';
import TiSocialFacebookCircular from 'react-icons/lib/ti/social-facebook-circular';
import TiSocialGithubCircular from 'react-icons/lib/ti/social-github-circular';

class Footer extends Component {
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
      <footer className="footer">
        <Grid style={{height: '100%'}}>
          <Row className="show-grid" style={{height: '100%'}}>
            <Col lg={6} md={6} sm={12} xs={12} style={{display: 'flex', flexDirection: 'column'}}>
              <p className="nunito" style={{fontWeight: '300', fontSize: '32px', marginTop: '50px', marginBottom: '30px'}}>Plotree Info Design</p>
              <p style={{fontWeight: '300', fontSize: '18px'}}>+92 323 4715678</p>
              <p style={{fontWeight: '300', fontSize: '18px'}}>hasankhalid@plotree.studio | saadkhalid@plotree.studio</p>
              <p style={{fontWeight: '300', fontSize: '18px'}}>3 Shahrah-e-Aiwan-e-Tijarat China Chowk Lahore</p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} style={{display: 'flex', flexDirection: 'column'}}>
              <p className="nunito" style={{fontWeight: '300', fontSize: '32px', marginTop: '50px'}}>Connect With Us</p>
              <div>
                <TiSocialLinkedinCircular onClick={() => this.linkedIn()} style={{cursor: 'pointer'}} size={40}/>
                <TiSocialTwitterCircular onClick={() => this.twitter()} style={{cursor: 'pointer'}} size={40}/>
                <TiSocialFacebookCircular onClick={() => this.facebook()} style={{cursor: 'pointer'}} size={40}/>
                <TiSocialGithubCircular onClick={() => this.github()} style={{cursor: 'pointer'}} size={40}/>
              </div>
            </Col>
          </Row>
        </Grid>
        <div style={{width: '100%', backgroundColor: '#57068c', color: 'white', padding: '20px', marginTop: '75px'}}>
          <Grid style={{height: '100%'}}>
            <Row className="show-grid" style={{height: '100%'}}>
              <Col lg={12} md={12} sm={12} xs={12}>
                <p style={{fontWeight: '300', fontSize: '16px', textAlign: 'right', margin: '0px'}}>Copyright © 2018 Plotree Info Design</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </footer>
    )
  }
}

export default Footer;
