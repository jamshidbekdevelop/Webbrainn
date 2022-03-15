import styled from "styled-components";
import { ReactComponent as humo } from "../../assets/assets/humo.svg";
import { ReactComponent as crav } from "../../assets/assets/crav.svg";
import { ReactComponent as visa } from "../../assets/assets/visa.svg";
import { ReactComponent as Uzcard } from "../../assets/assets/uzcard.svg";
export const Contt = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  margin: auto;
  width: 56%;
  margin-top: 130px;
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div`
  display: flex;
  justify-content: start;
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 44px;
  line-height: 52px;
  text-align: center;
  letter-spacing: -0.06em;
  color: var(--colorBlue);
  margin-bottom: 30px;
`;
export const Tolov = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 52px;
  width: auto;
`;
export const Border = styled.div`
  width: 350px;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  border: 1px solid #cfccc9;
  box-sizing: border-box;
  border-radius: 10px;
`;
export const Input = styled.input`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;
export const TT = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-left: 10px;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 26px;
  color: #1b1a18;
`;
export const Humo = styled(humo)`
  margin-left: 45px;
  width: 48px;
  height: 30px;
`;
export const Crav = styled(crav)``;
export const Uzcar = styled(Uzcard)`
  width: 48px;
  height: 30px;
`;
export const Visa = styled(visa)`
  margin-left: 45px;
  width: 50px;
  height: 30px;
`;
export const TiT = styled.div`
  margin: 20px 0px 8px 0px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 19px;
  line-height: 28px;
  color: #000000;
`;
export const Card = styled.div`
  width: auto;
  height: 130px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const In = styled.input`
  width: ${({ width }) => (width ? `${width}px` : "150px")};
  height: 50px;
  font-size: 17px;
  padding-left: 20px;
  border: 1px solid #cfccc9;
  box-sizing: border-box;
  border-radius: 10px;
`;
export const End = styled.div`
  display: flex;
  height: 52px;
  justify-content: space-between;
  align-items: center;
`;
export const DiD = styled.div`
  display: flex;
`;
export const TiTTle = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #6c6660;
`;
