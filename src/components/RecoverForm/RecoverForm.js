import React, { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import axiosClient from "../../config/axiosClient";
import {RECOVER_VALUES} from '../../constants';
import {validationMail} from '../../helpers/validations';  

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
     
  const verificarMail = async (values) =>{
     try {      
      console.log(values);
      const response = await axiosClient.post("/users/recover", values);
      console.log(response.data);
      
      if (!response.data.isEmailExist) {
          sweetalert2('Error', 'El usuario no está registrado con ese email.');        
      } else{
        sweetalert2('OK', 'El email fue enviado.');
        navigate('/login');
      }
      
    } catch (error) {
      console.log(error);
      sweetalert2('Error', 'El usuario no está registrado con ese email.');  
    }
  }



const {handleKeyUp, handleSubmit, errors} = useForm(RECOVER_VALUES, verificarMail, validationMail)

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