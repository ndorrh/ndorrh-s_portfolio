/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Technologies from './Technologies';

function ProjectModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project Name: {props.project.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <img src={require(`../../assets/projectImages/${props.project.imgUrl}`)} alt="Image" className="modal-image"/>
        <h4 className="modal-des">Description</h4>
        <span className="modal-description">
          {props.project.description}
        </span>
        <Technologies technologies={props.project.technologies} />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" href={props.project.url.liveDemo} target="_blank" rel="noreferrer">Live demo</Button>
        <Button variant="primary" href={props.project.url.sourceCode} target="_blank" rel="noreferrer">Source</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProjectModal;