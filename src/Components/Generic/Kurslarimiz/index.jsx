import React from 'react';
import { Kurs } from '../../../utils/kurslar';
import Button from '../Button';
import { Container, Boxs, I, Text, } from './styled';
// import { useLocation } from 'react-router-dom';
export const Kurslarimiz = () => {
    // const location = useLocation()
  return(
    <Container flexx>
         {
             Kurs.map(({id, img, title, def})=>
                <Boxs key={id}>
                    <I> <img src={img} alt="" /> </I>
                    <Text big>{title}</Text>
                    <Text bog>{def}</Text>
                    <Button width={'195'} border>Batafsil</Button>
                </Boxs>
             )
         }
    </Container>
  )
};
export default Kurslarimiz