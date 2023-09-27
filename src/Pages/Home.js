import React from 'react';
import About from "../components/Home/aboutSwarna";
import Retail from "../components/Home/Retailg";
import Codeoc from "../components/Home/Conduct";
import Voice from "../components/Home/Voice";
import Register from "../components/Home/Register";

// common comp header and footer and container and banner
import Header from "../common/Header";
import Banner from "../common/Banner";

import Footer from "../common/Footer";


const Home = () => {
  return (
    <>
    
    <Header />
    <Banner/>
    <About/>
    <Retail/>
    <Codeoc/>
    <Voice/>
    <Register/>

    <Footer/>
    


    </>
  )
}

export default Home