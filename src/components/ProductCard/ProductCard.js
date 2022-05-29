import { Card, Button } from "react-bootstrap";
import './ProductCard.css';
import {Link} from "react-router-dom";
import chef from "../../assets/LandingImg/chef.jpg";
import pizza from "../../assets/LandingImg/pizza.jpg";


const ProductCard = ({id,title,description,price}) => {
  return (
    <Card id={id} text="center" border="success" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="" src={pizza} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="btn btn-outline-secondary">
          <Link to={"/product/" + id}>Comprar</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
