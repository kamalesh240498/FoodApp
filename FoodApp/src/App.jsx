import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes} from 'react-router-dom'
import Home from './Page/Home/Home'
import Cart from './Page/Cart/Cart'
import PlaceOrder from './Page/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'

function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
<>
{showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
  <div className='app'>
    <Navbar setShowLogin={setShowLogin}/>
    <Routes>
      < Route path='/' element={<Home/>}/>
      < Route path='/Cart' element={<Cart/>}/>
      < Route path='/Order' element={<PlaceOrder/>}/>
    </Routes>
  </div>
  <Footer/>
</>
  )
}


export default App