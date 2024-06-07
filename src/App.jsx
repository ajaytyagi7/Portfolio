import './App.css'
import { BrowserRouter,Routes,Route,Link, } from 'react-router-dom'
import Home from './Component/Home'
import Navbar from './Component/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
