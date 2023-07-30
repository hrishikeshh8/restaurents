import React from 'react'
import{BrowserRouter, Routes,Route} from 'react-router-dom'
import './App.css'
 
import Home from './Home'
import Menu from './Menu'
import  Banquetfacility from './Banquetfacility'
import Gallery from './Gallery'
import Cattering from './Cattering'
import ContactUs from './ContactUs'

import Navbar from './Navbar/Navbar'


const App = () => {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
     <Route path='/' exact Component={Home}/>
     <Route path='/Menu' exact Component={Menu}/>
     <Route path='/Gallery' exact Component={Gallery}/>
     <Route path='/Cattering' exact Component={Cattering}/>
     <Route path='/Contact us' exact Component={ContactUs}/>
     <Route path='/Banquetfacility' exact Component={Banquetfacility}/>
     </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
