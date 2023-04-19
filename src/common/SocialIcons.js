import React from 'react'
import { Nav } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import github from '../assets/projectImages/github.png'
import twitter from '../assets/projectImages/twitter.png'
import facebook from '../assets/projectImages/facebook.png'
import navIcon3 from '../assets/img/nav-icon3.svg'
import './socialIcons.css'

const SocialIcons = () => {
  return (
    <Nav className='social-icons'>
      <Nav.Link href="https://www.linkedin.com/in/ndorrhoswaldebu" className="socialImg" target='_blank'><img src={navIcon1} alt='' /></Nav.Link >
      <Nav.Link href="https://github.com/ndorrh" className="socialImg" target='_blank'><img src={github} alt='github' /></Nav.Link >
      <Nav.Link href="https://www.twitter.com/NdorrhEbu" className="socialImg" target='_blank'><img src={twitter} alt='twitter' /></Nav.Link >
      <Nav.Link href="#" className="socialImg" target='_blank'><img src={navIcon3} alt='instagram' /></Nav.Link >
      <Nav.Link href="#" className="socialImg" target='_blank'><img src={facebook} alt='' /></Nav.Link >
    </Nav>
  )
}

export default SocialIcons
