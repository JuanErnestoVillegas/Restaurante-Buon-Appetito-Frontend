import React from "react";
import "./Encabezado.css";
import LogoBuonAppetito from "../../assets/Logo/Logo Buon Appetito.png";
// import LogoBuonAppetito from "./../../assets/img/Logo/Logo Buon Appetito.png";

const Encabezado = ({imageSrc}) => {
    return ( 
        <div className="encab">
            

            <img src={imageSrc} alt="Menu" className="hero_image" />
            
            <div>
            
            <h1 className="hero_title">  Pizzas y Pastas. <img src={LogoBuonAppetito} alt="Logo" className="logo" /></h1>
            </div>
            
        </div>
     );
};
 
export default Encabezado;