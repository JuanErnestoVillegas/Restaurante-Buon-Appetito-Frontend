import { Card, Button } from "react-bootstrap";
import './ProductCard.css';
import {Link} from "react-router-dom";
import chef from "../../assets/LandingImg/chef.jpg";
import pizza from "../../assets/LandingImg/pizza.jpg";






const ProductCard = ({id,title,description,price}) => {
  return (
    <Card id={id} text="center" border="success" style={{ width: "18rem" }}>
      <Card.Img variant="top" className="" src="https://tse1.mm.bing.net/th?id=OIP.k0jfqTlpfqzH10Mgyn8CrQHaE7&pid=Api&P=0&w=276&h=184" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>{price}</Card.Text>
        <Button variant="btn btn-outline-secondary">
          <Link to={"/product/" + id}>Ver producto</Link>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
