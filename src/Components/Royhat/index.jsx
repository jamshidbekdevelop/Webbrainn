import React from "react";
import Button from "../Generic/Button";
import {
  Basic,
  Container,
  Count,
  Div,
  Face,
  Git,
  Goog,
  Input,
  Text,
  Title,
} from "./styled";
export const Royhat = () => {
  return (
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
          <Title>Ro’yxatdan o’tish</Title>
          <Title.Text>Email manzilingiz</Title.Text>
          <Input type="email" placeholder="namuna@gmail.com"></Input>
          <Title.Text>Parolingiz</Title.Text>
          <Input type="password" placeholder="parol"></Input>
          <Title.Text>Parolingiz takrorlang</Title.Text>
          <Input type="password" placeholder="parol"></Input>
          <Count>
            <Input pl type="checkbox" />
            <Text.Ti>Hamma shartlarga rozilik bildiraman</Text.Ti>
          </Count>
          <a style={{ textDecoration: "none" }} href="./asosiy">
            <Button border width={"auto"}>
              Tasdiqlash{" "}
            </Button>
          </a>
          <Text.Ti kk>yoki ijtimoiy tarmoqlar orqali kiring</Text.Ti>
          <Count center>
            <Face />
            <Goog />
            <Git />
          </Count>
          <Text.Ti>
            Hali ro’yxatdan o’tmaganmisiz?{" "}
            <a color={"#6C6660"} href="./signin">
              {" "}
              Kirish
            </a>
          </Text.Ti>
        </Div>
      </Basic>
    </React.Fragment>
  );
};
export default Royhat;
