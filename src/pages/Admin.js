import { useContext } from "react";
import { Container } from "react-bootstrap";
import { UserContext } from "../context/UserContext";
import AdminABM from "../components/Admin/AdminABM";

const Admin = () => {
  const {user}= useContext(UserContext);
  console.log(user);
    return (
    
      <Container >
                      
       <AdminABM />
      </Container>
    
  );
};

export default Admin;
