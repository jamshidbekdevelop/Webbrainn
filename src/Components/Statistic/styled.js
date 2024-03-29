import styled from "styled-components";

import sertifikat from "../../assets/img/sertifikat.png";
import { ReactComponent as fasebook } from "../../assets/assets/facebook.svg";
import { ReactComponent as instagram } from "../../assets/assets/intagram.svg";
import { ReactComponent as youtube } from "../../assets/assets/youtube.svg";
import { ReactComponent as githab } from "../../assets/assets/github.svg";
import { ReactComponent as border3 } from "../../assets/assets/border5.svg";
import { ReactComponent as border4 } from "../../assets/assets/border6.svg";

export const Body = styled.div`
  margin: auto;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  max-width: 1520px;
  width: 100%;
`;

export const Container = styled.div`
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  height: ${({ height }) => (height ? `${height}px` : "auto")};
  display: ${({ flex }) => `${flex && "flex"}`};
  flex-direction: ${({ column }) => `${column && "column"}`};
  gap: ${({ gap }) => `${gap ? `${gap}px` : "0px"}`};
  margin-top: ${({ mt }) => `${mt ? `${mt}px` : "0px"}`};
  margin-right: ${({ mr }) => `${mr ? `${mr}px` : "0px"}`};
  margin-left: ${({ ml }) => `${ml ? `${ml}px` : "0px"}`};
  flex-wrap: ${({ fw }) => `${fw && "wrap"}`};
  justify-content: ${({ jc }) => `${jc && "center"}`};
  justify-content: ${({ jcb }) => `${jcb && "space-between"}`};
  align-items: ${({ ai }) => `${ai && "center"}`};
  position: relative;
  max-width: ${({ mw }) => (mw ? `${mw}px` : "auto")};
`;
export const St = styled.div`
  display: flex;
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  color: var(--colorBlack);
  letter-spacing: -0.06em;
  margin-bottom: 20px;
  margin-top: ${({ top }) => `${top ? `${top}px` : "0px"}`};
`;
export const Div = styled.div`
  margin-left: ${({ topp }) => `${topp && "90px"}`};
  height: fit-content;
  display: flex;
  justify-content: space-between;
  justify-content: ${({ center }) => `${center ? "center" : "space-between"}`};
  flex-wrap: wrap;
  gap: 30px;
`;

Div.K = styled.div`
  position: absolute;
  top: -140px;
  left: 200px;
  display: flex;
  width: 450px;
  height: 150px;
`;
Div.L = styled.div`
  display: flex;
  margin-left: 20px;
  width: 600px;
  height: 100px;
`;
Div.S = styled.div`
  margin-left: 200px;
  display: flex;
  height: 160px;
  width: 450px;
`;
export const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #f5faff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  min-height: 199px;
  min-width: 157px;
  max-width: 354px;
  max-height: 246px;
  width: 100%;
`;
export const Icon = styled.div`
  min-height: 40px;
  min-width: 40px;
  max-width: 60px;
  max-height: 66px;
`;
export const Size = styled.div`
  color: var(--colorBlack);
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.06em;
`;
export const Title = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 25px;
  line-height: 34px;
  color: var(--colorBlack);
`;
export const Img = styled.div`
  margin-top: ${({ top }) => `${top ? "30px" : "0px"}`};
  min-width: 200px;
  max-width: 354px;
  height: 550px;
  box-shadow: 8px 8px 30px 10px #c4c4c4;
  border-radius: 30px;
  @media screen and (max-width: 550px) {
    width: 170px;
    border-radius: 15px;

    height: 260px;
  }
`;
export const Image = styled.img`
  border-radius: 30px;
  width: 100%;
  height: 100%;
  @media screen and (max-width: 550px) {
    border-radius: 15px;
  }
`;
export const Text = styled.div`
  display: flex;
  justify-content: flex-start;
  font-family: Inter;
  font-style: normal;
  text-align: ${({ bog }) => `${bog && "center"}`};
  font-weight: normal;
  margin-bottom: ${({ bog }) => `${bog && "20px"}`};
  font-size: ${({ big }) => `${big ? "22.5px" : "14px"}`};
  line-height: ${({ big }) => `${big ? "34px" : "26px"}`};
  color: var(--colorBlack);
`;
export const Boxs = styled.div`
  box-sizing: border-box;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "482px")};
  height: ${({ height }) => (height ? `${height}px` : "436px")};

  :hover {
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.15);
  }
  border-radius: 10px;
`;
export const I = styled.div`
  display: flex;
  justify-content: center;
  width: ${({ bos }) => `${bos ? "280px" : "150px"}`};
  height: ${({ bos }) => `${bos ? "200px" : "150px"}`};
  border-radius: ${({ bos }) => `${bos && "2px"}`};
  border-radius: 50%;
  background-color: yellow;
`;

export const Soha = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 17.5px;
  line-height: 28px;
  color: var(--colorBlue);
`;
export const Icons = styled.div`
  height: 20px;
  width: 20px;
`;

export const Facebook = styled(fasebook)``;
export const Instagram = styled(instagram)``;
export const Youtube = styled(youtube)``;

export const Github = styled(githab)``;
export const Sertifikat = styled.img.attrs({
  src: sertifikat,
})`
  min-width: 600px;
  max-width: 738px;
  min-height: 350px;
  height: 524px;
  margin-left: 10px;
  @media screen and (max-width: 650px) {
    min-width: 370px;
    height:500px;
    width:100%;
  }
  @media screen and (max-width: 650px) {
    height:400px;
  }

`;
export const Border3 = styled(border3)`
  margin-top: 25px;
  width: 180px;
  height: 46px;
`;
export const Border4 = styled(border4)`
  width: 160px;
  height: 68px;
`;
Text.Tex = styled.div`
  margin-top: 50px;
  width: 335px;
  height: 104px;
  font-family: Chilanka;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 26px;
  letter-spacing: 0.02em;
  color: #514d48;
`;
