import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axiosClient from "../config/axiosClient";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../components/ProductCard/ProductCard";


const ProductDetail = () => {
    const [product, setProduct] = useState ({})
    const params = useParams();
    const id = params.id;
    const getProduct = async () =>{
        try {
            const {data} = await axiosClient.get("/products/product/"+id);
            setProduct(data.product)
        } catch (error) {
            console.log(error);
        }
    }
useEffect(()=>{
    getProduct()
},[]);

    return (
      <>
        <h2>DETALLE DE PRODUCTO</h2>
        
        <Container className="mt-1 cardContainer">
          <Row xs={1} md={3} className="g-2">
            <Col>
              <ProductCard
                className="m-3"
                id={product.id}
                title={product.name}
                description={product.description}
                price={product.price}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
}
 
export default ProductDetail;