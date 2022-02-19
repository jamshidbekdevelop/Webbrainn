import React from 'react';
import Button from '../Button';
import BrandName from '../BrandName'
import { Box, Container, Div, End, Facebook, Githab, Google, Icon, Input, T, Text, Textting } from './styled';
export const Footer = () => {
  return (
    <React.Fragment >
      <Box>
        <Container>
          <Text>
            Neumorphism UI PRO is a premium Bootstrap UI Kit built based on the newest design trend called Neumorphism.
            <Icon>
              <a href='https://www.youtube.com/c/WebBrainAcademy'><Facebook/></a>
              <a href="https://www.google.com/"><Google/></a>
              <a href='https://github.com/'><Githab/></a>
            </Icon>
          </Text>
          <Div>
            <Textting big>Webbrain</Textting>
            <Textting>Team</Textting>
            <Textting>Partners</Textting>
            <Textting>Lessons</Textting>
            <Textting>About us</Textting>
          </Div>
          <Div>
            <Textting big>Others</Textting>
            <Textting>Docs</Textting>
            <Textting>Changelog</Textting>
            <Textting>Licence</Textting>
            <Textting>Support</Textting>
          </Div>
          <Div.D>
            <Textting big>Others</Textting>
            <Textting>Join our mailing list. We write rarely, but only the best content</Textting>
            <Input placeholder='Email manzikingiz'/>
            <a style={{'textDecoration': 'none'}} href="/signin"><Button border width={355}>Yuborish</Button></a>
          </Div.D>
        </Container>
      </Box>
      <End>
        <BrandName/>
        <T>Copyright Webbrain 2021. All rights reserved</T>
      </End>
    </React.Fragment>
  )
};
export default Footer