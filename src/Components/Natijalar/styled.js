import styled from "styled-components";
import { ReactComponent as fasebook } from "../../assets/assets/facebook.svg";
import { ReactComponent as instagram } from "../../assets/assets/intagram.svg";
import { ReactComponent as youtube } from "../../assets/assets/youtube.svg";
import { ReactComponent as githab } from "../../assets/assets/github.svg";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
Main.M = styled.div`
  width: 78%;
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  gap: ${({ fex }) => `${fex && "5px"}`};
  height: ${({ fex }) => `${fex ? "0px" : "400px"}`};
  padding-top: ${({ fex }) => `${fex ? "0px" : "120px"}`};
  justify-content: center;
`;
export const Cont = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: auto;
  flex-wrap: wrap;
  margin-top: 100px;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 354px;
  height: 476px;
  padding: 40px 16px;
  margin-bottom: 30px;
  align-items: center;
  :hover {
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.15);
  }
  border-radius: 10px;
`;
export const TexT = styled.div`
  display: flex;
  justify-content: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  text-align: center;

  margin-top : 16px !important;
  margin-bottom: ${({ bog }) => `${bog && "20px"}`};
  margin-top: ${({ bog }) => `${bog && "16px"}`};
  font-size: ${({ big }) => `${big ? "22.5px" : "14px"}`};
  line-height: ${({ big }) => `${big ? "34px" : "26px"}`};
  color: var(--colorBlack);
`;
export const Text = styled.span`
  font-family: Fira Code;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 4vw;
  line-height: 88px;
  letter-spacing: -0.08em;
  color: ${({ blue }) => `var(${blue ? "--colorBlue" : "--colorBlack"})`};
`;
export const Facebook = styled(fasebook)``;
export const Instagram = styled(instagram)``;
export const Youtube = styled(youtube)`
  height: 20px;
`;

export const Github = styled(githab)``;
export const I = styled.div`
  display: flex;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
export const Soha = styled.h2`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 17.5px;
  line-height: 28px;
  color: var(--colorBlue);
`;
