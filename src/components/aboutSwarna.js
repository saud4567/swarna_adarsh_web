import { Grid, Typography,Box } from "@mui/material";
import aboutBg from "../assets/abvideo.png";
import PageWidth from "../common/Container";
import abg from "../assets/abbg.png";

const aboutSwarna = () => {
  return (

<div className="abbg-m">

   <PageWidth  sx={{marginTop:"50px"}}>
   <Grid container spacing={4} justifyContent="center">
      {/* Centered Heading */}
      <Grid item xs={12} sx={{paddingBottom:"50px"}}>
       
        <Typography variant="h4" align="center" sx={{color:"#D0AC54", fontWeight:"400"}}>
        — About Swarna Adarsh Abhiyaan —  
        </Typography>
      
      </Grid>

      {/* Left Grid Item - Paragraph Box */}
      <Grid item xs={12} sm={4} sx={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
        <Typography variant="body1">
        The Indian Gold industry has always worked towards improving its quality of business operations and upholding ethical standards. From the standardization of weights and measures to the introduction of hallmarking, it has not only climbed upwards in its developmental trajectory but also ensured the process is more transparent and efficient. Presenting you an initiative by the Indian Gold industry - Swarna Adarsh Abhiyaan. It is a one-of-its- kind industry initiative that offers best practices and suitable solutions that will hand-hold you through your business journey in a principled manner. This will retain the trust of the existing stakeholders and generate interest and stimulate new stakeholders to follow these principles. 
        {/* Swarna Adarsh Abhiyaan is the ideal way for our industry to operate in order to thrive and induce trust amongst gold consumers. The principles have been developed for the whole gold industry to strive towards excellence. Combined, the Swarna Adarsh Abhiyaan aims to guide all its stakeholders towards a righteous yet profitable way of doing business. By pledging to follow these guiding principles together, we take a step forward in uplifting our businesses and restoring the golden glory of the industry as a whole. */}
        </Typography>
<Box sx={{paddingTop:"20px", }}>

       <Typography sx={{fontSize:"20px", color:"#D0AC54"}}>
        READ MORE +
       </Typography>

</Box>
      </Grid> 

      <Grid item sm={1}md={1} sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

        <Box sx={{backgroundColor:"#E8E8E8", width:"2px", height:"270px"}} >
        </Box>
      </Grid>

      {/* Right Grid Item - Image Box */}
      <Grid item xs={12} sm={6}>
        {/* Replace 'imageURL' with your image source */}
      <>
        <img
               src={aboutBg}
               alt="About Page"  width="500px"  height="350px"/> 
               </>
      </Grid>
    </Grid>

    </PageWidth>


    </div>
  );
};

export default aboutSwarna;
