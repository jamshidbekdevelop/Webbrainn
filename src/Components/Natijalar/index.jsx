import React from 'react';
import { Box, Cont, Container, I, Soha, TexT, Text } from './styled';
import Footer from '../Generic/Footer'
import { natijalar } from '../../utils/kurslar';
import { Facebook } from './styled';
import { Instagram } from './styled';
import { Youtube } from './styled';
import { Github } from './styled';

export const Natijalar = () => {
  return (
    <React.Fragment >

      <Container>
        <Text >
          <Text blue>Webbrain </Text>
            akademiyasi o’z faoliyati davomida <Text blue>200 dan ortiq</Text> dasturlash 
            sohasi vakillarini tayyorlagan.
        </Text>
      </Container>
      <Cont>
        { 
             natijalar.map(({id, img, soha, title, def, facebook, instagram, youtube, github})=>
                <Box key={id}>
                  <I><img width={'100%'} height={'100%'} src={img} alt="" /></I>
                  <TexT big>{title}</TexT>
                  <Soha>{soha}</Soha>
                  <TexT bog>{def}</TexT>
                  <Container fex>
                    <a href={facebook}><Facebook/></a>
                    <a href={instagram}><Instagram/></a>
                    <a href={youtube}><Youtube/></a>
                    <a href={github}><Github/></a>
                  </Container> 
                </Box>
             )
         }   
      </Cont>
      <Footer/>
    </React.Fragment>
  )
};
export default Natijalar