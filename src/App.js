import logo from './logo.svg';
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { BrowserRouter, Routes, Route,Outlet } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


import { purple } from '@mui/material/colors';


import './index.css'; // Fichier CSS global

import Root from './root';
import Home from './pages/home';
import Create from './pages/create';

import Dej from './pages/dej'
import Bois from './pages/bois'
import Medit from './pages/medit'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="dej" element={<Dej />} />
      <Route path="bois" element={<Bois/>} />
      <Route path="medit" element={<Medit />} />
      <Route path="*" element={<Create />} /> 

    </Route>
  )
);



function App() {




  return (


    <>



  <HelmetProvider>



  <RouterProvider router={router} />
  </HelmetProvider>
    



  



    
    
    
    </>
  );
}

export default App;
