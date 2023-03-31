/* eslint-disable react/prop-types */
import React from 'react';
import { useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import ProjectModal from './ProjectModal';

const ProjectCard = ({title, description, imgUrl, technologies, url}) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Col sm={6} md={4}>
      <div className="project-imgbx">
        <img src={require(`../../assets/projectImages/${imgUrl}`)} alt="Image" />
        <div className="project-info">
          <h4>{title}</h4>
          <span>{description}</span>
          <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
              See More
            </Button>

            <ProjectModal
              show={modalShow}
              onHide={() => setModalShow(false)}
              project={{ title, description, imgUrl, technologies, url }}
            />
          </>
        </div>
      </div>
    </Col>
  )
}

export default ProjectCard