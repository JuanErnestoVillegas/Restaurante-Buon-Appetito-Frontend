import { Col } from "react-bootstrap";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DetailsProduct = () => {

    return ( 
      <>
        <Col xs={6}>
          <img
            className="w-100"
            src=''
          />
        </Col>
        <Col xs={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Text className="text-danger">
                <h2>Precio:  </h2>
              </Form.Text>
              <Form.Text className="text-dark">
                <h3>Nombre:</h3>
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
            <Button variant="success" type="submit" className="me-3 cartButton">
              Agregar al Carrito
            </Button>
            <Button variant="secondary" className="me-3">
              Volver
            </Button>
          </Form>
        </Col>
    </>
    )
};
 
export default DetailsProduct
