import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';
import { GlobalStyle } from "./globalStyles";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
       <GlobalStyle />
     <Hero />
     <Products heading='Choose your favorite one' data={productData} />
     <Feature />
     <Products heading='Sweet Treats for You' data={productDataTwo} />
     <Footer />
    </Router>
  );
}

export default App;
