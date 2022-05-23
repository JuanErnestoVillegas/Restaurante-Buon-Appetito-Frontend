import React, { useState, useContext } from "react";
import "./Navbar.css";
import { HiMenuAlt2 } from "react-icons/hi";
import { RiCloseFill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineLogin } from "react-icons/ai";
import {  MdOutlineSocialDistance,  MdOutlineContactSupport,} from "react-icons/md";
import { UserContext } from "../../context/UserContext";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import { red } from "@mui/material/colors";
import Products from "../../pages/Products";
import ProductsCarrito from "../Products/Products";
import ProductCard from "../ProductCard/ProductCard";
import { Card } from "@material-ui/core";
import { CartContext } from "../../context/CartContext";
import AdminABM from "../Admin/AdminABM";
import { ADD_PRODUCT_VALUES } from "../../constants";
import ProductsProvider from "../../context/ProductsContext";


const Navbar = () => {
  const { auth, logout, user } = useContext(UserContext);
  const location = useLocation();
  console.log(location);

  const [menuClick, setMenuclick] = useState(false);

  const toggleMenu = () => {
    setMenuclick(!menuClick);
  };

  const color = red[500];

  return (
    <nav className="navbar">
      <a className="navbar_logo" href="/">
        Buon Appetito
      </a>

      {menuClick ? (
        <HiMenuAlt2 size={25} className="navbar_menu" onClick={toggleMenu} />
      ) : (
        <RiCloseFill size={25} className="navbar_menu" onClick={toggleMenu} />
      )}

      <ul
        className={
          menuClick ? "navbar_list" : "navbar_list navbar_list--active"
        }
      >
        {location.pathname == "/login" ? (
          <>
            <li className="navbar_item">
              <Link className="navbar_link" to="/aboutUs">
                <MdOutlineSocialDistance className="m-2" />
                Nosotros
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to="/contacto">
                <MdOutlineContactSupport className="m-2" />
                Contacto
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to="#">
                <MdOutlineContactSupport className="m-2" />
                Carrito
              </Link>
            </li>
          </>
        ) : auth ? (
          <>
            <li className="navbar_item">
              <Link className="navbar_link" to="/carrito">
            <Badge badgeContent={ProductsProvider?.length} color="primary">
                  <AddShoppingCartIcon />
                </Badge>
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to="/aboutUs">
                <MdOutlineSocialDistance className="m-2" />
                Nosotros
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to="/contacto">
                <MdOutlineContactSupport className="m-2" />
                Contacto
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to="/" onClick={logout}>
                <MdOutlineContactSupport className="m-2" />
                Cerrar sesión
              </Link>
            </li>
            {user?.role == "ADMIN" ? (
              <>
                <li className="navbar_item">
                  <Link className="navbar_link" to="/register">
                    <MdOutlineContactSupport className="m-2" />
                    Usuarios
                  </Link>
                </li>
                <li className="navbar_item">
                  <Link className="navbar_link" to="/admin">
                    <MdOutlineContactSupport className="m-2" />
                    Productos
                  </Link>
                </li>
              </>
            ) : null}
          </>
        ) : (
          <>
            <li className="navbar_item">
              <Link className="navbar_link" to="/login">
                <AiOutlineLogin className="m-2" />
                Ingresar
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to="/aboutUs">
                <MdOutlineSocialDistance className="m-2" />
                Nosotros
              </Link>
            </li>
            <li className="navbar_item">
              <Link className="navbar_link" to="/contacto">
                <MdOutlineContactSupport className="m-2" />
                Contacto
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
