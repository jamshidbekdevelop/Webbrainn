import React from 'react';
import { Cont, Container, Main, Text } from './styled';
import Footer from '../Generic/Footer'
import Kurslarimiz from '../Generic/Kurslarimiz'
// import { useLocation } from 'react-router-dom';
export const Kurslar = () => {
    // const location = useLocation()
  return (
      <Main>

    <Main.M>

      <Container>
        <Text >
          <Text margin blue>Webbrain </Text>
            akademiyasi tomonidan taklif etilayotgan
          <Text blue> kurslar ro’yxati</Text> 
        </Text>
      </Container>
      <Cont>
      <Kurslarimiz/><Kurslarimiz/>
      </Cont>
     </Main.M>
      <Footer/>
      </Main>
  )
};
export default Kurslar