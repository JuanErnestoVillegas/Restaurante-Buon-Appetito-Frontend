import {useEffect, useState} from "react";
import ProductCard from "../components/ProductCard/ProductCard"; 
import {Row, Col } from 'react-bootstrap';
import { Container } from "react-bootstrap";
import axiosClient from "../config/axiosClient";


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
            <ProductCard
            className="m-3"
            id={product._id}
            title={product.name}
            description={product.description}
            image={product.image}        
            />
          </Col>
        ))}
      </Row>
      </Container>
     );
}
 
export default Products;

