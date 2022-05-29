import LoginForm from "../components/LoginForm/LoginForm";
import { Container } from "react-bootstrap";

const Login = () => {
  return (
    <>

      <Container fluid={true} className="p-0">
        <LoginForm />
      </Container>

    </>
  );
};

export default Login;