import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import saad from '../resources/saad.jpeg'
import hasan from '../resources/hasan1.jpg'
import danial from '../resources/danial.jpg'
import Fade from 'react-reveal/Fade';

class About extends Component {
  render () {
    return (
      <div style={{backgroundColor: 'white'}} className="about">
        <Fade>
          <p className="teamHeading" style={{textAlign: 'center'}}>Meet the team</p>
        </Fade>
        <Grid>
          <Row className="show-grid">
            <div>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="teamMemberContainer">
                  <Fade delay={300}>
                    <img src={saad} className="teamAvatar" alt="logo" />
                  </Fade>
                  <Fade delay={300}>
                    <div className="teamInfoContainer">
                      <h2 className="myname">Saad Khalid</h2>
                      <p className="smalldisplay">Data Visulization Engineer/Masters in Economic and Political Development Columbia SIPA/Previously lead analyst at punjab wide health survey.</p>
                      <p className="whoami">Hi, I am a data visualization engineer at Plotree.I studied Economic and Political Development at Columbia SIPA and have recently worked as a lead analyst for a Punjab wide Health survey. In my own time, I can be found reading fiction and exploring electronic music.</p>
                    </div>
                  </Fade>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="teamMemberContainer thirdTeamMember">
                  <Fade delay={450}>
                    <img src={hasan} className="teamAvatar" alt="logo" />
                  </Fade>
                  <Fade delay={450}>
                    <div className="teamInfoContainer">
                      <h2 className="myname">Hasan Khalid</h2>
                      <p className="smalldisplay">Front End Developer/CS graduate from IBA Karachi/Previously freelance developer and IT Support Engineer</p>
                      <p className="whoami">I am a front-end developer and UX designer at Plotree. I’ve previously worked as a freelance web developer and IT Support Engineer for GAT Consulting. You can also find me watching football or learning the piano.</p>
                    </div>
                  </Fade>
                </div>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
                <div className="teamMemberContainer secondTeamMember">
                  <Fade delay={600}>
                    <img src={danial} className="teamAvatar" alt="Danial" />
                  </Fade>
                  <Fade delay={600}>
                    <div className="teamInfoContainer">
                      <h2 className="myname">Danial Sadiq Masood</h2>
                      <p className="smalldisplay">Full Stack Developer/Data Wrangler at Plotree. Previously I used to work as a Freelancer. CS graduate from Kings College London.</p>
                      <p className="whoami">I am a full stack developer/software engineer at Plotree. I am a Computer Science graduate from Kings College London and have previously done freelance work. In my free time I like to design sounds and make music.</p>
                    </div>
                  </Fade>
                </div>
              </Col>
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About;
