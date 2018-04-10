import React, { Component } from 'react'
import logo from '../resources/logoAlone.svg'
import { Grid, Row, Col } from 'react-bootstrap'
import saad from '../resources/saad.jpg'
import hasan from '../resources/hasan1.jpg'
import Fade from 'react-reveal/Fade';

class About extends Component {
  componentDidMount(){
    var rotatelogo = document.getElementById("logoscroll");


    window.addEventListener("scroll", function() {
      rotatelogo.style.transform = "rotate("+window.pageYOffset/4+"deg)";
    })
  }
  render () {
    return (
      <div style={{backgroundColor: '#EEEEEE'}}>
        <Grid>
          <Row className="show-grid">
            <Col lg={6} md={6} sm={12} xs={12} className="about">
              <div style={{height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90%'}}>
                <img id="logoscroll" src={logo} alt="logo" />
                <h2>About Us</h2>
                <p className="aboutPlotree">Plotree is an information design studio based in Lahore. We help organizations communicate insights underlying their data through interactive web based visualizations. We believe that our client’s data is more than just numbers in a database or a spreadsheet. It deserves a stage to reveal fascinating stories to the world. Get in touch and collaborate with us to bring your data to life on your websites, publications or presentations.</p>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="about">
              <div className="teamMemberContainer">
                <Fade down>
                  <img src={saad} className="teamAvatar" alt="logo" />
                </Fade>
                <Fade down>
                  <div className="teamInfoContainer">
                    <h2 className="myname">Saad Khalid</h2>
                    <p className="smalldisplay">Data Visulization Engineer/Masters in Economic and Political Development Columbia SIPA/Previously lead analyst at punjab wide health survey.</p>
                    <p className="whoami">Hi, I am a data visualization engineer at Plotree.I studied Economic and Political Development at Columbia SIPA and have recently worked as a lead analyst for a Punjab wide Health survey. In my own time, I can be found reading fiction and exploring electronic music.</p>
                  </div>
                </Fade>
              </div>
              <div className="teamMemberContainer secondTeamMember">
                <Fade up>
                  <img src={hasan} className="teamAvatar" alt="logo" />
                </Fade>
                <Fade up>
                  <div className="teamInfoContainer">
                    <h2 className="myname">Hasan Khalid</h2>
                    <p className="smalldisplay">Front End Developer/CS graduate from IBA Karachi/Previously freelance developer and IT Support Engineer</p>
                    <p className="whoami">I am a front-end developer and UX designer at Plotree. I’ve previously worked as a freelance web developer and IT Support Engineer for GAT Consulting. You can find me watching football or learning the piano.</p>
                  </div>
                </Fade>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About;
