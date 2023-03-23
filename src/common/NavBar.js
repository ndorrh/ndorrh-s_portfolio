import Container from 'react-bootstrap/Container';
import SocialIcons from './SocialIcons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import './NavBar.css'
import logo from '../assets/img/logo.svg'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const updateActiveLink = (link) => {
    setActiveLink(link)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""} >
      <Container>
        <Navbar.Brand href="#home">
          <img src= {logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink == 'home' ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink('home')} >Home</Nav.Link>
            <Nav.Link href="#Skills" className={activeLink == 'skills' ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#Projects" className={activeLink == 'projects' ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#connect" className={activeLink == 'connect' ? "active navbar-link" : "navbar-link"} onClick={() => updateActiveLink('connect')}>Contact</Nav.Link>
          </Nav>
          <SocialIcons />
          <Button variant="primary" onClick={() => console.log('Connect')} className="navbar-text" >Let&apos;s connect</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;