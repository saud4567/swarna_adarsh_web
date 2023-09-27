import React from 'react';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box >
      <Grid container spacing={2} >
        <Grid item xs={6}>
          <Box>xs=8</Box>
        </Grid>
        <Grid item xs={6} sx={{display:"flex",justifyContent:"space-evenly"}}>
          <Box>xs=4</Box>
          <Box>xs=4</Box>
          <Box>xs=4</Box>
          <Box>xs=4</Box>
        </Grid>
       
      </Grid>
    </Box>
  )
}

export default Footer