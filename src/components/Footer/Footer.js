import React from "react";
import {Link} from "react-router-dom";
import LogoBuonAppetito from "../../assets/Logo/LogoBuonAppetito.png";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
    return ( 
        <div >
            <footer className='text-white py-2 footer_container'>
                <div className='container'>
                    <nav className='row'>
                        <Link to="/" className='col-12 col-md-3 '>
                            <img src={LogoBuonAppetito} href="/" alt="LogoInBlockchain" className='mx-4' height='100' />
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='md-2 footer_title'>Buon Appetito</li>
                            <li >Nuestros sabores con tus mejores momentos</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='md-2 footer_title'>Enlaces</li>
                            <li>
                                <Link to="/aboutUs" class='text-reset'>Nosotros</Link>
                            </li>
                            <li>
                                <Link to="/contacto" class='text-reset'>Contacto</Link>
                            </li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className=' md-2 footer_title'>Síguenos</li>
                            <li className='d-flex justify-content-between mt-2'>
                                <a href="https://www.facebook.com/" target="_blank" className="text-reset footer_icons"><BsFacebook/></a>
                                <a href="https://www.instagram.com/" target="_blank" className="text-reset footer_icons"><BsInstagram/></a>
                                <a href="https://twitter.com/" target="_blank" className="text-reset footer_icons"> < BsTwitter/></a>
                                <a href="https://www.youtube.com/" target="_blank" className="text-reset footer_icons"> <BsYoutube/></a>
                                
                            </li>
                        </ul>
                        <hr className="mb-1 mt-1" />
                         <div className="mt-2">
                            &copy;{new Date().getFullYear()} BUON APPETITO | Todos los derechos reservados | <Link to="errorPage" class='text-reset'>Privacidad</Link>
                         </div>



                    </nav>
 
                </div>

            </footer>
        </div>
     );
}
 
export default Footer;
