import React, { useState } from 'react';
import './background.scss';

const openMenu = [70,80,90];
const closedMenu = [60,40,20]

const Menu = ({ menu, toPage, toOpen }) => {

  let lineArray = []
  const [lines, setLines] = useState(closedMenu)
  const [prevLines, setPrevLines] = useState(closedMenu)

  const animateLines = () => {
    for (let i = 0; i < lineArray.length; i++) {
      lineArray[i].beginElement()
    }
  }

  const toggleLines = () => {
    if (lines === closedMenu){
      toOpen('open')
      setLines(openMenu)
      setPrevLines(closedMenu)
    } else {
      toOpen('')
      setLines(closedMenu)
      setPrevLines(openMenu)
    }
    animateLines()
  }

  const changePage = page => {
    toPage(page)
    toggleLines()
  }

  return(
    <div className={'menu '+menu}>
      <span onClick={toggleLines}>
        <svg id="menu-icon" width="90" height="41" viewBox="0 0 90 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="burger" >
            <line y1="2.5" x2={prevLines[0]} y2="2.5" strokeWidth="5">
              <animate ref={a => lineArray.push(a)} attributeName="x2" from={prevLines[0]} to={lines[0]} dur="1s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.5 0 0.5 1"/>
            </line>
            <line y1="20.5" x2={prevLines[1]} y2="20.5" strokeWidth="5">
              <animate ref={a => lineArray.push(a)} attributeName="x2" from={prevLines[1]} to={lines[1]} dur="1s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.5 0 0.5 1"/>
            </line>
            <line y1="38.5" x2={prevLines[2]} y2="38.5" strokeWidth="5">
              <animate ref={a => lineArray.push(a)} attributeName="x2" from={prevLines[2]} to={lines[2]} dur="1s" fill="freeze" calcMode="spline" keyTimes="0;1" keySplines="0.5 0 0.5 1"/>
            </line>
          </g>
        </svg>
      </span>
      <button onClick={() => changePage('home')} >HOME</button>
      <button onClick={() => changePage('works')} >WORKS</button>
      <button onClick={() => changePage('skills')} >SKILLS</button>
      <button onClick={() => changePage('contact')} >CONTACT</button>
    </div>
  );
}

export default Menu;