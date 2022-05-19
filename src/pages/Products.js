import {useContext, useEffect, useState} from "react";
import ProductCard from "../components/ProductCard/ProductCard"; 
import {Row, Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import axiosClient from "../config/axiosClient";
import ProductsCarrito from "../components/Products/Products";
import ProductCarrito from "../components/ProductsCarrito/ProductCarrito";
import { CartContext } from "../context/CartContext";


const Products = () => {
 const[products,setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async()=>{
          try{
            const response = await axiosClient.get('/products/');
            const {data} = response;
             setProducts(data.products);
          }catch (error){
              console.warn(error);
          }
        }
        getProducts();
    },[])
    return (
      <Container className="mt-5">
        <Row xs={1} md={3} className="g-2">
          {products.map((product) => (
            <Col>
              <ProductCarrito
                className="m-3"
                id={product._id}
                title={product.name}
                price={product.price}
                description={product.description}
                image={product.image}
              />
            </Col>
          ))}
        </Row>
        {/* <form action="/upload" method="POST" encType="multipart/form-data">
          <input type="file" name="image"></input>
          <button type="submit">upload</button>
        </form> */}
      </Container>
    );
}
 
export default Products;

