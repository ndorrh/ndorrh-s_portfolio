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
      <Nav.Link href="https://www.linkedin.com/in/ndorrhoswaldebu" class="socialImg"><img src={navIcon1} alt='' /></Nav.Link >
      <Nav.Link href="https://github.com/ndorrh" class="socialImg"><img src={github} alt='github' /></Nav.Link >
      <Nav.Link href="https://www.twitter.com/NdorrhEbu" class="socialImg"><img src={twitter} alt='twitter' /></Nav.Link >
      <Nav.Link href="#" class="socialImg"><img src={navIcon3} alt='instagram' /></Nav.Link >
      <Nav.Link href="#" class="socialImg"><img src={facebook} alt='' /></Nav.Link >
    </Nav>
  )
}

export default SocialIcons
