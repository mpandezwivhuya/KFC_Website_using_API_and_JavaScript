import React from 'react'
import './App.css'
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Buckets from './components/Buckets';
import Twisters from './components/Twisters';
import Bucket from './components/Bucket';
import {Routes, Route} from 'react-router-dom'
import Twister from './components/Twister';
import Treats from './components/Treats';
import Treat from './components/Treat';
import Cart from './components/Cart';
import About from './components/About';
import Contact from './components/Contact';






function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path = '/' element={<Home/>}/>
        <Route path = '/Menu' element={<Menu/>}/>
        <Route path = '/About' element={<About/>}/>
        <Route path = '/Twisters' element={<Twisters/>}/>
        <Route path = '/Twister/:id' element={<Twister/>}/>
        <Route path = '/Buckets' element={<Buckets/>}/>
        <Route path = '/Bucket/:id' element={<Bucket/>}/>
        <Route path = '/Treats' element={<Treats/>}/>
        <Route path = '/Cart' element={<Cart/>}/>
        <Route path = '/Treat/:id' element={<Treat/>}/>
        <Route path = '/Contact' element={<Contact/>}/>
       
        
      </Routes>
      
    </>
    
    
  )
}

export default App;
