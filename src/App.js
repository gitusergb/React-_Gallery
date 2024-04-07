import React from 'react';
import Navbar from './Components/Navbar';
import Croutes from './Routes/Croutes';
import './App.css';

function App() {
  return (
    <div className="App">
     {/* //Gallary */}
     <Navbar />
     <Croutes/>
    </div>
  );
}

export default App;
