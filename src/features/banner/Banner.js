import React from 'react'
import { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from '../../assets/img/header-img.svg';
import './banner.css'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const toRotate = ['I am a software developer', 'I have skills in Frontend and Backend']
  const [timeInterval, setTimeInterval] = useState(300 - Math.random()*100)
  const period = 2000;

  const tick = () => {
  let i = loopNum % toRotate.length
  let fullText = toRotate[i]
  let upDateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

  setText(upDateText)

  isDeleting ? setTimeInterval(preTimeInterval => preTimeInterval / 2) : null
  isDeleting ? null : setTimeInterval(500)

  if(!isDeleting && fullText === upDateText){
    setIsDeleting(true)
    setTimeInterval(period)
  } else if (isDeleting && upDateText === '') {
    setIsDeleting(false)
    setLoopNum(loopNum + 1)
  }
}

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, timeInterval)

    return () => {clearInterval(ticker)}
  }, [text, timeInterval])
  return (
    <section className="banner" id="home">
      <Container >
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7} >
            <span className="tagline">Welcome to my portfolio</span>
            <h1 className="text-rotate">{`Hi I'm Ndorrh. `} <span className="wrap">{text}</span></h1>
            <p>I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
            <div className="connect-resume">
            <Button variant="primary" onClick={() => console.log('Connect')} className="navbar-text" >Let&apos;s connect <ArrowRightCircle size={25} /></Button>
              <Button variant="primary" 
              className="navbar-text" 
              href={require('../../assets/CV/NdorrhCv.pdf')}
              target="_blank" 
              rel="noreferrer"
              >Get my Resume</Button>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header image" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
