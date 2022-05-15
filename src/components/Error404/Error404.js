import "./Error404.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import error_404 from "../../assets/img/404/error_404.png";

const Error404 = () => {
  const Navigate = useNavigate();

  return (
    <div className="background_error">
      <div className="error404 ">
        <img src={error_404}></img>
        <p className="text_error mx-2">
          Lo sentimos, la página esta en reparación! <br /> Vuela al Inicio!
        </p>

        <Button
          variant="secondary"
          className="mx-5"
          onClick={() => Navigate("/")}
        >
          Volver al Inicio
        </Button>
      </div>
    </div>
  );
};

export default Error404;
