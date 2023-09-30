
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './common/Header';
import HomePage from './Pages/Home'; // Create this component
import MenuPage from './common/MenuPage'; // Create this component
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
  <>
      {/* <Header />
    <Routes>
      <Route path="/" exact component={<Home} />
      <Route path="/menu" exact component={MenuPage} />
      
    </Routes>
   */}

{/* <Home />  */}
<About/>
 </>
  );
}

export default App;
