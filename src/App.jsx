import { Routes, Route } from 'react-router-dom';
import  Home  from './pages/Home'
import  Planes  from './pages/Planes'
import Resumen from './pages/resumen';
import Layout from './layouts/layout';


function App() {
  

  return (
    <>
     <Routes >
      <Route path="/" element={<Home />} />
      <Route element={<Layout />}>
      <Route path="/planes" element={<Planes />} />
      <Route path="/resumen" element={<Resumen />} />
      </Route>
    </Routes>
      
    </>
  )
}

export default App
