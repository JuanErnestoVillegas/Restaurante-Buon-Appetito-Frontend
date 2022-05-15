import React, {useEffect , useContext} from "react";
import { Modal, Button, FloatingLabel, Form, Alert } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { REGISTER_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../context/UserContext";

const ModalEditRegister = ({show, handleClose,selected, getUsers}) => {
    const {auth, user} = useContext(UserContext);

    const getUser = async () => {
        try {
          const response = await axiosClient.get("/users/user/"+selected);
          setValues(response.data.user);
          console.log(response.data.user);
        } catch (error) {
          console.log(error);
        }
      };

  const updateUser = async (info) =>{
    try {
      await axiosClient.put('/users/'+selected,info);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>{
    getUser();
  },[selected])

  const {values, setValues, handleSubmit, handleKeyUp} = useForm(REGISTER_VALUES, updateUser)

  return ( 
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Editar Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
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
              defaultValue={values.name}
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
              defaultValue={values.lastname}
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
              defaultValue={values.email}
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
              defaultValue={values.password}
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
          <Button className="primary-button" type="submit" onClick={handleClose}> Editar</Button>      
        </form>
        </Modal.Body>
      </Modal>
  );
}
 
export default ModalEditRegister;