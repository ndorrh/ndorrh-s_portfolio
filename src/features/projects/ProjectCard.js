/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import { Col, Button, Modal, Container } from 'react-bootstrap';
import Technologies from './Technologies';

const ProjectCard = ({title, description, imgUrl, technologies}) => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  const handleShow = (breakpoint) => {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <Col sm={6} md={4}>
      <div className="project-imgbx">
        <img src={require(`../../assets/projectImages/${imgUrl}`)} alt="Image" />
        <div className="project-info">
          <h4>{title}</h4>
          <span>{description}</span>
          <Technologies technologies={technologies} />
          <>

            <Button className="me-2 mb-2" onClick={() => handleShow(true)} variant="primary">
              See project
            </Button>
            <Container >
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Modalhbkjbkb</Modal.Title>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
            </Modal>
            </Container>
          </>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard