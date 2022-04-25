import "./ShoppingCart.css";
import { Table, Button, Row, Col, ListGroup } from "react-bootstrap";
import { Container } from "react-bootstrap";

const CarritoCompra = () => {
  return (
    <Container>
      <h3>Resumen de Compra</h3>
      <ListGroup>
        <ListGroup.Item className='w-100'>
            Cras justo odio
            <Button variant='danger' className='float-right'>Borrar Producto</Button>
        </ListGroup.Item>
      </ListGroup>
      <h2>Total a Pagar</h2>
    </Container>
  );
};

export default CarritoCompra;
