import styled from "styled-components";
import { ReactComponent as border } from "../../assets/assets/border.svg";

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const Basic = styled.div`
  width: 78%;
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-wrap: wrap-reverse;
  margin-top: 60px;
`;
export const Left = styled.div`
  min-width: 400px;
  flex: 1;
  box-sizing: border-box;
  height: 750px;
  margin-top: 80px;
  padding-top: 100px;
`;
export const Container = styled.div`
  min-width: 400px;
  box-sizing: border-box;
  white-space: 4px;
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 3.9vw;
  line-height: 88px;
  letter-spacing: -0.06em;
`;
export const Blue = styled.span`
  color: var(--colorBlue);
`;
export const Buttons = styled.div`
  min-width: 380px;
  height: auto;
  display: flex;
`;
export const A = styled.a`
  text-decoration: none;
  display: flex;
`;
export const Buton = styled.div`
  padding-top: 40px;
  display: flex;
  flex-wrap: wrap;
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
`;

export const Right = styled.div`
  min-width: 500px;
  box-sizing: border-box;
  flex: 1;
  gap: 25px;
  display: flex;
  margin-top: 80px;
`;

export const IMg = styled.div`
  min-width: 150px;
  max-width: 226px;
  min-height: 500px;
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
