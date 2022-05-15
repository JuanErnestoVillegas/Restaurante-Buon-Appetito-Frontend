import { useState } from "react";
import {Form, Button, Row, Col, Alert} from "react-bootstrap";
import { CONTACT_VALUES } from '../../constants';
import { validationContact } from "../../helpers/validations";
import { useNavigate } from 'react-router-dom';
import axiosClient from "../../config/axiosClient";
import useForm from "../../hooks/useForm";
import Swal from "sweetalert2";
import './ContactForm.css';

const ContactForm = () =>{

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const navigate = useNavigate();

  const sweetalert2 = (titulo, msj) =>{
    let timerInterval;
    Swal.fire({
      title: titulo,
      html: msj,
      timer: 1000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {          
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        
      }
    })

  }


    
  const enviarMail = async (values) =>{
     try {      
      console.log(values);
      const response = await axiosClient.post("/users/mailcons", values);
      console.log(response.data);
      
      if (!response.data.isEmailSend) {
          sweetalert2('Error', 'No se pudo enviar la consulta.');        
      } else{
        sweetalert2('OK', 'La consulta fue enviada con éxito.');
        navigate('/');
      }
      
    } catch (error) {
      console.log(error);        
    }
  }


  const enviar = (values) => {

      if ((name.values !=='') && (lastname.values !=='') && (email.values !=='') && (message.values !=='')) {
          //envio mail
          enviarMail(values);
          sweetalert2('OK', 'Su consulta fue enviada.');
          setName('');
          setLastname('');
          setEmail('');
          setMessage('');
          setEmailSent(true);
          navigate('/');
      } else {
          alert('Complete todos los campos.');
      }
  }

 const { handleKeyUp, handleSubmit, values, errors} = useForm(CONTACT_VALUES, enviar, validationContact) 
 
  return (
    <div className="background-contact">
      <div className="contact-portada">
        <div className="contact-portada-text">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Col>
                 <Form.Control
                    onKeyUp={handleKeyUp}
                    type="text"
                    placeholder="Nombre"
                    name="name"
                  />
              </Col>
              <Col>
              <Form.Control
                    onKeyUp={handleKeyUp}
                    type="text"
                    placeholder="Apellido"
                    name="lastname"
                  /> 
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tu dirección de email</Form.Label>
              <Form.Control
                    onKeyUp={handleKeyUp}
                    type="email"
                    placeholder="name@example.com"
                    name="email"
                  /> 
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Escribe tu consulta por favor</Form.Label>
              <Form.Control 
                    onKeyUp={handleKeyUp}
                    as="textarea" 
                    rows={3} 
                    name="message"
              />
            </Form.Group>
            <Button
              variant="danger"
              className="login-button mt-2 mb-2 d-flex center"
              type="submit"
            >
              ENVIAR FORMULARIO
            </Button>
            <div className="errors">
            {Object.keys(errors).length === 0
              ? null
              : Object.values(errors).map((error, index) => (
                  <Alert key={index} variant="danger" className="mt-0">
                    {error}
                  </Alert>
                ))}
          </div>
          </Form>
          ;
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

