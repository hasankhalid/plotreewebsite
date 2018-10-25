import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import image from '../resources/saad1.png'
import image2 from '../resources/testingp.svg'
import image21 from '../resources/testmobile.png'
import image3 from '../resources/phscomparison.png'
import image31 from '../resources/phscomparison.png'
import image4 from '../resources/chord.svg'
import ballot from '../resources/ballot1.svg';
import fiscal from '../resources/laptops.svg';
import map from '../resources/map.png';
import calender from '../resources/cal.png';
import Fade from 'react-reveal/Fade';
import FaTree from 'react-icons/lib/fa/tree';
import FaLineChart from 'react-icons/lib/fa/line-chart';
import FaMedkit from 'react-icons/lib/fa/medkit';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
import FaBalanceScale from 'react-icons/lib/fa/balance-scale';

class Projects extends Component {
  elections = () => {
    window.open("http://plotree.github.io/elections");
  }

  pha = () => {
    window.open("https://gatconsulting.github.io/phainsights/");
  }

  phstrends = () => {
    window.open("http://bl.ocks.org/saadkhalid90/raw/87d6841ce0bf28196fc0c88c10033e1d/");
  }

  phschord = () => {
    window.open("https://bl.ocks.org/saadkhalid90/raw/c19143a4a54cc8208aece7762e996983/");
  }

  terror = () => {
    window.open("https://hasankhalid.github.io/terrorMaps/");
  }

  ideas = () => {
    window.open("https://hasankhalid.github.io/ideasdash/");
  }


