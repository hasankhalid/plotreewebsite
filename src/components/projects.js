import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import image from '../resources/saad1.png'
import image2 from '../resources/testingp.svg'
import image21 from '../resources/testmobile.png'
import image3 from '../resources/phscompare.svg'
import image31 from '../resources/phscomparemobile.png'
import image4 from '../resources/chord.svg'
import {Button} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';

class Projects extends Component {
  render () {
    return (
      <div style={{width: '100%', overflow: 'hidden'}}>
        <Row className="show-grid" style={{height: '100%'}}>
          <Col lg={3} md={3} sm={12} xs={12} className="proj" style={{backgroundColor: '#57068c', color: 'white'}}>
          <Fade down>
            <div className="projDetail">
              <p className="projTitle">WASA Consumer Survey Map</p>
              <p className="projDesc">Map of Faisalabad city showing rate of absence of water connections by ‘Water and Sanitation Authority’ across colonies (encoded by circle radius). Colonies with more than 25 % commercial units are colored light green. Data source: GAT Consulting (Pvt Ltd.)</p>
            </div>
          </Fade>
          <Fade up>
            <div className="projButton">
              <p className="projTitle">ONLINE SOON</p>
            </div>
          </Fade>
          </Col>
          <Col lg={9} md={9} sm={12} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px'}}>
            <img src={image} style ={{height: '100%', width: '100%', objectFit: 'cover'}} className="App-logo" alt="logo" />
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="proj" style={{backgroundColor: '#EEEEEE'}}>
            <Fade left>
              <div className="projDetail">
                <p className="projTitle">Trends In Indicators</p>
                <p className="projDesc">Inspired by Edward Tufte’s slopegraphs, the visualization shows district wise trends in indicators across the two phases of Punjab Health Survey. A positive and negative change of over 10% is encoded by blue and red respectively. Data source: Bureau of Statistics, Punjab</p>
              </div>
            </Fade>
            <Fade left>
              <div className="projButton">
                <Button href="http://bl.ocks.org/saadkhalid90/raw/87d6841ce0bf28196fc0c88c10033e1d/" target="_blank" className="Butt">View Project</Button>
              </div>
            </Fade>
          </Col>
          <Col lg={9} md={9} sm={12} xs={12} className="proj imageCompareContain" style={{backgroundColor: '#EEEEEE'}}>
            <img src={image3} className="desktoppic" style ={{height: '100%', width: '100%', objectFit: 'contain'}} alt="logo" />
            <img src={image31} className="mobilepic" style ={{height: '100%', width: '100%', objectFit: 'contain'}} alt="logo" />
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="proj" style={{backgroundColor: '#37474F', color: 'white'}}>
            <Fade down>
              <div className="projDetail">
                <p className="projTitle">Terror Maps</p>
                <p className="projDesc">A presentation of temporal and spatial distribution of bombing incidents in Pakistan from 2001 to 2016. The attached graphic shows data for 2016.  Data source: Global Terrorism Database, UMD</p>
              </div>
            </Fade>
            <Fade up>
              <div className="projButton">
                <Button href="https://hasankhalid.github.io/terrorMaps/index.html" target="_blank" className="Butt">View Project</Button>
              </div>
            </Fade>
          </Col>
          <Col lg={9} md={9} sm={12} xs={12} className="proj imageContain" style={{backgroundColor: '#37474F'}}>
            <img src={image2} className="desktoppic" style ={{height: '100%', width: '100%', objectFit: 'contain'}} alt="logo" />
            <img src={image21} className="mobilepic" style ={{height: '100%', width: '100%', objectFit: 'contain'}} alt="logo" />
          </Col>
          <Col lg={3} md={3} sm={12} xs={12} className="proj" style={{backgroundColor: '#EEEEEE'}}>
          <Fade left>
            <div className="projDetail">
              <p className="projTitle">Exploring Reproductive Health in Punjab</p>
              <p className="projDesc">An exploration of the relationship between the birth attendant and place of delivery of 15,971 mothers interviewed in the Punjab Health Survey Round II, Data source: Bureau of Statistics, Punjab</p>
            </div>
          </Fade>
          <Fade left>
            <div className="projButton">
              <Button href="https://bl.ocks.org/saadkhalid90/raw/229ce11c55919d9b31b3d9df19ead9c9/" target="_blank" className="Butt">View Project</Button>
            </div>
          </Fade>
          </Col>
          <Col lg={9} md={9} sm={12} xs={12} className="proj" style={{paddingRight: '0px', paddingLeft: '0px', backgroundColor: '#EEEEEE'}}>
            <img src={image4} style ={{height: '100%', width: '100%', objectFit: 'contain'}} className="App-logo" alt="logo" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default Projects;
