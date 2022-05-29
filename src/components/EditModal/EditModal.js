import { useEffect } from "react";
import { Modal, Button, FloatingLabel, Form } from "react-bootstrap";
import axiosClient from "../../config/axiosClient";
import { ADD_PRODUCT_VALUES } from "../../constants";
import useForm from "../../hooks/useForm";
import "./EditModal.css";

const EditModal = ({ show, handleClose, selected, getProducts}) => {
  
    const getProduct = async () => {
    try {
      const response = await axiosClient.get("/products/product/" + selected);
      setValues(response.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (info) => {
    try {
      await axiosClient.put("/products/" + selected, info);
      getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [selected]);

  const { values, setValues, handleSubmit, handleKeyUp } = useForm(
    ADD_PRODUCT_VALUES,
    updateProduct
  );
  console.log(values);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modificar Producto</Modal.Title>
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
              defaultValue={values.name}
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
              defaultValue={values.description}
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
              defaultValue={values.price}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Imagen"
            className="mb-3 floating"
          >
            <Form.Control
              type="text"
              placeholder="img"
              onKeyUp={handleKeyUp}
              name="image"
              className=""
              defaultValue={values.image}
            />
          </FloatingLabel>
          <Button
            className="m-1 modal-boton"
            type="submit"
            onClick={handleClose}
          >
            Modificar
          </Button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
