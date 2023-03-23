import React from 'react';
import { useState } from 'react';
import { Col, Button, Row, Container } from 'react-bootstrap';
import contactImg from '../../assets/img/contact-img.svg';
import './contact.css';

const Contact = () => {
  const formInitialDetails = {
    lastName: '',
    firstName: '',
    email: '',
    message: '',
    phone: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [formErrors, setFormErrors] = useState({});
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const onFormUpdate = (key, value) => {
    setFormDetails({
      ...formDetails,
      [key]: value,
    })
  }

  const validateForm = (formData) => {
    let errors = {};
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailRegExp.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    }
    if (!formData.message) {
      errors.message = 'Message is required';
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText('Sending...');
    const errors = validateForm(formDetails);
    setFormErrors(errors);
    if (Object.values(formErrors).length === 0) {
      const data = {
        ...formDetails,
      }
      fetch('https://formspree.io/f/mrgvaakg', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then((response) => {
          if (response.status === 200) {
            setStatus({
              success: true,
              message: 'Message sent successfully',
            })
            setButtonText('Send');
            setFormDetails(formInitialDetails);
          } else {
            setStatus({
              success: false,
              message: 'Message not sent',
            })
            setButtonText('Send');
          }
        })
        .catch((error) => {
          setStatus({
            success: false,
            message: 'Message not sent',
          })
          setButtonText('Send');
        })
    } else {
      setFormErrors(errors);
      setButtonText('Send');
    }
  }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-centre">
          <Col md={6}>
            <img src={contactImg} alt="contact image" />
          </Col>

          <Col md={6}>
            <h1>Get In Touch</h1>
            <form onSubmit={handleSubmit} noValidate>
              <Row>
                <Col className="px-1" sm={6}>
                  <p className="error">{formErrors.firstName}</p>
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col className="px-1" sm={6}>
                  <p className="error">{formErrors.lastName}</p>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>

                <Col className="px-1" sm={6}>
                  <p className="error">{formErrors.email}</p>
                  <input
                    type="email"
                    placeholder="Email"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>

                <Col className="px-1" sm={6}>
                  <p className="error">{formErrors.phone}</p>
                  <input
                    type="tel"
                    placeholder="Telephone No."
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>

                <Col className="px-1" >
                  <p className="error">{formErrors.message}</p>
                  <textarea
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  ></textarea>
                  <Col className="px-1" >
                    <button type="submit"><span>{buttonText}</span></button>  {
                      status.message &&
                      <span className={status.success === false ? "danger" : "success"}>{status.message}</span>
                    }
                  </Col>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact