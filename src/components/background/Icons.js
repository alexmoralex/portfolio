import React, { useState } from 'react';
import './background.scss';
import Footer from './Footer';

const sunPoints = "m5.602408,30.114835c0,-13.812155 11.187845,-25 25,-25c13.812155,0 25,11.187845 25,25c0,13.812155 -11.187845,25 -25,25c-13.812155,0 -25,-11.187845 -25,-25z"
const moonPoints = "m34,30.11483c0,-13.81215 -17.20975,-25 -3.39759,-25c13.81215,0 25,11.18785 25,25c0,13.81216 -11.18785,25 -25,25c-13.81216,0 3.39759,-11.18784 3.39759,-25z"

const Icons = ({ toDark }) => {

  const [points, setPoints] = useState(sunPoints)
  const [prevPoints, setPrevPoints] = useState(sunPoints)
  

  const togglePoints = () => {
    if (points === sunPoints){
      toDark('App dark')
      setPoints(moonPoints)
      setPrevPoints(sunPoints)
    } else {
      toDark('App')
      setPoints(sunPoints)
      setPrevPoints(moonPoints)
    }
  }

  return(
    <div className="icons">
      <svg id="theme-icon" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d={prevPoints} strokeWidth="4" onClick={togglePoints} >
          <animate attributeName="d" from={prevPoints} to={points} dur="0.5s" begin="click" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.5 0 0.5 1"/>
        </path>
      </svg>
      <Footer />
    </div>
  );
}

export default Icons;