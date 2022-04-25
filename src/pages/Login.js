// import LoginForm from "../components/LoginForm/LoginForm";
// import styled from "styled-components";

// export const FormContainer = styled.div`
// width:100vw;
// height:70vh;
// display:flex;
// justify-content:center;
// align-items:center;
// `
// const Login = () => {
//   return (
//     <FormContainer>
//          <LoginForm/>
//     </FormContainer> 
//     );
// }
 
// export default Login;

import LoginForm from "../components/LoginForm/LoginForm";
import styled from "styled-components";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/Footer/Footer";

export const FormContainer = styled.div`
widht:100vw
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`;

const Login = () => {
  return (
    <>
      <Navbar />
      <FormContainer>
        <LoginForm />
      </FormContainer>
      <Footer />
    </>
  );
};

export default Login;