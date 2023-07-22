import React from 'react'
import './About.css'
import { Typography } from '@mui/material'


const About = ({about}) => {

  return (

    <div className='about'>
      <div className="aboutContainer">

    <Typography>
        {about?.quote}
    </Typography>

      </div>
      <div className="aboutContainer2">
        <div>
            <img src={about?.avatar.url} alt="Arnab" className='aboutAvatar' />
            <Typography variant='h4'>
              {about?.name}
            </Typography>
            <Typography>
                {about?.title}
            </Typography>
            <Typography>
                {about?.subtitle}
            </Typography>
        </div>
        <div>
            <Typography style={{
                wordSpacing: "2px",
                lineHeight: "30px",
                letterSpacing: "5px",
                textAlign: "right"
            }}>
                {about?.description}
            </Typography>
        </div>
      </div>
    </div>
  )
}

export default About
