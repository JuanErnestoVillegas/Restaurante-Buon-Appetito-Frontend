import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/Layout/Layout";
import UserProvider from "./context/UserContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Recover from "./pages/Recover";
import Admin from "./pages/Admin";
import React from 'react'; //Fer//
import AboutUs from "./components/AboutUs/AboutUs";  
import PrivateRoute from "./routes/PrivateRoute";
import ProductsProvider from "./context/ProductsContext";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import Mail from "./components/mail";
import ContactForm from "./components/ContactForm/ContactForm";
<<<<<<< HEAD
import ProductCarrito from "./components/ProductsCarrito/ProductCarrito";
// import RecoverForm from "./components/RecoverForm/RecoverForm"
=======
import ErrorPage from './pages/ErrorPage'
>>>>>>> 308e21572e3d8d726a1550e48e8cf73b4a1eeddd

function App() {
  return (
    <>
      <Router>
        <UserProvider>
          <ProductsProvider>
            <Layout>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<Login /> }/>
                <Route path="/contacto" element={<ContactForm /> }/>
                <Route path="/register" element={<Register />} />
                <Route path="/recover" element={<Recover/>} />
                <Route path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
                <Route path="/products" element={<PrivateRoute><Products /></PrivateRoute>} />
                <Route path="/carrito" element={<CartPage />} />
                <Route path="/productCarrito" element={<ProductCarrito />} />
                <Route path="/aboutUs" element={<AboutUs />} />                
                <Route path="/product/:id" element={<PrivateRoute><ProductDetail /></PrivateRoute>}/>
                <Route path="/mail" element={<Mail />} />
                <Route path="/error" element={<ErrorPage />} />
              </Routes>
            </Layout>
          </ProductsProvider>
        </UserProvider>
      </Router>
    </>
  );
}

export default App;

