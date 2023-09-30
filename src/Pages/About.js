import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Member from "../components/About/MembersList";
import Working from "../components/About/MembersList";
import Banner from '../common/Banner';
import aboutbg from "../assets/aboutbg.png";

const About = () => {
  return (
    <>
    <Header/>
    <Banner  backgroundImage={aboutbg} text={"Working together, on principles."} text2={" Isi Mey Faida Hai."}/>
    <Working/>
    <Member/>
    <Footer/>
    
    </>
  )
}

export default About