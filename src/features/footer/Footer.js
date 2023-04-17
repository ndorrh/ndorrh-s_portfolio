import { Container, Row, Col } from "react-bootstrap";
import SocialIcons from "../../common/SocialIcons";
import logo from "../../assets/img/logo.svg";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import './footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="footer-log">
            <img src="https://avatars.githubusercontent.com/u/106782840?s=400&u=c0d4be2a94274e11b351ca54d4106bd5adc886bf&v=4" alt="Logo" style={{ width: 50, height: 50, borderRadius: 50 }} />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social-icon">
              <SocialIcons />
            </div>
            <p>Copyright 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}