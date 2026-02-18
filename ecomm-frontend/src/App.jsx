import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/products/Products'
import Home from './components/home/Home'
import { Route, BrowserRouter as Router, Routes,  } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>

  )
}

export default App
