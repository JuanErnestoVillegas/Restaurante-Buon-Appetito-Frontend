import RegisterForm from "../components/RegisterForm/RegisterForm";
import styled from "styled-components";

export const FormContainer = styled.div`
width:100vw;
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`
const Register = () => {
  return (
    <FormContainer>
         <RegisterForm/>
    </FormContainer> 
    );
}
 
export default Register;