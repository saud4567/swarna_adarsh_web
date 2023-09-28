import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';
import Stack from '@mui/material/Stack';
import upar from "../assets/uparrow.png";
import face from "../assets/face.png";
import twit from "../assets/twit.png";
import insta from "../assets/insta.png";
import world from "../assets/world.png";
import bline from "../assets/blkline.png";
import logo1 from "../assets/logo1.png";

const Footer = () => {
  return (
    <Box >
      <Grid container spacing={2}  sx={{display:"flex",justifyContent:"center",}}>
        <Grid item xs={5} sx={{ display: "flex" }}>
          <Box >main
      

            <Stack direction={"row"} spacing={3}>
              <Box sx={{paddingTop:"10px"}}>
                < img src={logo1} />
              </Box>
              <Box>
                <img src={bline} height="100px" />
              </Box>
              <Box>
              <p style={{fontSize:"14px", margin:"0", padding:"0", paddingBottom:"5px", }}>Supported By</p>
              <img src={world} width="180px" height="70px"/> 
              </Box>
            </Stack>
            <Box>
              <p style={{padding:"0",margin:"0", color: "#464749", fontSize:"13px"}}>Inspired by the</p>
            </Box>
            <Box>
            <p style={{padding:"0",margin:"0", color: "#464749", fontSize:"13px"}}>Retail Gold Investment Principles</p>

            </Box>
          </Box>
        </Grid>



        <Grid item xs={6} sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Box sx={{marginTop:"15px", paddingRight:"20px"}} >
            <p> <a href='#!' className='foot-text'>
              ABOUT US         
                   </a> </p>
            <p> <a href='#!' className='foot-text'>
              GOVERNANCE          
                </a> </p>

            <p> <a href='#!' className='foot-text'>
              NEWS & UPDATES        
                  </a> </p>
          </Box>
          <Box sx={{marginTop:"15px", paddingRight:"30px"}}>
          {/* FAQ’S PRIVACY POLICY DISCLAIMER */}

          <p> <a href='#!' className='foot-text'>
          FAQ’S        
                   </a> </p>
            <p> <a href='#!' className='foot-text'>
            PRIVACY POLICY          
                </a> </p>

            <p> <a href='#!' className='foot-text'>
            DISCLAIMER                  </a> </p>

          </Box>
          <Box sx={{display:"flex",gap:"20px", alignItems:"center",paddingRight:"30px"}}>
            
          <p>
            <img src={face} className='foot-icon' />
             </p>
            <p> 
              <img src={twit} className='foot-icon' /> 
              </p>

            <p> 
              <img src={insta} className='foot-icon' /> 
              </p>

          </Box>
          <Box sx={{display:"flex",alignItems:"center",paddingLeft:"50px"}}>
            <img  src={upar} height="40px"/>
          </Box>
        </Grid>

      </Grid>
    </Box>
  )
}

export default Footer;