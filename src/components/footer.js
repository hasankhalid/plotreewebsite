import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import TiSocialTwitterCircular from 'react-icons/lib/ti/social-twitter-circular'
import TiSocialLinkedinCircular from 'react-icons/lib/ti/social-linkedin-circular'

class Footer extends Component {
  twitter = () => {
    window.open("https://twitter.com/plotreeViz", "TwitterProfile");
    window.close();
  }

  linkedIn = () => {
    window.open("https://www.linkedin.com/company/plotree/", "TwitterProfile");
    window.close();
  }

  render () {
    return (
      <footer className="footer">
        <Grid style={{height: '100%'}}>
          <Row className="show-grid" style={{height: '100%'}}>
            <Col lg={6} md={6} sm={12} xs={12} style={{display: 'flex', flexDirection: 'column', height: '150px', alignItems: 'center', justifyContent: 'center', color: '#57068c'}}>
              <p style={{fontWeight: '400', fontSize: '16px'}}>Plotree Info Design</p>
              <p style={{fontWeight: '300', fontSize: '16px'}}>+92 323 4715678</p>
              <p style={{fontWeight: '300', fontSize: '16px'}}>hasankhalid@plotree.studio</p>
              <p style={{fontWeight: '300', fontSize: '16px'}}>3 Shahrah-e-Aiwan-e-Tijarat China Chowk Lahore</p>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} style={{display: 'flex', flexDirection: 'column', height: '150px', alignItems: 'center', justifyContent: 'center', color: '#57068c'}}>
              <p style={{fontWeight: '400', fontSize: '16px'}}>Connect With Us</p>
              <div>
                <TiSocialLinkedinCircular onClick={() => this.linkedIn()} style={{marginLeft: '10px', marginRight: '10px', cursor: 'pointer'}} size={40}/>
                <TiSocialTwitterCircular onClick={() => this.twitter()} style={{marginLeft: '10px', marginRight: '10px', cursor: 'pointer'}} size={40}/>
              </div>
            </Col>
          </Row>
        </Grid>
        <div style={{width: '100%', backgroundColor: '#1565C0', color: 'white', padding: '15px'}}>
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
