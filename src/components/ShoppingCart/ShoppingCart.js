import "./ShoppingCart.css";
import { Table, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";
import {Link} from "react-router-dom";
import Total from "../Total/Total";

const Carrito = () => {
  return (
    <Container className="m-3">
      <h3>Resumen de Compra</h3>
      <ListGroup>
        <ListGroup.Item className="w-100 m-5">
          <p>PRODUCTOS ELEGIDOS</p>
          <Button variant="danger" className="float-right m-2">
            Borrar Producto
          </Button>
          <Button variant="success">
          <Link to="/errorPage" className="text-reset text-decoration-none m-1">Pagar</Link>
          </Button>
        </ListGroup.Item>
      </ListGroup>
      <Total/>
    </Container>
  );
};

export default Carrito;
