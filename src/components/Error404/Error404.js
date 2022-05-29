
import "./Error404.css";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import error_404 from "../../assets/img/404/error_404.png";


const Error404 = () => {
  const Navigate = useNavigate();

  return (
   
    <div className="background_error">

        <Container>

      <div className="error404 ">
      <Button
          variant="success"
          className="m-1"
          onClick={() => Navigate("/")}
          >
          Volver al Inicio
        </Button>
        <img src={error_404}></img>
        <p className="text_error mx-2">
          Lo sentimos, la página esta en reparación!  Vuelva al Inicio!
        </p>


      </div>
          </Container>
              </div>
            
    
  );
};

export default Error404;
