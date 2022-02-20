import React from 'react';
import { useLocation } from 'react-router-dom';
import Setting from '../Sittings';
import Button from '../Generic/Button';
import { Basic, Container, Count, Div, Face, Git, Goog, Input, Text, Title } from './styled';
export const Krish = () => {
    const location = useLocation()
  return(
    <React.Fragment>
      <Basic>
      <Container>
        <Text>
        <Text blue>WebBrain </Text>
          akademiyasi rasmiy web sahifasiga
        <Text blue> xush kelibsiz!</Text>
        </Text>
      </Container>
      <Div>
        <Title>Kirish</Title>
        <Title.Text>Email manzilingiz</Title.Text>
        <Input type="email" placeholder='namuna@gmail.com'></Input>
        <Title.Text>Parolingiz</Title.Text>
        <Input type='password' placeholder='parol'></Input>
        <Count>
          <Input pl type='checkbox'/>
          <Text.Ti>Karta ma’lumotlarini eslab qolish</Text.Ti>
          <Text.TT>
            <a href="#">Parolni unutdinggizmi?</a>
          </Text.TT>
        </Count>
        <a style={{'textDecoration': 'none'}} href="./tolov"><Button  border width={'auto'}>Tasdiqlash</Button></a>
        <Text.Ti kk>yoki ijtimoiy tarmoqlar orqali kiring</Text.Ti>
        <Count center><Face/><Goog/><Git/></Count>
        <Text.Ti>Hali ro’yxatdan o’tmaganmisiz? <a color={'#6C6660'} href="./signup"> Ro’yxatdan o’tish</a></Text.Ti>
      </Div>
      </Basic>
        <Setting/>
    </React.Fragment>
  )  
};
export default Krish