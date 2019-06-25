import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import saad from '../resources/saad.jpg'
import hasan from '../resources/hasan.jpg'
import danial from '../resources/danial.jpg'
import YouTube from 'react-youtube-embed'

class About extends Component {
  render () {
    return (
      <div className="about">
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1 className="companyBanner">Meet the team</h1>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="team_first_row">
              <div className="teamMemberContainer">
                <img src={saad} className="teamAvatar" alt="Saad Khalid" />
                <div className="teamInfoContainer">
                  <h2 className="myname">Saad Khalid</h2>
                  <h3 className="mydesig">Co-Founder, Data-Vis Lead</h3>
                  <p className="whoami">I studied Economic and Political Development at Columbia SIPA as a Fulbright Scholar. I have in the past worked with Punjab Government as a data analysis consultant on various projects. In my own time, I enjoy reading fiction and exploring electronic music.</p>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="team_first_row">
              <div className="teamMemberContainer">
                <img src={hasan} className="teamAvatar" alt="logo" />
                <div className="teamInfoContainer">
                  <h2 className="myname">Hasan Khalid</h2>
                  <h3 className="mydesig">Co-Founder, Design/UX Lead</h3>
                  <p className="whoami">I design front-end, interaction and user experience of our projects. I've previously worked as a freelance web developer and an IT and Management Consultant. You can also find me watching football or learning the piano.</p>
                </div>
              </div>
            </Col>
            </Row>
          </Grid>
          <Grid>
          <Row>
            <Col lg={6} md={6} sm={12} xs={12} className="team_second_row">
              <div className="teamMemberContainer">
                <img src={danial} className="teamAvatar" alt="Danial" />
                <div className="teamInfoContainer">
                  <h2 className="myname">Danial Sadiq Masood</h2>
                  <h3 className="mydesig">Full Stack Lead, Data Wrangler</h3>
                  <p className="whoami">I am a full stack developer/software engineer at Plotree. I am a Computer Science graduate from Kings College London and have previously worked as a freelance software developer. In my free time I like to design sounds and make music.</p>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
        <Grid className="fulbright_talk">
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1 className="companyBanner">We spoke at the Fulbright conference</h1>
            </Col>
             <Col lg={12} md={12} xs={12}>
               <div className="youtubeParent">
                <div className="youtubeContain">
                  <YouTube id='XO3D1yGi-a4' />
                </div>
                <div className="responsive_youtube">
                  <p className="twenty frank_ruhl">Our eyes are a marvel. Seeing with purpose often leads to meaning and insight. In an age of information overload, we need to see more to understand the crazy world we live in. We got an opportunity to speak at the Fulbright Alumni conference 2018 to make a case for impactful data visualization in Pakistan</p>
                </div>
              </div>
             </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About;
