// MenuPage.js
import { Box } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuPage = ({ onClose }) => {
  return (
    <Box sx={{height:"80vh", position:"relative"}}>
    <div>
      <button onClick={onClose} style={{ position: 'absolute', top: '10px', right: '10px' }}>
        Close
      </button>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/page1">Page 1</Link></li>
        <li><Link to="/page2">Page 2</Link></li>
        {/* Add more menu links as needed */}
      </ul>
    </div>
    </Box>
  );
}

export default MenuPage;













