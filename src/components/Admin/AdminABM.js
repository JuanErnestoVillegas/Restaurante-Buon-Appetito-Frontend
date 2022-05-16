import { useEffect, useState } from "react";
import { Container, Table, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../../config/axiosClient";
import AddModal from "../AddModal/AddModal";
import EditModal from "../EditModal/EditModal";
import "./AdminABM.css";
import pizza from "../../assets/LandingImg/pizza.jpg";


const AdminABM = () => {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleClose = () => setShow(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShow = () => setShow(true);
  const handleShowEdit = () => setShowEdit(true);

  const getProducts = async () => {
    try {
      const response = await axiosClient.get("/products");
      setProducts(response.data.products);
      console.log(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteProduct = async () => {
    try {
      await axiosClient.delete("products/" + selected);
      setProducts(products.filter((product) => product._id != selected));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
    <div className="admin">
      <Container>
        <Button variant="success" onClick={handleShow} className="m-3">
          Agregar Productos
        </Button>
        <Button variant="warning" onClick={handleShowEdit} className="m-3">
          Modificar Producto
        </Button>
        <Button variant="danger" onClick={deleteProduct} className="m-3">
          Borrar Producto
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Imagen</th>
              <th>Precio</th>
              <th>Ver</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>
              product._id == selected ? (
                <tr
                  key={product._id}
                  onClick={() => setSelected(product._id)}
                  className="selected products"
                >
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    <Card.Img variant="top" className="card-m" src={pizza} />
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <Link to={`/product/${product._id}`}>
                      Detalle de Producto
                    </Link>
                  </td>
                </tr>
              ) : (
                <tr
                  key={product._id}
                  onClick={() => setSelected(product._id)}
                  className="products"
                >
                  <td>{product._id}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    <Card.Img variant="top" className="card-m" src={pizza} />
                  </td>
                  <td>{product.price}</td>
                  <td>
                    <Link to={`/product/${product._id}`}>
                      Detalle de Producto
                    </Link>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <AddModal
          show={show}
          handleClose={handleClose}
          setProducts={setProducts}
          products={products}
        />
        <EditModal
          show={showEdit}
          handleClose={handleCloseEdit}
          selected={selected}
          getProducts={getProducts}
        />
      </Container>
      </div>
    </>
  );
};

export default AdminABM;
