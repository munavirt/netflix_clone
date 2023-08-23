import React from 'react';
import NavBar from './components/Navbar/NavBar';
import {originals,romantic} from './urls'
import './App.css';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Orginals' />
      <RowPost url={romantic} title='Romantic' isSmall />
    </div>
  );
}

export default App;
