





import React from 'react'

const Header = () => {
  return (
    <div>Header</div>
  )
}

export default Header



// import React from 'react';
// import Grid from '@mui/material/Grid';
// import SideWidth from './Sidecommon';

// import logo from "../assets/logo1.png";
// import menu from "../assets/menui.png";
// import { Box } from '@mui/material';





// const Header = () => {


//   const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
//       <Typography variant="h6" sx={{ my: 2 }}>
//         MUI
//       </Typography>
//       <Divider />
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.label} disablePadding>
//             <ListItemButton
//               component={Link} 
//               to={item.path} // Set the path for each navigation item
//               sx={{ textAlign: 'center' }}
//             >
//               <ListItemText primary={item.label} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const container = window !== undefined ? () => window().document.body : undefined;
 

//   return (
//     <>
      
//       <Grid container spacing={2} sx={{padding:"10px 20px 10px 20px"}}>

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

//             <Box sx={{ paddingRight: "40px", mr: 2, display: { sm: 'none' } }}   color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//              >
//             <img src={menu}   />
//             </Box>

//           </Box>

//         </Grid>

//       </Grid>
//     </>

// )
// }

// export default Header




    // <SideWidth>

    // </SideWidth>