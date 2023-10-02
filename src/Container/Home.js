import React from 'react';
import About from "../components/aboutSwarna";
// import Retail from "../components/Home/Retailg";
// import Codeoc from "../components/Home/Conduct";
// import Voice from "../components/Home/Voice";
// import Register from "../components/Home/Register";

// common comp header and footer and container and banner
// import Header from "../common/Header";
import Banner from "../common/Banner";
// import Footer from "../common/Footer";
import bdImg1 from "../assets/homebg.png"

const Home = () => {
  return (
    <>
    

    <Banner  backgroundImage={bdImg1} text={"Working together, on principles."} text2={" Isi Mey Faida Hai."}   />
    <About/>
    {/* <Retail/>
    <Codeoc/>
    <Voice/>
    <Register/> */}

  
    


    </>
  )
}

export default Home