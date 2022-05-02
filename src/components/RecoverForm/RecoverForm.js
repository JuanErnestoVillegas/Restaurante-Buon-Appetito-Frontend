import React, { useState, useContext } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import Swal from "sweetalert2";
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import axiosClient from "../../config/axiosClient";
import {RECOVER_VALUES} from '../../constants';
import {validationMail} from '../../helpers/validations';  
// import mail from '../mail';

import useForm from "../../hooks/useForm";
import './RecoverForm.css';



const RecoverForm = () =>{
  const sweetalert2 = (titulo, msj) =>{
    Swal.fire({
      title: titulo,
      html: msj,
     })
  
  }


  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const {getPassword} = useContext(UserContext);
  // const {getPassword} = useContext(UserContext);

  let existe = false;
  
  const verificarMail = async (values) =>{
     try {
      const response = await axiosClient.post("/users/recover", { email: values });
      console.log(response.data);
      if (!response.data.isEmailExist) {
          sweetalert2('Error', 'El usuario no está registrado con ese email.');        
      } else{
        sweetalert2('OK', 'El email fue enviado.');
      }
      
    } catch (error) {
      console.log(error);
    }
  }



const {handleKeyUp, handleSubmit, errors} = useForm(RECOVER_VALUES, getPassword, validationMail)

  return (
   <Form className="mt-2" onSubmit={handleSubmit}>
    <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control
        onKeyUp={handleKeyUp}
        type="email"
        placeholder="Enter email"
        name="email"
      />
    </Form.Group>
      <Button
        variant="success"
        className="login-button mt-1 mb-1"
        type="submit"
      >
        Aceptar
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
        )
  };


export default RecoverForm;