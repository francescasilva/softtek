// src/components/CotizadorLayout.jsx
import { Outlet, useLocation } from 'react-router-dom';
import StepHeader from '../components/StepHeader';
import Header from '../components/Header';


export default function Layout() {
  const location = useLocation();
  const currentStep = location.pathname === '/resumen' ? 2 : 1;

  return (
    <>
     <Header/> 
      <StepHeader currentStep={currentStep} />
      <Outlet />
    </>
  );
}
