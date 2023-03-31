import React from 'react';
import { projects } from '../../store/projects';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import './project.css'

const Project = () => {
  return (
    <section className="project" id="Projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis tenetur suscipit a minima repellat officiis odit, inventore quo delectus nesciunt veritatis molestias? Dicta, adipisci officiis. Tenetur animi dicta</p>
            <Tab.Container id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link eventKey="first">React</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Rails</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third" >
                    FullStack
                  </Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project) => {
                      return (
                        <ProjectCard
                          key={project.id}
                          title={project.name}
                          description={project.projectDescription}
                          imgUrl={project.feauturedImage}
                          technologies={project.technologies}
                          url={project.url}
                        />
                      )
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="image" />
    </section>
  )
}

export default Project
