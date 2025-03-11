import React from 'react'
import Home from './component/Home'
import Navbar from './component/Navbar'
import {Routes, Route} from 'react-router-dom'
import Event from './component/Event'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Event' element={<Event/>}/>
      </Routes>
    </div>
  )
}

export default App
