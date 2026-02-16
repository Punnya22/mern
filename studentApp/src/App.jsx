import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import Added from './components/Added'
import Viewing from './components/Viewing'
import Navlink from './components/Navlink'
import Data from './components/Data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navlink/>

      <Routes>
        <Route path='/Added' element={<Added/>}/>
        <Route path='/' element={<Viewing/>}/>
      </Routes>
      
    </>
  )
}

export default App
