import React from 'react';
import './skills.scss'

import figma from './assets/figmaLogo.png';
import jquery from './assets/jqueryLogo.png';
import node from './assets/nodeLogo.png';
import pg from './assets/pgLogo.png';
import ae from './assets/aeLogo.png';
import rails from './assets/railsLogo.png';
import react from './assets/reactLogo.png';
import shopify from './assets/shopifyLogo.png';

const allSkills = {
  Frontend: [react, jquery],
  Backend: [rails, node, pg],
  Design: [figma, ae],
  eCommerce: [shopify]
}

const Skills = () => {
  return(
    <div id="skills">
      <h2>SKILLS</h2>
      <div className="all-skills">
        {
          Object.keys(allSkills).map( key => {
            return(
              <div key={key} className="skill">
                <h3>{key}</h3>
                <div className="pic-skills">
                {
                  allSkills[key].map((img,index) => {
                    return <img src={img} key={index} alt={"skill-"+index}/>
                  })
                }
                </div>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default Skills;