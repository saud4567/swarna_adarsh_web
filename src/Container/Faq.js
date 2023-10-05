import React from 'react';
import Banner from '../common/Banner';
import FAQPage from '../components/FaqMain';
import faqbf from "../assets/faqbf.png";




const Faq = () => {
  return (
    <>
    <Banner  backgroundImage={faqbf} text2={" Swarna Adarsh Abhiyaan- Frequently Asked Questions:"}  banner_sx={{backgroundPosition:"center",fontSize:"28px"}} text2styles={{fontSize:"28px"}} />
      <FAQPage />  
      </>
  )
}

export default Faq