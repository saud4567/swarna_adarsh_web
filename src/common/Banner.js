import { Box, Typography } from '@mui/material';
import React from 'react';

const Banner = (props) => {
  const { backgroundImage, text = "vbojolk", text2 = "asdas", text_sx, text_sx2, banner_sx } = props;

  const bannerStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    // backgroundSize: 'cover',
    objectFit:"scale-down",
    height: '120vh',
    marginTop: "90px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "column",
    ...banner_sx,
  };

  const textStyles = {
    color: "white",
    fontSize: {
      xs: "10px", // Adjust font size for extra-small screens
      sm: "15px",
      md: "25px", // Customize for other breakpoints
      // lg: "48px",
    },
    letterSpacing: "2px",
    textAlign: {
      xs: "center", // Center text for extra-small screens
      sm: "left", // Align text to the left for other breakpoints
    },
    ...text_sx,
  };

  const text2Styles = {
    color: "#D0AC54",
    fontSize: {
      xs: "26px", // Adjust font size for extra-small screens
      sm: "38px",
      md: "43px", // Customize for other breakpoints
      // lg: "72px",
    },
    letterSpacing: "3px",
    fontWeight: "600",
    ...text_sx2,

  };

  return (
    <Box sx={bannerStyles}>
      <Box sx={{display:"flex", flexDirection:"column", position:"absolute", paddingRight:"120px"}}>
        <Typography sx={textStyles}>{text}</Typography>
        <Typography sx={text2Styles}>{text2}</Typography>
      </Box>
    </Box>
  );
};

export default Banner;
























// import { Box, Typography } from '@mui/material';
// import React from 'react'

// const Banner = (props) => {
//   const { backgroundImage, text = "vbojolk", text2 = "asdas", text_sx, text_sx2, banner_sx } = props

//   const bannerStyles = {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundRepeat: 'no-repeat',
//     backgroundSize: 'cover',
//     height: '100vh', marginTop: "90px", display: "flex", alignItems: "flex-end", justifyContent: "center", flexDirection: "column",
//     ...banner_sx
//   };








//   return (
//     <Box sx={bannerStyles}  >
//       <Box>
//         <Typography sx={{ color: "white", fontSize: "30px", letterSpacing: "2px", ...text_sx, }}>
//           {text}
//         </Typography>
//         <Typography sx={{ color: "red", fontSize: "48px", letterSpacing: "3px", fontWeight: "600", ...text_sx2, paddingRight: "20px" }}>
//           {text2}
//         </Typography>

//       </Box>
//     </Box>
//   )
// }

// export default Banner;




