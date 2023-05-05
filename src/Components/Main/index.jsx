import React from "react";
import Button from "../Generic/Button";
import Statistic from "../Statistic";
import img1 from "../../assets/img/c.png";
import img2 from "../../assets/img/a.png";
import img3 from "../../assets/img/b.png";

import {
  Body,
  Basic,
  Blue,
  Buttons,
  Buton,
  Container,
  IMg,
  Left,
  Right,
  Image,
  A,
} from "./styled";
export const Main = () => {
  return (
    <Body>
      <Basic>
        <Left>
          <Container>
            <Blue>Eng kuchli</Blue> va zamonaviy o'qitish uslubida ta'lim
            beruvchi <Blue>markaz</Blue>
            <Buttons>
              <Buton>
                  <A href={"kurslarimiz"}>
                    <Button width={230} border>
                      Kurslarimiz
                    </Button>
                  </A>
                  <Button width={230} border>
                    Aloqa
                  </Button>
              </Buton>
              {/* <div>{openState === true && <Border />}</div> */}
            </Buttons>
          </Container>
        </Left>
        <Right>
          <IMg>
            <Image src={img1} />
          </IMg>
          <IMg buttom>
            <Image src={img2} />
          </IMg>
          <IMg>
            <Image src={img3} />
          </IMg>
        </Right>
      </Basic>
      <Statistic />
    </Body>
  );
};
export default Main;
