import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import "./DetailsProduct.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const DetailsProduct = () => {
  const params = useParams();
  const location = useLocation();
  const [cart, setCart] = useState([""]);
  const handleCart = (e) => {
    e.preventDefault();
    console.log("Apretaste el boton");
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Text className="text-danger">
          <h2>$20</h2>
        </Form.Text>
        <Form.Text>
          <h6>Descripcion detallada del producto</h6>
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Large" className="me-3" />
        <Form.Check type="checkbox" label="Medium" className="me-3" />
        <Form.Check type="checkbox" label="Small" className="me-3" />
      </Form.Group>
      <Button
        onClick={(e) => {
          handleCart(e);
        }}
        variant="success"
        type="submit"
        className="me-3"
      >
        Agregar al Carrito
      </Button>
      <Button variant="white" className="me-3">
        Volver
      </Button>
    </Form>
  );
};

export default DetailsProduct;
