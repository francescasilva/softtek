import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home'
import  Planes  from './pages/Planes'


function App() {
  

  return (
    <>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/planes" element={<Planes />} />
    </Routes>
      
    </>
  )
}

export default App
