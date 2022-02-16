import React from 'react';
import { useConnectionsContext } from '../../Context';
import Button from '../Generic/Button';
import Statistic  from '../Statistic';
import img1 from '../../assets/img/c.png'
import img2 from '../../assets/img/a.png'
import img3 from '../../assets/img/b.png'

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
              </Text>
            }
        </Container.But>
          {openState===true&&
            <Border/>}
      </Container>
      
      </Container>
      </Div>
      <D>
        <IMg>  <img style={{'border-radius': '30px'}} width={'100%'} height={'100%'} src={img1} alt="" /></IMg>
        <IMg buttom> <img style={{'border-radius': '30px'}} width={'100%'} height={'100%'} src={img2} alt="" /> </IMg>
        <IMg> <img style={{'border-radius': '30px'}} width={'100%'} height={'100%'} src={img3} alt="" /> </IMg>
      </D>
      </Basic>
      <Statistic/>
    </B>
  );
};
export default Main