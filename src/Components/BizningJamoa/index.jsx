import React from 'react';
import { Box, Cont, Container, Div, I, Main, Soha, TexT, Text } from './styled';
import Footer from '../Generic/Footer'
import { Facebook } from './styled';
import { Instagram } from './styled';
import { Youtube } from './styled';
import { Github } from './styled';
import { Jamoa } from '../../utils/kurslar';

export const BizningJamoa = () => {
  return (
    <Main>
      <Main.M>
      <Container>
        <Text >
          <Text blue>Webbrain </Text>
           akademiyasida sizga nazariy va amaliy jihatdan <Text blue>katta tajribali</Text> mentorlar dars beradi
        </Text>
      </Container>
      <Cont>
        { 
             Jamoa.map(({id, img, soha, title, facebook, instagram, youtube, github, hidden})=> hidden&&(
              <Main.Div key={id}>

              <Box >

                  <I><img width={'100%'} height={'100%'} src={img} alt="" /></I>
                  <TexT big>{title}</TexT>
                  <Soha big>{soha}</Soha>
                  <Container fex>
                    <a href={facebook}><Facebook/></a>
                    <a href={instagram}><Instagram/></a>
                    <a href={youtube}><Youtube/></a>
                    <a href={github}><Github/></a>
                  </Container> 
              </Box>
                <Div>
                <TexT big>{soha}</TexT>
                <Soha>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget sollicitudin netus in arcu eget nec id sit morbi. Ut id sodales enim pretium, aliquam, eget pellentesque. In arcu, ornare aenean arcu, eget. Ornare aliquet sed morbi nibh quam sed vitae placerat ornare. Volutpat ut ut justo, vulputate vel auctor. Hac laoreet imperdiet cursus blandit luctus curabitur nec elit. Quis et ornare sit viverra ac nullam. Imperdiet ut venenatis velit et, platea leo, mollis vivamus lacus. A consequat accumsan ac id euismod est sapien. Parturient eu facilisis sem ultricies metus, nunc.</Soha>
                  <a style={{'textDecoration':'none'}} href="#">
                <Div.Dis>
                    <Div.Link>#HTML</Div.Link>
                    <Div.Link>#CSS</Div.Link>
                    <Div.Link>#Bootstrap</Div.Link>
                    <Div.Link>#Sass</Div.Link>
                    <Div.Link>#JavaScripts</Div.Link>
                    <Div.Link>#Reactjs</Div.Link>
                    <Div.Link>#Angular</Div.Link>
                    <Div.Link>#Nodejs</Div.Link>
                    <Div.Link>#Github</Div.Link>
                </Div.Dis>
                  </a>
                </Div>
              </Main.Div>
              )
             )
            }   
      </Cont>
      </Main.M>
      <Footer/>
    </Main>
  )
};
export default BizningJamoa