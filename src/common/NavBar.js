import Container from 'react-bootstrap/Container';
import SocialIcons from './SocialIcons';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from 'react';
import './NavBar.css'

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [bgColor, setBgColor] = useState("")

  const changeBgColor = () => {
    if (window.innerWidth < 769 ) {
      setBgColor("#000000")
    }else {
      setBgColor("")
    }
  }

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    const bgColorLgScreen = () => window.innerWidth > 768 ? setBgColor("") : setBgColor("#000000") 

    window.addEventListener('resize', bgColorLgScreen);
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const updateActiveLink = (link) => {
    setActiveLink(link)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled " : ""} onClick={changeBgColor} style={{backgroundColor: bgColor}}>
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://avatars.githubusercontent.com/u/106782840?s=400&u=c0d4be2a94274e11b351ca54d4106bd5adc886bf&v=4" alt="Logo" style={{ width: 50, height: 50, borderRadius: 50 }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
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
          <Button variant="primary" href="#connect" className="navbar-text" style={{ marginLeft: 10 }}>Let&apos;s connect</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;