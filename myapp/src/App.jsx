import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Data from './components/Data'
import StateBasic from './components/StateBasic'
import Count from './components/Count'
import Well from './components/Well'
import CardsGet from './components/CardsGet'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/data' element={<Data/>}/>
      <Route path='/state' element={<StateBasic/>}/>
      <Route path='/count' element={<Count/>}/>
      <Route path='/well' element={<Well/>}/>
      <Route path='/crd' element={<CardsGet/>}/>
    </Routes>
    
    </>
  )
}

export default App
