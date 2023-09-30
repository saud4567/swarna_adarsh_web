import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import logo from "../assets/logo1.png";
import menu from "../assets/menui.png";
import { Box } from '@mui/material';
import MenuPage from '../common/MenuPage';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <Box sx={{ zIndex: 999 }}>
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          width: '100%',
          background: '#fff',
          zIndex: 999,
          visibility: isMenuOpen ? 'hidden' : 'visible', // Hide the header when the menu is open
          transition: 'visibility 0.3s ease-in-out',
        }}
      >
        <Grid container spacing={2} sx={{ padding: '10px 20px 10px 20px' }}>
          <Grid item xs={6}>
            <Box sx={{ paddingLeft: { md: '40px' } }}>
              <img src={logo} alt='logo' style={{ maxWidth: '180px', maxHeight: '180px' }} />
            </Box>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Box sx={{ display: 'flex', marginTop: '15px' }}>
              <Box
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  paddingRight: '20px',
                  color: '#D0AC54',
                  cursor: 'pointer',
                  display: { sm: 'none', xs: 'none', md: 'block' },
                }}
                onClick={handleMenuClick}
              >
                Menu
              </Box>
              <Box sx={{ paddingRight: '60px' }}>
                <img src={menu} alt="menu" onClick={handleMenuClick} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
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


