import React, {useEffect} from 'react'
import './Home.css'
import layerBaseImage from './img/desktop-1920x1080.jpg'
import layerMiddleImage from './img/bg.png'
import layerFrontImage from './img/layer-front.png'
import {Typography} from '@mui/material'
import TimeLine from '../../TimeLine/TimeLine'
import {AiOutlineDown} from 'react-icons/ai'
import {
  SiReact,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiCss3,
  SiHtml5,
  
} from 'react-icons/si'

import {FaJava , FaPhp} from 'react-icons/fa'
import { MouseOutlined } from '@mui/icons-material'


const Home = ({timelines , skills}) => {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      let scrollY = window.scrollY;
      document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
  
      const skillsBox = document.getElementById("homeSkillsBox");
  
      // By adding the null check (if (skillsBox) { ... }), you prevent trying to access the style property of skillsBox if it is null, which will avoid any potential "Cannot read properties of null" errors.
      if (skillsBox) {
        if (scrollY > 800) {
          skillsBox.style.animationName = "homeSkillsBoxAnimationOn";
        } else {
          skillsBox.style.animationName = "homeSkillsBoxAnimationOff";
        }
      }
    });
  }, []);
  

  return (
    <div className='home'>    
      <div className="wrapper">
        <div className="content">
        <header className="header-main">
            <div className="layers ">
              <div className="layer-head">
                <div className="caption">Welcome To My </div>
                <div className="title"><p>Portfolio</p></div>
              </div>
              <div className="img-layer layer-base" style={{
                backgroundImage: `url(${layerBaseImage})`
              }}></div>
              <div className="img-layer layer-mid" style={{
                backgroundImage: `url(${layerMiddleImage})`
              }}></div>
              <div className="img-layer layer-front" style={{
                backgroundImage: `url(${layerFrontImage})`
              }}></div>
            </div>
          </header>
        </div>
      </div>
      
      <div className="homeScrollBtn">
        <MouseOutlined/>
        <AiOutlineDown/>
      </div>

      <div className="homeContainer">
        <Typography variant='h3'>TIMELINE</Typography>
        <TimeLine timelines = {timelines}/>
      </div>


      <div className="homeskills">
        <Typography variant='h3'>SKILLS</Typography>

        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={skills?.image1.url} alt="Face 1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={skills?.image2.url} alt="Face 2" />
          </div>
          
          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={skills?.image3.url} alt="Face 3" />
          </div>
          
          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={skills?.image4.url} alt="Face 4" />
          </div>
          
          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={skills?.image5.url} alt="Face 5" />
          </div>
          
          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={skills?.image6.url} alt="Face 6" />
          </div>
        </div>

        <div className="homeSkillsBox" id='homeSkillsBox'>
            <FaJava/>
            <SiHtml5/>
            <SiCss3/>
            <SiJavascript/>
            <SiReact/>
            <SiNodedotjs/>
            <SiExpress/>
            <SiMongodb/>
            <FaPhp/>
        </div> 
      </div>
      
    </div>
  )
}

export default Home
