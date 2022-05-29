import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { ADD_PRODUCT_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";
import "./AddModal.css";
import file from "./../../assets/img/cardspizza.jpg"
import { useEffect } from "react";

const AddModal = ({image, show, handleClose, setProducts, products }) => {
  const addProduct = async (info) => {
    try {
      const response = await axiosClient.post("/products", info);
      setValues(response.data.product);
      console.log(response.data);
      setProducts([...products, response.data.productadd]);
    } catch (error) {
      console.log(error);
    }
  };


 const { setValues, handleSubmit, handleKeyUp } = useForm(ADD_PRODUCT_VALUES, addProduct);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Agregar Producto</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit} className="h-100">
          <FloatingLabel
            controlId="floatingInput"
            label="Producto"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Prod"
              onKeyUp={handleKeyUp}
              name="name"
              className=""
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Descripcion"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="Descrip"
              onKeyUp={handleKeyUp}
              name="description"
              className=""
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingPassword"
            label="Precio"
            className="mb-3 floating"
          >
            <Form.Control
              type="Number"
              placeholder="P"
              onKeyUp={handleKeyUp}
              name="price"
              className=""
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingPassword"
            label="Imagen"
            className="mb-3 floating"
          >
            <Form.Control
              type="url"
              placeholder="Img"
              onKeyUp={handleKeyUp}
              name="image"
              className=""
              defaultValue={image}
            />
          </FloatingLabel>
          <Button
            className="m-1 modal-boton"
            type="submit"
            onClick={handleClose}
          >
            Agregar
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AddModal;
