import React from 'react';
import { useConnectionsContext } from '../../Context';
import Button from '../Generic/Button';
import Statistic  from '../Statistic';
// import Toggle from '../Toggle'
// useConnectionsContext
import { B, Basic,Blue, Border, Buton, Container, D, Div, IMg, Img1, Img2, Img3, Text } from './styled';
export const Main = () => {
  const [{openState}]= useConnectionsContext()
  return (
    <B>
      <Basic>
      <Div>
      <Container>
          <Blue>Eng kuchli</Blue> va 
          zamonaviy o'qitish uslubida 
         ta'lim beruvchi <Blue>markaz</Blue>
         {/* {openState===true&& */}
      <Container flex>
      <Container.But> 
        {/* } */}
      <Buton>
      
        <Button width={'230'} border>
            Kurslarimiz
        </Button> 
        <Button width={'230'} border>
            Aloqa
        </Button>
      </Buton> 
      {openState===true&&
      <Text>
        siz vapshe hech narsa bilmasangizam o’qito’ramiz (sizam vruchat qvorarsiz )
      </Text>}
      </Container.But>
      {openState===true&&
      <Border/>}
      </Container>
      
      </Container>
      </Div>
      <D>
        <IMg> <Img1/> </IMg>
        <IMg buttom> <Img2/> </IMg>
        <IMg> <Img3/> </IMg>
        {/* <Fiirst/> */}
        {/* <img width={'100%'} height={'100%'} src={First} alt="" /> */}
      </D>
      </Basic>
      <Statistic/>
    </B>
  );
};
export default Main