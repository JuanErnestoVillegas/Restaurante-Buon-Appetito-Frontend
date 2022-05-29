//Register JUAN

import { useEffect, useState } from "react";
import { Container, Table, Button } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import ModalRegister from '../ModalRegister/ModalRegister';
import ModalEditRegister from "../ModalEditRegister/ModalEditRegister";
import './RegisterForm.css'


const RegisterForm = () => {
  const [users, setUsers] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleShowEdit = () => setShowEdit(true);
  const handleCloseEdit = () => setShowEdit(false);


  const getUsers = async () => {
    try {
      const response = await axiosClient.get("/users/");
      setUsers(response.data.users);
      console.log(response.data.users);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async () => {
    try {      
      await axiosClient.delete("users/"+selected);      
      setUsers(users.filter((user) => user._id !== selected));

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
     <div className="register">
      <Container >
        <Button variant="success" onClick={handleShow} className="m-3">
          Agregar Usuario
        </Button>
        <Button variant="danger" onClick={deleteUser}>
          Borrar Usuario
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
               <th>id</th>
               <th>Nombre</th>
               <th>Apellido</th>
               <th>Email</th>
               <th>Rol</th>
            </tr>
          </thead>
          <tbody>

            {users.map((user) =>
              user._id === selected ? (
                <tr
                  key={user._id}
                  onClick={() => setSelected(user._id)}
                  className="selected users"
                >
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                  <Button variant="success" onClick={handleShowEdit} className="m-3">
                      Editar
                  </Button>
                  </td>
                </tr>
              ) : (
                <tr
                  key={user._id}
                  onClick={() => setSelected(user._id)}
                  className="users"
                >
                  <td>{user._id}</td>
                  <td>{user.name}</td>
                  <td>{user.lastname}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                  <Button variant="success" onClick={handleShowEdit} className="m-3">
                      Editar
                  </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <ModalRegister
          show={show}
          handleClose={handleClose}
          setUsers={setUsers}
          users={users}
        />
        <ModalEditRegister show={showEdit} handleClose={handleCloseEdit} selected={selected} getUsers={getUsers}/>
      </Container>
      </div>
    </>
  );
};

export default RegisterForm;

