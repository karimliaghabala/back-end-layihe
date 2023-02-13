import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Info from './components/Coins-info/info'
import Ccoins from './components/Commemorative_coins/cCoins';
import Ecoins from './components/Exclusive_coins/eCoins';
import Bcoins from './components/Bullion_coins/bCoins';

const App = () => {
  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/ccoins' element={<Ccoins />} />
        <Route path='/ecoins' element={<Ecoins />} />
        <Route path='/bcoins' element={<Bcoins />} />
      </Routes>
    </>
  )
}

export default App