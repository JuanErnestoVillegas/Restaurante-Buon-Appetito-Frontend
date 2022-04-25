import React from "react";
import "./Footer.css";
import LogoBuonAppetito from "../../assets/Logo/LogoBuonAppetito.png";
import { ImLocation } from "react-icons/im";
import { BsCalendarDay, BsPeopleFill, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Columna1 */}
          <div className="col">
            <img src={LogoBuonAppetito} alt="Logo" className="logoFooter" />
          </div>
          <div className="col">
            <h4 className="h4_Footer">
              <ImLocation />
            </h4>
            <ui className="list-unstyled">
              <li>3 8 1 - 3 3 3 3 3 3 9</li>
              <li>San Miguel, Tucuman</li>
              <li>Calle Maipú 3 3 3</li>
            </ui>
          </div>
          {/* Columna2 */}
          <div className="col">
            <h4 className="h4_Footer">
              <BsCalendarDay />
            </h4>
            <ui className="list-unstyled">
              <li>LUN - VIER</li>
              <li>0 9 : 0 0 - 2 1 : 0 0</li>
              <li>SAB - DOM 0 9 : 0 0 - 1 4 : 0 0</li>
            </ui>
          </div>
          {/* Columna3 */}
          <div className="col">
            <h4 className="h4_Footer">
              <BsPeopleFill />
            </h4>
            <ui>
              
              <a className="socialFooter" href="https://www.instagram.com/" target="_blank"><BsInstagram/></a>

              
              <a className="socialFooter" href="https://www.facebook.com/" target="_blank"><BsFacebook/></a>

              
            </ui>
          </div>
        </div>
        <hr className="mb-1 mt-1" />
        <div className="row">
          <p className="date_Footer">
            &copy;{new Date().getFullYear()} BUON APPETITO | Todos los derechos
            reservados | Privacidad
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
