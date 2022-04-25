import React, {useState, useContext} from "react";
import { Modal, Button, FloatingLabel, Form, Alert } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { REGISTER_VALUES } from "../../constants";
import { validateRegister } from '../../helpers/validations';
import useForm from "../../hooks/useForm";
import "./ModalRegister.css";
import { UserContext } from "../../context/UserContext";
import Swal from "sweetalert2";


const sweetalert2 = (titulo, msj) =>{
  Swal.fire({
    title: titulo,
    html: msj,
   })

}

const ModalRegister = ({ show, handleClose, setUsers, users }) => {
  // const [errorsR, setErrorsR] = useState(null); 
  const {auth, user} = useContext(UserContext);
  
  const addUser = async (info) => {
    try {
      const response = await axiosClient.post("/users", info);
      console.log(response.data);
      setUsers([...users, response.data.useradd]);  
    } catch (error) {
      console.log(error.response.data.msg);               
      sweetalert2("Error", error.response.data.msg);
    }
  };

  // const { handleSubmit, handleKeyUp } = useForm(REGISTER_VALUES, addUser);
   const { handleSubmit, handleKeyUp, values, errors } = useForm(REGISTER_VALUES, addUser, validateRegister);

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
          user?.role=='ADMIN'?          
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