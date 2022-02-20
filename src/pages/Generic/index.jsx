import React from 'react';
import{ Container, Div } from './styled'
import { useLocation } from 'react-router-dom';
import Footer from '../../Components/Generic/Footer';
export const Generic = () => {
    const location = useLocation()
  return (
    <Div>

      <Container>
        <a href="https://www.youtube.com/c/WebBrainAcademy">Assalomu Aleykum</a>
      </Container>
    <Footer/>
    </Div>
  )
};
export default Generic