import React from 'react'
import { Nav } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import './socialIcons.css'

const SocialIcons = () => {
  return (
    <Nav className='social-icons'>
      <Nav.Link href="" ><img src={navIcon1} alt='' /></Nav.Link >
      <Nav.Link href="" ><img src={navIcon2} alt='' /></Nav.Link >
      <Nav.Link href="" ><img src={navIcon3} alt='' /></Nav.Link >
      <Nav.Link href="" ><img src={navIcon1} alt='' /></Nav.Link >
      <Nav.Link href="" ><img src={navIcon3} alt='' /></Nav.Link >
    </Nav>
  )
}

export default SocialIcons
