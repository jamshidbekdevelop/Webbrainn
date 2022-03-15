import React from "react";
import {
  Box,
  Container,
  Div,
  Icon,
  Img,
  Size,
  St,
  Title,
  Text,
  Boxs,
  I,
  Soha,
  Youtube,
  Facebook,
  Instagram,
  Github,
  Sertifikat,
  Texting,
  Border,
  TExt,
  Border1,
  Border2,
  Border3,
  Border4,
  Body,
  Image,
} from "./styled";
import { Static } from "../../utils/static";
import { Bepul, Jamoa } from "../../utils/kurslar";
import Button from "../Generic/Button";
import { useConnectionsContext } from "../../Context";
import b from "../../assets/img/b1.png";
import b1 from "../../assets/img/b2.png";
import Footer from "../Generic/Footer";
import Kurslarimiz from "../Generic/Kurslarimiz";
export const Statistic = () => {
  const [{ openState }] = useConnectionsContext();

  return (
    <React.Fragment>
      <Body>
        <St>Statistika</St>
        <Div>
          {Static.map(({ id, icon, size, title }) => (
            <Box key={id}>
              <Icon>
                <img height={"100%"} width={"100%"} src={icon} alt="" />
              </Icon>
              <Size>{size}</Size>
              <Title>{title}</Title>
            </Box>
          ))}
        </Div>
        {openState == true && (
          <Div height={"30"} center>
            <Border />
            <Texting>
              85 % bitiruvchilar hozir ishlashyapti, sizda nima gaplar
            </Texting>
          </Div>
        )}
        <St top={120}>Biz Haqimizda</St>
        <Container flex gap={70} fw ai>
          <Container flex gap={30}>
            <Img top>
              <Image src={b} />
            </Img>
            <Img>
              <Image src={b1} />
            </Img>
          </Container>
          <Container width={"450"} height={"256"}>
            {openState == true && (
              <Div.K>
                <Border1 />
                <TExt>
                  bizi yomonlashsa ishanmanglar, kelib ko’ringlar balki undanam
                  yomondirmiz
                </TExt>
              </Div.K>
            )}
            <Text big> Biz haqimizda faqat bizdan eshiting</Text>
            <Text>
              Eget nam quisque lobortis ipsum sollicitudin. Ultricies morbi
              platea ac vel duis sed pretium. Vel ac magnis et lobortis
              adipiscing tempor, tincidunt urna. Morbi aenean natoque bibendum
              ut volutpat.
              <br />
              <br />
              Varius cras facilisi eleifend consequat libero sit nisl. Purus
              arcu viverra facilisi in. Sit consequat dolor lectus velit, neque,
              enim, fames laoreet
            </Text>
          </Container>
        </Container>
        <St top={90}>
          Kurslar
          {openState == true && (
            <Div.L>
              <Border2 />
              <TExt top>bu dollarni kursimas, o’quv kursi. (10820 )</TExt>
            </Div.L>
          )}
        </St>
        <Kurslarimiz />
        <St top={120}>
          Bepul darslar
          {openState == true && (
            <Div.L>
              <Border2 />
              <TExt top>
                to’g’ri o’qidiz, tep-tekin kursalarimizam bor yesli cho’
              </TExt>
            </Div.L>
          )}
        </St>

        <Container flex fw ai jcb>
          {Bepul.map(({ id, img, title, def }) => (
            <Boxs width={"354"} height={"460"} key={id}>
              <I bos>
                <img width={"100%"} height={"100%"} src={img} alt="" />
              </I>
              <Text big>{title}</Text>
              <Text bog>{def}</Text>
              <Button width={"195"} border>
                Kirish
              </Button>
            </Boxs>
          ))}
        </Container>
        <St top={90}>
          Bizning Jamoa
          {openState == true && (
            <Div.L>
              <Border3 />
              <TExt top>
                bizning markaz gigantlari, agar ishanmaselar tizza bo’yi suvda
                turaslar aytippoye
              </TExt>
            </Div.L>
          )}
        </St>
        <Container flex fw ai jcb>
          {Jamoa.map(
            ({
              id,
              img,
              soha,
              title,
              def,
              facebook,
              instagram,
              youtube,
              github,
            }) => (
              <Boxs width={"354"} height={"476"} key={id}>
                <I>
                  <img width={"100%"} height={"100%"} src={img} alt="" />
                </I>
                <Text big>{title}</Text>
                <Soha>{soha}</Soha>
                <Text bog>{def}</Text>
                <Container width={"100"} flex fw ai jcb>
                  <a href={facebook}>
                    <Facebook />
                  </a>
                  <a href={instagram}>
                    <Instagram />
                  </a>
                  <a href={youtube}>
                    <Youtube />
                  </a>
                  <a href={github}>
                    <Github />
                  </a>
                </Container>
              </Boxs>
            )
          )}
        </Container>
        <St topp>Sertifikat</St>
        <Container flex>
          <Sertifikat />
          <Container width={450} height={256} flex column mt={160} ml={100}>
            <Text big>+200 o’quvchilar bizga ishonishgan</Text>
            <Text bog>
              Kursni tamomlagan talabalarning o’zlashtirish ko’rsatkichi
              e’tiborga olingan holda sertifikatlar beriladi.
            </Text>
            {openState === true && (
              <Div.S>
                <Border4 />
                <Text.Tex>
                  bu joyda ko’proq jumla bo’lishi mumkin edi...
                  <br />
                  meni tushundinggiz deb o’ylayman. Tugadi
                </Text.Tex>
              </Div.S>
            )}
          </Container>
        </Container>
      </Body>
      <Footer />
    </React.Fragment>
  );
};
export default Statistic;
