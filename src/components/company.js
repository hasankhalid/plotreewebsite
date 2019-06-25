import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'

class Company extends Component {
  render () {
    return (
      <div className="value_prop">
        <Grid>
          <Row className="show-grid">
            <Col lg={12} md={12} sm={12} xs={12}>
              <h1 className="companyBanner">We help reveal the storyteller in your data</h1>
              <p className="twenty grey"><span className="frank_ruhl twenty_t" style={{fontWeight: 700}}>Find hidden stories - </span> We believe that your data is more than just numbers in a database or a spreadsheet. It deserves a stage to reveal fascinating stories to the world.</p>
              <p className="twenty grey"><span className="frank_ruhl twenty_t" style={{fontWeight: 700}}>Communicate insights </span>through custom data visualization tailored to  communicate meaningful insight to your audience</p>
              <p className="twenty grey"><span className="frank_ruhl twenty_t" style={{fontWeight: 700}}>Conduct analysis </span> to make data driven stategy and decisions</p>
              <p className="twenty grey"><span className="frank_ruhl twenty_t" style={{fontWeight: 700}}>Answer your questions - </span>We enable interactive data exploration  so that you can get to the answers you seek</p>
              <p className="twenty getintouch">Get in touch and collaborate with us to bring your data to life on your websites, publications or presentations.</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Company;
