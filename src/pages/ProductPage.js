import DetailsProduct from "../components/DetailsProducts/DetailsProducts";
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axiosClient from '../config/axiosClient'

const ProductPage = () => {
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

  console.log (product);

  return (
    <>
      <p>{product.name} </p> 
      <Container className="m-5">
        <Row>
        
          <DetailsProduct></DetailsProduct>
        </Row>
      </Container>
    </>
  );
};

export default ProductPage;
