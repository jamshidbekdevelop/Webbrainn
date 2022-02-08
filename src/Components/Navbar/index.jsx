import React  from 'react';
import {Link, Container, Wrapper, Text, Buttoon} from './styled'
import { Outlet, useLocation } from 'react-router-dom';
// useConnectionsContext
// NavbarContext
import {navbar} from '../../utils/navbar'
import BrandName from '../Generic/BrandName'
import Button from '../Generic/Button'
import Taggle from '../Toggle'
import { useConnectionsContext } from '../../Context';
// import { NavbarContext } from '../../Context/styled';
export const Navbar = () => {
  // const [state , setState ] = useContext(NavbarContext)
    const [{openState}, dispatch]=useConnectionsContext()
    const location = useLocation()
    const onClose=()=>{
      dispatch({
        type: 'ChangePage', payload: !openState
      })
    }
    // const onClick=(pathname)=>{
    //   // console.log(hidden , 'hi');
    //   // console.log(id, 'id');
    //   console.log(pathname, 'sljkdkf');
    // }
  return (
    <React.Fragment >
    <Container>
      <BrandName/> 
      <Wrapper>
      {
        navbar.map(({id, pathname, title, hidden})=> !hidden &&(
          <Link active={location?.pathname===pathname} key={id} to={pathname}>{title}</Link>
        ))
      }
    </Wrapper>
    <Wrapper>
      {
        openState===true ? <Text kerak>Qiziqarli sayohat</Text> : <Text>Qiziqarli sayohat</Text>
      }
    <Buttoon onClick={onClose}>
    <Taggle /> 
    </Buttoon>
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