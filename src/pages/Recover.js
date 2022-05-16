import RecoverForm from "../components/RecoverForm/RecoverForm";
import styled from "styled-components";

export const FormContainer = styled.div`
widht:100vw
height:70vh;
display:flex;
justify-content:center;
align-items:center;
`;

const Recover = () => {
  return (
    <>
      <FormContainer>
        <RecoverForm />
        </FormContainer>
    </>
  );
};

export default Recover;