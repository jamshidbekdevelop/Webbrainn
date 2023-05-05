import styled from "styled-components";
import { ReactComponent as border } from "../../assets/assets/border.svg";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

`;
export const Basic = styled.div`
  max-width: 1520px;
  width: 100%;
  height: auto;
  display: flex;
  box-sizing: border-box;
  margin-top: 60px;
  @media screen and (max-width: 1090px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
export const Left = styled.div`
  max-width: 750px;
  flex: 1;
  box-sizing: border-box;
  height: 750px;
  margin-top: 80px;
  padding-top: 100px;
  @media screen and (max-width: 750px) {
    margin-top: 0;
  }
`;
export const Container = styled.div`
  max-width: 750px;
  width: 100%;
  box-sizing: border-box;
  white-space: 4px;
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 79px;
  line-height: 88px;
  letter-spacing: -0.06em;
  @media screen and (max-width: 1450px) {
    font-size: 60px;
    line-height: 70px;
  }
  @media screen and (max-width: 750px) {
    font-size: 50px;
    line-height: 80px;
  }
  @media screen and (max-width: 450px) {
    font-size: 40px;
    line-height: 60px;
  }
  @media screen and (max-width: 400px) {
    font-size: 33px;
    line-height: 40px;
  }
`;
export const Blue = styled.span`
  color: var(--colorBlue);
`;
export const Buttons = styled.div`
  min-width: 380px;
  width: 100%;
  height: auto;
  display: flex;
`;
export const A = styled.a`
  text-decoration: none;
  display: flex;
`;
export const Buton = styled.div`
  padding-top: 40px;
  width: 100%;
  display: flex;
  gap: 24px;
  @media screen and (max-width: 500px) {
    justify-content: space-around;
  }
`;

export const Border = styled(border)`
  width: 135px;
  height: 200px;
  margin-top: 20px;
`;
export const Text = styled.div`
  margin-left: 240px;
  margin-top: -100px;
  width: 270px;
  height: 178px;
  font-family: Chilanka;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: var(--colorBlack);
  @media screen and (max-width: 750px) {
    width: 160px;
    height: 500px;
  }
`;

export const Right = styled.div`
  max-width: 800px;
  box-sizing: border-box;
  flex: 1;
  gap: 25px;
  display: flex;
  margin-top: 80px;
  justify-content: space-between;
`;

export const IMg = styled.div`
  @media screen and (max-width: 750px) {
    width: 160px;
    height: 500px;
  }
  @media screen and (max-width: 550px) {
    width: 130px;
    height: 400px;
  }
  @media screen and (max-width: 450px) {
    min-width: 103px;
    width: 100%;
    height: 230px;
  }
  min-width: 103px;
  max-width: 226px;
  min-height: 274px;
  height: 605px;
  border-radius: 30px;
  box-shadow: 10px 14px 15px 1px #c4c4c4;
  margin-top: ${({ buttom }) => `${buttom ? "120px" : "0px"}`};
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 30px;
`;
