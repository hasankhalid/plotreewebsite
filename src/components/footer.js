import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import TiSocialTwitter from 'react-icons/lib/ti/social-twitter';
import TiSocialLinkedin from 'react-icons/lib/ti/social-linkedin';
import TiSocialFacebook from 'react-icons/lib/ti/social-facebook';
import TiSocialGithub from 'react-icons/lib/ti/social-github';

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
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12}>
              <p className="foot_heading">Interested in learning more?</p>
              <p style={{fontSize: '16px'}}>Reach out to us for more information on pricing, services and projects at <span style={{borderBottom: '1px solid', fontWeight: '600'}}>saadkhalid@plotree.studio</span> & <span style={{borderBottom: '1px solid', fontWeight: '600'}}>hasankhalid@plotree.studio</span></p>
              <p className="foot_section_heading">Connect with us on social media</p>
              <div>
                <TiSocialLinkedin onClick={() => this.linkedIn()} style={{marginLeft: '-3px'}} className="footer_social" size={26}/>
                <TiSocialTwitter onClick={() => this.twitter()} className="footer_social" size={26}/>
                <TiSocialFacebook onClick={() => this.facebook()} className="footer_social" size={26}/>
                <TiSocialGithub onClick={() => this.github()} className="footer_social" size={26}/>
              </div>
              <p className="foot_section_heading">Contact Us</p>
              <p style={{fontSize: '16px'}}>+92 323 4715678</p>
              <p style={{fontSize: '16px'}}>3 Shahrah-e-Aiwan-e-Tijarat China Chowk Lahore</p>
              <p className="copyright_message">Copyright © 2019 Plotree Info Design</p>
            </Col>
          </Row>
        </Grid>
      </footer>
    )
  }
}

export default Footer;
