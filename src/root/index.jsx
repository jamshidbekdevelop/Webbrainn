import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { navbar } from '../utils/navbar'
import { Box, Container } from './styled';
import Navbar from '../Components/Navbar'
// import Main from '../Components/Main';
export const Root = () => {
  // active=true
  return(
  <Container>
    <Routes>
    {/* <Box sticky> */}
    <Route element={<Navbar/>}>
    {navbar.map(({id, Element, pathname})=> 
    <Route key={id} path={pathname} element={<Element/>} />
    )}
    </Route>
    {/* </Box> */}
    <Route path='*' element={<h1>Not Found</h1>} />
    <Route path='/' element={<h1><Navigate to={'./asosiy'}/></h1>} />
    {/* <Route path='/asosiy' element={Main}/> */}
    </Routes>
    {/* <Main/> */}
  </Container>
  )
};
export default Root