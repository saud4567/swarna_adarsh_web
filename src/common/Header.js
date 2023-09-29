import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';
import logo from "../assets/logo1.png";
import menu from "../assets/menui.png";
import { Box } from '@mui/material';
import MenuPage from '../common/MenuPage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  }

  return (
    <Box sx={{ position: "fixed", top: 0, width: "100%", background: "#fff", zIndex: 999 }}>
      <Grid container spacing={2} sx={{ padding: "10px 20px 10px 20px" }}>
        <Grid item xs={6}>
          <Box sx={{ paddingLeft: { md: "40px" } }}>
            <img src={logo} alt='logo' style={{ maxWidth: "180px", maxHeight: "180px" }} />
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Box sx={{ display: "flex", marginTop: "15px" }}>
            <Box sx={{ fontSize: "18px", fontWeight: "500", paddingRight: "20px"  , color:"#D0AC54", cursor:"pointer", display:{sm:"none",xs:"none", md:"block"}}}  onClick={handleMenuClick}>
              Menu
            </Box>
            <Box sx={{ paddingRight: "60px" }}>
              <img src={menu} alt="menu" onClick={handleMenuClick} c/>
            </Box>
          </Box>
        </Grid>
      </Grid>
      {isMenuOpen && (
        <MenuPage onClose={() => setIsMenuOpen(false)} />
      )}
    </Box>
  );
}

export default Header;










// import React from 'react';
// import Grid from '@mui/material/Grid';
// import SideWidth from './Sidecommon';

// import logo from "../assets/logo1.png";
// import menu from "../assets/menui.png";
// import { Box } from '@mui/material';





// const Header = () => {

 

//   return (
//     <Box >
      
//       <Grid container spacing={2} sx={{padding:"10px 20px 10px 20px",}}>

//         <Grid item xs={6} >

//         <Box sx={{ paddingLeft: { md: "40px",  }, }}>
          
//         <img src={logo} alt='logo' style={{ maxWidth: "200px", maxHeight: "200px", }} />
//           </Box>
//         </Grid>

//         <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end", }}>
//           <Box sx={{ display: "flex", marginTop: "15px" }}>

//             <Box sx={{ fontSize: "18px", fontWeight: "500", paddingRight: "20px" }}>
//               Menu
//             </Box>

//             <Box sx={{ paddingRight: "60px", }}
//              >
//             <img src={menu}   />
//             </Box>

//           </Box>

//         </Grid>

//       </Grid>
//     </Box>

// )
// }

// export default Header


