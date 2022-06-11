import React, { useState } from 'react';
import './works.scss';
import bearabyLogo from './assets/bearaby-logo.png';
import bearabyPicture from './assets/bearaby-screenshot.png';
import bbLogo from './assets/bb-logo.png';
import bbPicture from './assets/bb-screenshot.png';
import pillowpakLogo from './assets/pillowpak-logo.png';
import pillowpakPicture from './assets/pillowpak-screenshot.png';
import bdLogo from './assets/bd-logo.png';
import bdPicture from './assets/bd-screenshot.png';
import careLogo from './assets/900care-logo.png';
import carePicture from './assets/900care-screenshot.png';
import springLogo from './assets/spring-logo.png';
import springPicture from './assets/spring-screenshot.png';

const slides = [
  { url: "https://bearaby.com/", logo: bearabyLogo, screenshot: bearabyPicture, color: 'white'},
  { url: "https://www.900.care/", logo: careLogo, screenshot: carePicture, color: 'white'},
  { url: "https://www.wespring.com/", logo: springLogo, screenshot: springPicture, color: 'spring'},
  { url: "http://www.bogotabootcamp.com/", logo: bbLogo, screenshot: bbPicture, color: 'aqua'},
  { url: "https://getpillowpak.com/", logo: pillowpakLogo, screenshot: pillowpakPicture, color: 'white'},
  { url: "http://www.bogotadev.com/", logo: bdLogo, screenshot: bdPicture, color: 'gray'}
]

const Works = () => {

  const [position, setPosition] = useState(0)
  const length = -100 * (slides.length - 1)
  const prevSlide = () => position === 0 ? setPosition(length) : setPosition(position+100)
  const nextSlide = () => position === length ? setPosition(0) : setPosition(position-100)
  const moveSlide = slide => setPosition(slide)

  return(
    <div id="works">
      <h2>WORKS</h2>
        <div className="slider">
          {
            slides.map((item,index) => {
              return(
                <div className={'slide slide-'+item.color} key={index} style={{transform:`translateX(${position}%)`}} >
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img src={item.logo} alt="" className="logo" />
                    <img src={item.screenshot} alt="" className="screenshot"/>
                  </a>
                </div>
              )
            })
          }
        </div>
        <div className="navigation">
          <button className="arrow" onClick={prevSlide}>◀</button>
          {
            slides.map((item,index) => {
              let btn = -100*index
              return(
                <button key={index} className={position === btn ? "dot active" : "dot"} onClick={() => moveSlide(btn)}>●</button>
              )
            })
          }
          <button className="arrow" onClick={nextSlide}>▶</button>
        </div>
    </div>
  );
}

export default Works;
