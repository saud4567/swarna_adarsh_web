import React from 'react'
import Header from '../common/Header';
import Footer from '../common/Footer';
import Banner from '../common/Banner';
import cocog from "../assets/cocg.png";
import CocMain from '../components/CocMain';




const codec = () => {
  return (
    <>
    <Header/>
    <Banner  backgroundImage={cocog} text={"Working together, on principles."} text2={" Isi Mey Faida Hai."}/>
    
    <CocMain />
    <Footer/>
    
    </>
  )
}

export default codec