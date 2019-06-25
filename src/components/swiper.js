import React from 'react';
import Swiper from 'react-id-swiper/lib/ReactIdSwiper.full';
import { Pagination, Navigation, Mousewheel } from 'swiper/dist/js/swiper.esm'
import esw from '../resources/smallscreens/esw.png';
import map from '../resources/smallscreens/election.png';
import bomb from '../resources/smallscreens/bombing.jpg';
import psl from '../resources/smallscreens/PSL.jpg';
import terror from '../resources/smallscreens/terrormaps.jpg';
import pha from '../resources/smallscreens/pha.png';
import trends from '../resources/smallscreens/trends.png';
import budget from '../resources/smallscreens/budget.png';
import phs from '../resources/smallscreens/sunburst.jpg';

const SimpleSwiper = () => {
  const elections = () => {
    window.open("http://plotree.github.io/elections");
  }

  const phalink = () => {
    window.open("https://gatconsulting.github.io/phainsights/");
  }

  const phstrends = () => {
    window.open("http://bl.ocks.org/saadkhalid90/raw/87d6841ce0bf28196fc0c88c10033e1d/");
  }

  const phschord = () => {
    window.open("https://bl.ocks.org/saadkhalid90/raw/c19143a4a54cc8208aece7762e996983/");
  }

  const terrorlink = () => {
    window.open("https://hasankhalid.github.io/terrorMaps/");
  }

  const ideas = () => {
    window.open("https://hasankhalid.github.io/ideasdash/");
  }

  const eswlink = () => {
    window.open("https://interactive.pcsw-punjab.pk/esw/");
  }

  const psllink = () => {
    window.open("https://plotree.github.io/psl2019/");
  }

  const terrorYoutube = () => {
    window.open("https://www.youtube.com/watch?v=xjA10STwlCw");
  }

  const params = {
    modules: [Pagination, Navigation, Mousewheel],
    mousewheel: true,
    slidesPerView: 5,
    spaceBetween: 45,
    speed: 200,
    freeMode: true,
    freeModeMomentumVelocityRatio: 0.3,
    freeModeMomentumRatio: 0.3,
    breakpoints: {
       1024: {
         slidesPerView: 4,
         spaceBetween: 40
       },
       768: {
         slidesPerView: 3,
         spaceBetween: 30
       },
       640: {
         slidesPerView: 2,
         spaceBetween: 20
       },
       320: {
         slidesPerView: 1,
         spaceBetween: 10
       }
     },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  }

  return(
    <div style={{margin: '60px 15px 15px 15px'}}>
      <Swiper {...params}>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => eswlink()}>
            <img src={esw} alt="Economic and Social Wellbeing of Women" className="project_slider_image"></img>
            <p className="project_slider_title">Generating Data to Advance Women's Social and Economic Wellbeing</p>
          </div>
        </div>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => elections()}>
            <img src={map}  alt="General Elections Map" className="project_slider_image"></img>
            <p className="project_slider_title">Pakistan General Elections 2018</p>
          </div>
        </div>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => terrorYoutube()}>
            <img src={bomb} alt="Bombing Heat Map" className="project_slider_image"></img>
            <p className="project_slider_title">18 Years of Bombings in Pakistan in 30 Seconds</p>
          </div>
        </div>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => psllink()}>
            <img src={psl} alt="PSL Batting Statistics" className="project_slider_image"></img>
            <p className="project_slider_title">Batting Statistics in PSL 2017</p>
          </div>
        </div>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => terrorlink()}>
            <img src={terror} alt="Terror Maps" className="project_slider_image"></img>
            <p className="project_slider_title">Terror Maps</p>
          </div>
        </div>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => ideas()}>
            <img src={budget} alt="Punjab Budget Forecast Tool" className="project_slider_image"></img>
            <p className="project_slider_title">Punjab Budget Forecasting Tool</p>
          </div>
        </div>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => phalink()}>
            <img src={pha} alt="PHA M&E Dashboard" className="project_slider_image"></img>
            <p className="project_slider_title">Insights and Trends in PHA Monitoring</p>
          </div>
        </div>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => phschord()}>
            <img src={phs} alt="Reproductive health in Punjab" className="project_slider_image"></img>
            <p className="project_slider_title">Exploring Reproductive Health in Punjab</p>
          </div>
        </div>
        <div className="project_slider_parent">
          <div className="project_slider_box" onClick={() => phstrends()}>
            <img src={trends} alt="Slopgegraphs for Health Indicator Trends in Punjab" className="project_slider_image"></img>
            <p className="project_slider_title">Trends in Health Indicators in Punjab</p>
          </div>
        </div>
      </Swiper>
    </div>
  )
}

export default SimpleSwiper;
