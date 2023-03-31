/* eslint-disable react/prop-types */
import React from 'react';
import { Badge } from 'react-bootstrap';

const Technologies = ({ technologies }) => {
  let arrTechnologies = Object.values(technologies);

  return (
    <div className="technology">
      <span className="built-with">Built with:</span>
      {
        arrTechnologies.map((tech, index) => <Badge bg="secondary" key={index}>{tech}</Badge>)
      }
    </div>
  )
}

export default Technologies
