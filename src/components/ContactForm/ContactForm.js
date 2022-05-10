import {useForm}from "../../hooks/useForm";
import { useEffect, useState } from "react";
import axiosClient from "../../config/axiosClient";
import {Form, Button, Row, Col} from "react-bootstrap";
import { CONTACT_VALUES } from '../../constants';
import './ContactForm.css';
import { validationContact } from "../../helpers/validations";

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

  // const addUser = async (info) => {
  //   try {
  //     const response = await axiosClient.post("/users", info);
  //     console.log(response.data);
  //     setUsers([...users, response.data.useradd]);  
  //   } catch (error) {
  //     console.log(error.response.data.msg);               
  //     sweetalert2("Error", error.response.data.msg);
  //   }
  // };

  useEffect(() => {
    getUsers();
  }, []);

//  const { handleKeyUp, handleSubmit, values, errors} = useForm(CONTACT_VALUES, login, validationContact) 
 
  return (
    <div className="background-contact">
      <div className="contact-portada">
        <div className="contact-portada-text">
          {/* <Form onSubmit={handleSubmit}>
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
          </Form> */}
          ;
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

