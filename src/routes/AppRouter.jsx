import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Propiedades from '../pages/Propiedades';
import DetallePropiedad from '../pages/DetallePropiedad';
import SobreNosotros from '../pages/SobreNosotros';
import Contacto from '../pages/Contacto';
import Testimonios from '../pages/Testimonios';
import Blog from '../pages/Blog';
import Panel from '../pages/Panel';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='propiedades' element={<Propiedades />} />
          <Route path='propiedades/:id' element={<DetallePropiedad />} />
          <Route path='sobre-nosotros' element={<SobreNosotros />} />
          <Route path='contacto' element={<Contacto />} />
          <Route path='testimonios' element={<Testimonios />} />
          <Route path='blog' element={<Blog />} />
          <Route path='panel' element={<Panel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
