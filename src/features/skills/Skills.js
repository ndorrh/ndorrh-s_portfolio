import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from 'react-bootstrap';
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';

const Skills = () => {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
      <div>
        <Row>
          <Col>
              <h2>Skills</h2>
              <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                  <img src={meter1} alt="Skill" />
                  <h5>Github</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Skill" />
                  <h5>Terminal</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Skill" />
                  <h5>Chrome Developer tool</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Skill" />
                  <h5>Postgresql</h5>
                </div>
              </Carousel>
          </Col>
        </Row>
      </div>
  )
}

export default Skills