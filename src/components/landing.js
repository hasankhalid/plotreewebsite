import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import FauxDonut from './donut.js'
import IoAndroidArrowDropdownCircle from 'react-icons/lib/io/android-arrow-dropdown-circle'

class Landing extends Component {
  startButtonClick = () => {
      window.scroll({
        top: window.innerHeight - 80,
        left: 0,
        behavior: 'smooth'
      });
  }

  render () {
    return (
      <div className="landing" id="landing">
        <Grid style={{height: '100%'}}>
          <Row className="show-grid" style={{height: '100%'}}>
            <Col lg={12} md={12} sm={12} xs={12} style={{height: 'calc(100% - 125px)', marginTop: '125px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
              <FauxDonut/>
              <h1 className="landingBanner">we find hidden stories from your data</h1>
              <IoAndroidArrowDropdownCircle className="startButt" onClick={(e) => this.startButtonClick()} size={45}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Landing;
