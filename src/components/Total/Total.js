import { Link } from "react-router-dom";
import React from "react";
import accounting from "accounting"
import { Button} from 'react-bootstrap';
import "./Total.css";

const Total = () => {
    return (
      <div className="total">
        <h5>Total Items: 1 </h5>
        <h5>{accounting.formatMoney(900)}</h5>
        <Button variant="success"><Link to={`/`} className="text-reset text-decoration-none">                     
        Salir </Link>
        </Button>
      </div>
    );
}
 
export default Total;