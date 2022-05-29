import React, { useContext} from "react";
import { Modal, Button, FloatingLabel, Form, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axiosClient from "../../config/axiosClient";
import { REGISTER_VALUES } from "../../constants";
import { validationRegister } from '../../helpers/validations';
import useForm from "../../hooks/useForm";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";
import "./ModalRegister.css";



const ModalRegister = ({ show, handleClose, setUsers, users }) => {
  
  const {auth, user} = useContext(UserContext);
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
     const response = await axiosClient.post("/users/mailsus", values);
     console.log(response.data);   
     if (!response.data.isEmailSend) {
         sweetalert2('Error', 'No se pudo enviar el mail.');        
     } else{
       sweetalert2('OK', 'Registrado con éxito.');
       navigate('/');
     }
     
   } catch (error) {
     console.log(error);        
   }
  }


  const addUser = async (info) => {
    try {
      const response = await axiosClient.post("/users", info);
      console.log(response.data);
      setUsers([...users, response.data.useradd]); 
      enviarMail(info);
    } catch (error) {
      console.log(error.response.data.msg);               
      sweetalert2("Error", error.response.data.msg);
    }
  };

  const { handleSubmit, handleKeyUp, values, errors } = useForm(REGISTER_VALUES, addUser, validationRegister);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
       <form onSubmit={handleSubmit} className="h-100">
          <FloatingLabel
            controlId="floatingInput"
            label="Nombre"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Nombre"
              onKeyUp={handleKeyUp}
              name="name"
              className=""
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Apellido"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Apellido"
              onKeyUp={handleKeyUp}
              name="lastname"
              className=""
            />
          </FloatingLabel>  
          <FloatingLabel
            controlId="floatingInput"
            label="Email"
            className="mb-3 floating"
          >
            <Form.Control
              type="email"
              placeholder="Email"
              onKeyUp={handleKeyUp}
              name="email"
              className=""
            />
          </FloatingLabel>                              
          <FloatingLabel
            controlId="floatingPassword"
            label="Password"
            className="mb-3 floating"
          >
            <Form.Control
              type="password"
              placeholder="Password"
              onKeyUp={handleKeyUp}
              name="password"
              className=""
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Password2"
            className="mb-3 floating"
          >
            <Form.Control
              type="password"
              placeholder="Password2"
              onKeyUp={handleKeyUp}
              name="password2"
              className=""
            />
          </FloatingLabel>  
             {
          user?.role==='ADMIN'?          
              <Form.Select name="role" id="roleSelect" onChange={handleKeyUp}>
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
              
              </Form.Select>
            
            :   
            
            <Form.Select name="role" id="roleSelect" onClick={handleKeyUp}>
              <option value="USER">USER</option>            
            </Form.Select>
          }

          <Button
            className="m-1 modal-boton"
            type="submit"
            onClick={handleClose}
          >
            Agregar
          </Button>
          <div className="errorsR">
            {Object.keys(errors).length === 0
              ? null
              : Object.values(errors).map((error, index) => (
                  <Alert key={index} variant="danger" className="mt-0">
                    {error}
                  </Alert>
                ))}
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default ModalRegister;