import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/home'
import Info from './components/Coins-info/info'

const App = () => {
  return (
    <>
      <Home />
      <Routes>
        <Route path='/info' element={<Info />} />
      </Routes>
    </>
  )
}

export default App