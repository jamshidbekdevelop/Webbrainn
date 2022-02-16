import React from 'react';
import { Box, Cont, Container, I, Main, Soha, TexT, Text } from './styled';
import Footer from '../Generic/Footer'
import { Facebook } from './styled';
import { Instagram } from './styled';
import { Youtube } from './styled';
import { Github } from './styled';
import { natijalar } from '../../utils/kurslar';

export const BizningJamoa = () => {
  return (
    <Main>
      <Main.M>
      <Container>
        <Text >
          <Text margin blue>Webbrain </Text>
           akademiyasida sizga nazariy va amaliy jihatdan <Text blue>katta tajribali</Text> mentorlar dars beradi
        </Text>
      </Container>
      {/* <Cont>

      </Cont> */}
      <Cont>
         {
           natijalar.map(({img})=>{
             <Box>

             <I>
             <img width={'100%'} height={'100%'} src={img} alt="" />
             </I>
             </Box>
           })
         }
      </Cont>
      </Main.M>
      <Footer/>
    </Main>
  )
};
export default BizningJamoa