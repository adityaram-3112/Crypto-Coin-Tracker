import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Coin from './pages/Coin'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/:coinId' element={<Coin/>} />
       </Routes>  
      <Footer/>


      
    </div>
  )
}

export default App
