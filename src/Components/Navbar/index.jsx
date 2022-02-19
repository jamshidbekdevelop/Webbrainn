import React, { memo }  from 'react';
import {Link, Container, Wrapper, } from './styled'
import { Outlet, useLocation } from 'react-router-dom';
import {navbar} from '../../utils/navbar'
import BrandName from '../Generic/BrandName'
import Button from '../Generic/Button'
import Setting from '../Sittings';
export const Navbar = () =>{
  const location = useLocation()
  console.log('dsdsddssfmsklmflsk');
  return (
    <React.Fragment>
    <Container>
      <BrandName/> 
      <Wrapper  width={'500'}>
      {
        navbar.map(({id, pathname, title, hidden})=> !hidden &&(
          <Link active={location?.pathname===pathname} key={id} to={pathname}>{title}</Link>
        ))
      }
    </Wrapper>
    <Wrapper width={'130'}>
     
    <Button border >
      <a style={{'textDecoration': 'none'}} href="/signin">Krish</a>
    {/* {
        navbar.map(({id, pathname, hidden})=> hidden &&(
          <Link active={location?.pathname===pathname} key={id} to={pathname}>Kirish</Link>
        ))
      } */}
    </Button>
    </Wrapper>
    </Container>
    <Setting/>
    <Outlet/>
    </React.Fragment>
  )
};
export default memo( Navbar)