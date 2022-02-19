import React from 'react';
import { useConnectionsContext } from '../../Context';
import Button from '../Generic/Button';
import Statistic  from '../Statistic';
import img1 from '../../assets/img/c.png'
import img2 from '../../assets/img/a.png'
import img3 from '../../assets/img/b.png'

import { B, Basic,Blue, Border, Buton, Container, D, Div, IMg, Text } from './styled';
export const Main = () => {
  console.log('snkjsn');
  const [{openState}]= useConnectionsContext()
  return (
    <B>
      <Basic>
      <Div>
      <Container>
          <Blue>Eng kuchli</Blue> va 
          zamonaviy o'qitish uslubida 
         ta'lim beruvchi <Blue>markaz</Blue>
      <Container flex>
        <Container.But> 
          <Buton>
      
            <a style={{'textDecoration': 'none'}} href="/kurslarimiz"><Button width={'230'} border>
              Kurslarimiz
            </Button> </a>
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
        <IMg>  <img style={{'borderRadius': '30px'}} width={'100%'} height={'100%'} src={img1} alt="" /></IMg>
        <IMg buttom> <img style={{'borderRadius': '30px'}} width={'100%'} height={'100%'} src={img2} alt="" /> </IMg>
        <IMg> <img style={{'borderRadius': '30px'}} width={'100%'} height={'100%'} src={img3} alt="" /> </IMg>
      </D>
      </Basic>
      <Statistic/>
    </B>
  );
};
export default Main