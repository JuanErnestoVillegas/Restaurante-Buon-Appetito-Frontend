import { useContext, useEffect, useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
import Swal from "sweetalert2";
import { LOGIN_VALUES } from '../../constants';
import { UserContext } from '../../context/UserContext';
import { validationLogin } from '../../helpers/validations';
import {BiUserPin} from 'react-icons/bi';
import mail from '../mail';
import './LoginForm.css'
import { Link, useNavigate } from 'react-router-dom';
import useForm from "../../hooks/useForm";
import { AiOutlineLogin } from "react-icons/ai";
import ModalRegister from '../ModalRegister/ModalRegister';
import './LoginForm.css';



const LoginForm = () =>{
  const [error, setError] = useState(null); 
  const {user, login, auth} = useContext(UserContext);


  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const navigate = useNavigate();
  useEffect(()=>{
    if(auth){      
      const userActivo = user?.name;
      sweetalert2('Bienvenido!', userActivo);
      navigate('/products');      
    }
 },[auth,user]);
  
  const sweetalert2 = (titulo, msj) =>{
    let timerInterval;
    Swal.fire({
      title: titulo,
      html: msj,
      timer: 2000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
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

  const { handleKeyUp, handleSubmit, values, errors} = useForm(LOGIN_VALUES, login, validationLogin) 
 
  return (
    <div className="background-login">
    <div className="login-portada">
      <div className="login-portada-text">
        {/* <BiUserPin className="login-icon"/> */}
        <Form className="mt-2" onSubmit={handleSubmit}>
        <AiOutlineLogin className="login-icon" />
          <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              onKeyUp={handleKeyUp}
              type="email"
              placeholder="Enter email"
              name="email"
            />
            <Form.Text className="text-muted">
              No compartiremos tu correo con nadie más.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-1" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              onKeyUp={(e) => handleKeyUp(e)}
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>
          <div className="container-buttons">
            <Button
              variant="success"
              className="login-button mt-1 mb-1"
              type="submit"
            >
              Ingresar
            </Button>
            <Button variant="light" onClick={handleShow} className="login-button mt-1 mb-1">
               Registrarse
            </Button>

            {/* <Button
              variant="light"
              className="login-button mt-1 mb-1"
              type="submit"
            >

                     <Link to={`/register`}>
                            Registrarse
                    </Link>


            </Button> */}
            <Button
              variant="danger"
              className="login-button mt-1 mb-1 d-flex center"
              type="submit"
            >
                     <Link to={`/mail`}>
                     Olvidé mi contraseña
                    </Link>
              
            </Button>
          </div>
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
      </div>
      </div>
      <ModalRegister
          show={show}
          handleClose={handleClose}
          setUsers={setUsers}
          users={users}
        />
    </div>
  );
};

export default LoginForm;