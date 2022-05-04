import {useForm}from "../../hooks/useForm";
import { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import {Form, Button, Row, Col} from "react-bootstrap";
import {MdOutlineContactSupport} from "react-icons/md";
import './ContactForm.css';

const ContactForm = () =>{
  const [setUsers] = useState([]);
  

  const getUsers = async () => {
    try {
      const response = await axiosClient.get("/users/");
      setUsers(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getUsers();
  }, []);

  // const { handleKeyUp, handleSubmit, values, errors} = useForm(LOGIN_VALUES, login, validationLogin) 


  
  return (
    <div className="background-contact">
<<<<<<< HEAD
      <div className="contact-portada">
        <div className="contact-portada-text">
          <Form onSubmit={handleSubmit}>
=======
      <div className="contact_content">
        <div >
          <Form>
          <MdOutlineContactSupport className="login-icon text-reset py-2" />

>>>>>>> 8d4f24497972d18ad545f523cbf22655b72f4388
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
              <Form.Control type="email" placeholder="name@example.com" />
               <Form.Control
                    onKeyUp={handleKeyUp}
                    type="text"
                    placeholder="Nombre"
                    name="name"
                  /> 
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Escribe tu consulta por favor</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Button
              variant="danger"
              className="login-button mt-2 mb-2 d-flex center"
              type="submit"
            >
              ENVIAR FORMULARIO
            </Button>
          </Form>
          ;
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

