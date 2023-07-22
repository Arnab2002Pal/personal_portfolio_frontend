import React from 'react'
import {ReactNavbar} from "overlay-navbar"
import {FaUserAlt} from "react-icons/fa"
import logo from "../../images/logo.png"

const Header = () => {
  return <ReactNavbar
  navColor1 = " white "
  navColor2 = " #333335 "
  navColor3 = " #333335 "
  navColor4 = " black "
  burgerColor = "white"
  burgerColorHover="black"
  logo={logo}
  logoWidth="250px"
  logoPadding="2rem"
  logoHoverColor="hsl(250 , 100% , 80%)"
  nav2justifyContent = "space-around"
  nav3justifyContent = "space-around"
  link1Text="Home"
  link2Text="About"
  link3Text="Project"
  link4Text="Contact"
  link1Family="Roboto"
  link2Family="Roboto"
  link3Family="Roboto"
  link4Family="Roboto"
  link1Url="/"
  link2Url="/about"
  link3Url="/projects"
  link4Url="/contact"
  link4ColorHover="#fff"
  link3ColorHover="#fff"
  link1ColorHover="white"
  link2ColorHover="white"
  link1Color="HSL(250, 100% , 75%)"
  link1Size="1.5rem"
  link1Padding="2vmax"
  profileIcon={true}
  ProfileIconElement={FaUserAlt}
  profileIconColor="white"
  profileIconColorHover="HSL(250, 100% , 75%)"
  >
    
  </ReactNavbar>
}

export default Header
