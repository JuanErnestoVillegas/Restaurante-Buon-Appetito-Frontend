import "./AboutUs.css";
import React from 'react';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import LucasImg from "./../../assets/Integrantes/Lucas Ferruchi.jpeg";
import GastonImg from "./../../assets/Integrantes/Gastón Devalis.jpg";
import JuanImg from "./../../assets/Integrantes/Juan Ernesto Villegas.jpg";
import FerImg from "./../../assets/Integrantes/Maria Fernanda Trujillo.jpg";
import MarcosImg from "./../../assets/Integrantes/Marcos Scheuermann.jpeg";

const AboutUs = () => {
  return (
    <ThemeProvider
  breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
>
  <div>
        <h2 className="us-title">Diseñadores de Buon Appetito</h2>
        <div className="content-all">
          <div className="content-carrousel">
            <figure>
              <img src={LucasImg} />
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Ferruchi, Lucas</div>
                <p className="image__description">
                  Hobby: <br />
                  Hacer deportes
                </p>
              </div>
            </figure>
            <figure>
              <img src={MarcosImg} />
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Scheuermann, Marcos</div>
                <p className="image__description">
                  Hobby: <br />
                  Pasear a Bruno
                </p>
              </div>
            </figure>
            <figure>
              <img src={FerImg} />
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Trujillo, M. Fernanda</div>
                <p className="image__description">
                  Hobby: <br />
                  Trekking
                </p>
              </div>
            </figure>

            <figure>
              <img src={JuanImg} />
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Villegas, Juan Ernesto</div>
                <p className="image__description">
                  Hobby: <br />
                  Fútbol - Trekking
                </p>
              </div>
            </figure>
            <figure>
              <img src={GastonImg} />
              <div className="image__overlay image__overlay--primary">
                <div className="image__title">Devails, Gastón</div>
                <p className="image__description">
                  Hobby: <br />
                  Hacer deportes
                </p>
              </div>
            </figure>
          </div>
        </div>    
    



  </div>
</ThemeProvider>


  );
};

export default AboutUs;