  render () {
    return (
      <div style={{width: '100%', overflow: 'hidden'}}>
        <Row className="show-grid" style={{height: '100%'}}>
          <Col lg={6} md={6} sm={6} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px', position: 'relative'}}>
            <div style={{height: '100%'}}>
              <div style={{backgroundColor: 'rgba(76, 175, 80, 0.475)', position: 'absolute', top: '0', left: '0', zIndex: '4', height: '100%', width: '100%'}}/>
              <img src={map} style ={{height: '88%', width: '86%', marginLeft: '7%', objectFit: 'contain'}} alt="Pakistan General Elections Map" />
              <div className="containProjectTitle" style={{color: 'black', paddingLeft: '75px', zIndex: '5'}}>
                <Fade down delay={50}>
                  <div style={{display: 'flex', alignItems: 'center'}}>
                    <p className="projTitle" style={{marginBottom: '0px'}}>PAKISTAN GENERAL ELECTIONS 2018</p><img style={{width: '35px', marginLeft: '10px'}} alt="ballot box" src={ballot}/>
                  </div>
                </Fade>
                <Fade up delay={350}>
                  <p className="projDesc">A series of visualizations presenting the results from the 2018 General Election in Pakistan. The users can answer specific questions about the results data through interactive filters. Data Source: Election Commission of Pakistan</p>
                </Fade>
                <Fade delay={650}>
                  <span onClick={() => this.elections()} className="Butt">View Project</span>
                </Fade>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px', position: 'relative'}}>
            <div style={{height: '100%'}}>
              <div style={{backgroundColor: 'rgba(245, 245, 245, 0.1)', position: 'absolute', top: '0', left: '0', zIndex: '4', height: '100%', width: '100%'}}/>
              <img src={calender} style ={{height: '100%', width: '100%', objectFit: 'contain'}} alt="Calender details for attendance of a PHA gardener" />
              <div className="containProjectTitle" style={{color: 'black', paddingLeft: '60px', backgroundColor: 'rgba(255, 255, 255, 0.9)', zIndex: '5'}}>
                <Fade down delay={450}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '5px'}}>
                    <p className="projTitle" style={{marginBottom: '0px'}}>INSIGHTS IN PHA M&E</p><FaTree style={{marginLeft: '4px'}}/>
                  </div>
                </Fade>
                <Fade up delay={750}>
                  <p className="projDesc">Explore time series data through interactive calendars, like the one we designed for assessing enumerators’ performance in the ‘Monitoring PHA Staff’ project. Data Source: GAT Consulting (Pvt) Ltd </p>
                </Fade>
                <Fade delay={1050}>
                  <span onClick={() => this.pha()} className="Butt" style={{color: 'black'}}>View Project</span>
                </Fade>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px', position: 'relative', backgroundColor: 'white'}}>
            <div style={{height: '100%'}}>
              <img src={image3} className="desktoppic" style ={{height: '100%', width: '90%', objectFit: 'contain', marginLeft: '5%'}} alt="Trends in PHS indicators" />
              <img src={image31} className="mobilepic" style ={{height: '100%', width: '100%', objectFit: 'contain'}} alt="Trends in PHS indicators" />
              <div className="containProjectTitle" style={{color: 'black', paddingLeft: '75px', backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
                <Fade down delay={50}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '5px'}}>
                    <p className="projTitle" style={{marginBottom: '0px'}}>TRENDS IN INDICATORS</p><FaLineChart style={{marginLeft: '4px'}}/>
                  </div>
                </Fade>
                <Fade up delay={350}>
                  <p className="projDesc">Inspired by Edward Tufte’s slopegraphs, the visualization shows district wise trends in indicators across the two phases of Punjab Health Survey. A positive and negative change of over 10 percent points. is encoded by blue and red respectively. Data source: Bureau of Statistics, Punjab</p>
                </Fade>
                <Fade delay={650}>
                  <span onClick={() => this.phstrends()} className="Butt">View Project</span>
                </Fade>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px', position: 'relative', backgroundColor: 'rgba(238, 238, 238, 1)'}}>
            <div style={{height: '100%'}}>
              <img src={image4} style ={{height: '100%', width: '90%', objectFit: 'contain', marginLeft: '5%'}} className="App-logo" alt="Chord diagram about reproductive health caregivers and institutions" />
              <div className="containProjectTitle" style={{color: 'black', paddingLeft: '60px', zIndex: '5'}}>
                <Fade down delay={450}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '5px'}}>
                    <p className="projTitle" style={{marginBottom: '0px'}}>EXPLORING REPRODUCTIVE HEALTH IN PUNJAB</p><FaMedkit style={{marginLeft: '4px'}}/>
                  </div>
                </Fade>
                <Fade up delay={750}>
                  <p className="projDesc">An exploration of the relationship between the birth attendant and place of delivery of 15,971 mothers interviewed in the Punjab Health Survey Round II, Data source: Bureau of Statistics, Punjab</p>
                </Fade>
                <Fade delay={1050}>
                  <span onClick={() => this.phschord()} className="Butt">View Project</span>
                </Fade>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px', position: 'relative', backgroundColor: '#37474F'}}>
            <div style={{height: '100%'}}>
              <img src={image2} className="desktoppic" style ={{height: '100%', width: '100%', objectFit: 'contain'}} alt="Map showing Terror incidents in Pakistan" />
              <img src={image21} className="mobilepic" style ={{height: '100%', width: '100%', objectFit: 'contain'}} alt="Map showing Terror incidents in Pakistan" />
              <div className="containProjectTitle" style={{color: 'white', paddingLeft: '75px', zIndex: '5'}}>
                <Fade down delay={50}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '5px'}}>
                    <p className="projTitle" style={{marginBottom: '0px'}}>TERROR MAPS</p><FaMapMarker style={{marginLeft: '4px'}}/>
                  </div>
                </Fade>
                <Fade up delay={350}>
                  <p className="projDesc">A presentation of temporal and spatial distribution of bombing incidents in Pakistan from 2001 to 2016. The attached graphic shows data for 2016.  Data source: Global Terrorism Database, UMD</p>
                </Fade>
                <Fade delay={650}>
                  <span onClick={() => this.terror()} className="Butt" style={{color: 'white'}}>View Project</span>
                </Fade>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px', position: 'relative', backgroundColor: 'white'}}>
            <div style={{height: '100%'}}>
              <img src={fiscal} style ={{height: '76%', width: '76%', objectFit: 'contain', marginLeft: '12%', marginTop: '5%'}} alt="Punjab Budget Forecast Tool" />
              <div className="containProjectTitle" style={{color: 'black', paddingLeft: '75px', backgroundColor: 'rgba(245, 245, 245, 0.2)', zIndex: '5'}}>
                <Fade down delay={450}>
                  <div style={{display: 'flex', alignItems: 'center', marginBottom: '5px'}}>
                    <p className="projTitle" style={{marginBottom: '0px'}}>PUNJAB BUDGET FORECAST TOOL</p><FaBalanceScale style={{marginLeft: '4px'}}/>
                  </div>
                </Fade>
                <Fade up delay={750}>
                  <p className="projDesc">An Interactive web based graphical version of the ‘Punjab Budget Forecast Tool’ developed by Institute for Development and Economic Alternatives. Users can tweak key macroeconomic assumptions and investigate resulting trends in provincial revenues and expenditures.</p>
                </Fade>
                <Fade delay={1050}>
                  <span onClick={() => this.ideas()} className="Butt" style={{color: 'black'}}>View Project</span>
                </Fade>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px', position: 'relative'}}>
            <div style={{height: '100%'}}>
              <img src={image} style ={{height: '100%', width: '100%', objectFit: 'cover'}} className="App-logo" alt="Map showing water connections across colonies in Faisalabad" />
              <div className="containProjectTitle" style={{color: 'white', paddingLeft: '75px', backgroundColor: 'rgba(87, 6, 140, 0.6)'}}>
                <Fade down delay={50}>
                  <p className="projTitle">WASA Consumer Survey Map</p>
                </Fade>
                <Fade up delay={350}>
                  <p className="projDesc">Map of Faisalabad city showing rate of absence of water connections by ‘Water and Sanitation Authority’ across colonies (encoded by circle radius). Colonies with more than 25 % commercial units are colored light green. Data source: GAT Consulting (Pvt Ltd.)</p>
                </Fade>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={6} xs={12} className="about" style={{backgroundColor: '#90CAF9'}}>
            <div style={{height: '350px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', width: '90%'}}>
              <Fade down delay={450}>
                <h2>Reveal the storyteller in your data</h2>
              </Fade>
              <Fade up delay={750}>
                <p className="aboutPlotree">Plotree is an information design studio based in Lahore. We help organizations communicate insights underlying their data through interactive web based visualizations. We believe that our client’s data is more than just numbers in a database or a spreadsheet. It deserves a stage to reveal fascinating stories to the world. Get in touch and collaborate with us to bring your data to life on your websites, publications or presentations.</p>
              </Fade>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Projects;
