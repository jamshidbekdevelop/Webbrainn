import React from 'react';
import { Box, Cont, Container, I, Soha, TexT, Text } from './styled';
import Footer from '../Generic/Footer'
import { natijalar } from '../../utils/kurslar';
import { Facebook } from './styled';
import { Instagram } from './styled';
import { Youtube } from './styled';
import { Github } from './styled';

export const BizningJamoa = () => {
  return (
    <React.Fragment >

      <Container>
        <Text >
          <Text margin blue>Webbrain </Text>
           akademiyasida sizga nazariy va amaliy jihatdan <Text blue>katta tajribali</Text> mentorlar dars beradi
        </Text>
      </Container>
      <Cont>
          
      </Cont>
      <Footer/>
    </React.Fragment>
  )
};
export default BizningJamoa