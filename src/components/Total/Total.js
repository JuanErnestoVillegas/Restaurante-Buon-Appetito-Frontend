import React from "react";
import accounting from "accounting"
import { Button } from "@mui/material";
import "./Total.css";


const Total = () => {
    return (
      <div className="total">
        <h5>Total Items: 5 </h5>
        <h5>{accounting.formatMoney(50)}</h5>
        <Button variant="contained">Salir</Button>
      </div>
    );
}
 
export default Total;