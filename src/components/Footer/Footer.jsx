import React from 'react'
import './Footer.css'
import { Typography } from '@mui/material'
import {Link} from 'react-router-dom'
import {BsGithub , BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
      <div>
        <Typography variant='h4'><b>About Me</b></Typography>
        <Typography>
            Hey, My name is Arnab Kumar Pal and I am a Full Stack Developer.
        </Typography>

        <Link to='/contact' className="footerContactBtn">
            <Typography>Contact Me</Typography>
        </Link>
      </div>
      <div>
        <Typography variant='h6'>Social Media</Typography>
        <a href='https://github.com/Arnab2002Pal' target="black">
            <BsGithub/>
        </a>
        <a href='https://www.linkedin.com/in/arnab-pal-37aa09210/' target="black">
            <BsLinkedin/>
        </a>

      </div>
    </div>
  )
}

export default Footer
