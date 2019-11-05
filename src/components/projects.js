import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import ballot from '../resources/ballot1.svg';
import map from '../resources/elections.png';
import women from '../resources/tree.png';
import ideas from '../resources/ideas.png';
import psl from '../resources/PSL.png';

class Projects extends Component {
  elections = () => {
    window.open("http://plotree.github.io/elections");
  }

  esw = () => {
    window.open("https://interactive.pcsw-punjab.pk/esw/");
  }

  psl = () => {
    window.open("https://plotree.github.io/psl2019/");
  }

  ideas = () => {
    window.open("http://ideaspak.org/interactive-budget-tool/");
  }


  render () {
    return (
      <div className="thumnail_gradient">
        <div style={{width: '100%'}} className="thumbnail_gradient_one">
          <Grid>
            <Row className="show-grid">
              <Col lg={12} md={12} sm={12} xs={12} className="proj_section_heading">
                <h1 style={{marginTop: '0px'}}>Featured Projects</h1>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12} className="proj">
                <div className="project_contain">
                  <div className="project_main_banner">
                    <img src={women} className="PakMap project_main_picture" alt="Pakistan General Elections Map" />
                  </div>
                  <div className="project_details">
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                      <p className="projTitle">Gathering Data to Advance Women's Social and Economic Wellbeing</p>
                    </div>
                    <p className="projDesc">A series of visualizations presenting the findings of ESW Survey 2018 conducted by Punjab Commission on the Status of Women. The users can view sections on women's issues like labor force and employment and violence against women through interactive visuals.</p>
                    <span className="Butt">View Project</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12} className="proj evenProj">
                <div className="project_contain">
                  <div className="project_main_banner">
                    <img src={map} className="PakMap project_main_picture" alt="Pakistan General Elections Map" />
                  </div>
                  <div className="project_details">
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                      <p className="projTitle">Pakistan General Elections 2018</p><img style={{width: '40px', marginLeft: '10px', marginTop: '45px'}} alt="ballot box" src={ballot}/>
                    </div>
                    <p className="projDesc">A series of visualizations presenting the results from the 2018 General Election in Pakistan. The users can answer specific questions about the results data through interactive filters. Data Source: Election Commission of Pakistan</p>
                    <span onClick={() => this.elections()} className="Butt">View Project</span>
                  </div>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <div style={{width: '100%'}} className="thumbnail_gradient_two">
          <Grid>
            <Row className="show-grid">
              <Col lg={6} md={6} sm={6} xs={12} className="proj">
                <div className="project_contain">
                  <div className="project_main_banner">
                    <img src={ideas} className="PakMap project_main_picture" alt="Pakistan General Elections Map" />
                  </div>
                  <div className="project_details">
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                      <p className="projTitle">Punjab Budget Forecast Tool</p>
                    </div>
                    <p className="projDesc">An Interactive web based graphical version of the ‘Punjab Budget Forecast Tool’ developed by Institute for Development and Economic Alternatives. Users can tweak key macroeconomic assumptions and investigate resulting trends in provincial revenues and expenditures.</p>
                    <span onClick={() => this.ideas()} className="Butt">View Project</span>
                  </div>
                </div>
              </Col>
              <Col lg={6} md={6} sm={6} xs={12} className="proj evenProj">
                <div className="project_contain">
                  <div className="project_main_banner">
                    <img src={psl} className="PakMap project_main_picture" alt="Pakistan General Elections Map" />
                  </div>
                  <div className="project_details">
                    <div style={{display: 'flex', alignItems: 'center', marginBottom: '10px'}}>
                      <p className="projTitle">Batting Statistics in Pakistan Super League</p>
                    </div>
                    <p className="projDesc">This interactive visual allows fans to explore batting statistics of all players that have ever made a batting appearance in PSL. The visual is also equipped with filters that allow the user to conduct analysis on the basis of team, batting average, strike rate, inning played and other statistics.</p>
                    <span onClick={() => this.psl()} className="Butt">View Project</span>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} className="proj">
                <p className="moreprojects">More projects can be accessed in the scrollable section on top</p>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Projects;
