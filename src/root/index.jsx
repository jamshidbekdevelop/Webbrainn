import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { navbar } from '../utils/navbar'
import { Container } from './styled';
import Navbar from '../Components/Navbar'
import Krish from '../Components/Krish';
import Royhat from '../Components/Royhat';
import Tolovlar from '../Components/Tolovlar';
export const Root = () => {
  return(
  <Container>
    <Routes>
    <Route element={<Navbar/>}>
    {navbar.map(({id, Element, pathname, hidden})=> !hidden &&(
    <Route key={id} path={pathname} element={<Element/>} />
    ))} 
    </Route>
    <Route path='*' element={<h1>Not Found</h1>} />
    <Route path='/' element={<h1><Navigate to={'./signin'}/></h1>} />
    <Route path='/signup' element={<h1><Royhat to={'./signin'}/></h1>} />
    <Route path='/signin' element={<h1><Krish to={'./signup'}/></h1>} />
    <Route path='/tolov' element={<h1><Tolovlar to={'./tolov'}/></h1>} />
    </Routes>
  </Container>
  )
};
export default Root