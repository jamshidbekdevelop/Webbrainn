import React  from 'react';
import {Link, Container, Wrapper, Text, Buttoon, ReactT} from './styled'
import { Outlet, useLocation } from 'react-router-dom';
import {navbar} from '../../utils/navbar'
import BrandName from '../Generic/BrandName'
import Button from '../Generic/Button'
import Taggle from '../Toggle'
import { useConnectionsContext } from '../../Context';
export const Navbar = () => {
    const [{openState}, dispatch]=useConnectionsContext()
    const location = useLocation()
    const onClose=()=>{
      dispatch({
        type: 'ChangePage', payload: !openState
      })
    }
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
      {/* {
        openState===true ? <Text kerak>Qiziqarli sayohat</Text> : <Text>Qiziqarli sayohat</Text>
      }
    <Buttoon onClick={onClose}>
    <Taggle /> 
    </Buttoon> */}
    <Button border >
      Kirish
    </Button>
    </Wrapper>
    </Container>
    
    <Outlet/>
    </React.Fragment>
  )
};
export default Navbar