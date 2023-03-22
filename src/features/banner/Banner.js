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
  const toRotate = ['Web Developer', 'Web Design', 'UI/UX Design', 'Android Development']
  const [timeInterval, setTimeInterval] = useState(300 - Math.random()*100)
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let upDateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(upDateText)

    if(isDeleting) {
      setTimeInterval(preTimeInterval => preTimeInterval / 2)
    }

    if(!isDeleting && fullText === upDateText){
      setIsDeleting(true)
      setTimeInterval(period)
    } else if (isDeleting && upDateText === '') {
      setIsDeleting(false)
      setTimeInterval(500)
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
            <h1 className="text-rotate">{`Hi I'm Ndorrh `} <span className="wrap">{text}</span></h1>
            <p>Full-Stack Web Developer. JavaScript, Rails, React, Redux. Improving open-source projects, one commit at a time and love remote work</p>
            <Button variant="primary" onClick={() => console.log('Connect')} className="navbar-text" >Let&apos;s connect <ArrowRightCircle size={25} /></Button>
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
