import React, { useState } from 'react';
import Navbar from './components/navbar'; 
import Admininterface from './components/admininterface';



const App = () => {
  const [view, setView] = useState('home');

  return (
    <div style={{ paddingTop: '60px' }}>
      <Navbar setView={setView} />
     <Admininterface view={view} setView={setView}/>

    </div>
  );
};

export default App;
