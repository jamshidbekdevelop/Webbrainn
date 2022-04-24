import styled from "styled-components";
import { ReactComponent as img1 } from "../../assets/assets/sittings.svg";
import { ReactComponent as x } from "../../assets/assets/x.svg";

export const Block = styled.div`
  width: 60px;
  height: 56px;
  background: blue;
  box-shadow: 4px 8px 16px rgba(0, 118, 245, 0.4);
  border-radius: 0px 100px 100px 0px;
  display: grid;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  position: fixed;
  left: 0;
  top: 40%;
`;
Block.Img = styled(img1)``;

export const Set = styled.div`
  width: 200px;
  height: 148px;
  background: #f5faff;
  box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
  border-radius: 0px 10px 10px 0px;
  position: absolute;
  transform: translateX(200px);
  transition: 0.2s;
  transform: translateX(${({ value }) => (value ? "-200px" : "0")});
  padding: 17px 16px;
`;
Set.Header = styled.div`
  width: 170px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
Set.HeaderLeft = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #0076f5;
`;
Set.HeaderRight = styled.div``;
Set.HeaderRightImg = styled(x)`
  float: right;
  width: 15px;
  height: 15px;
`;
export const Buttoon = styled.button`
  width: 5px;
  height: 5px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
`;
export const Text = styled.div`
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: ${({ kerak }) => `var(${kerak ? "--colorBlue" : "--colorBlack"})`};
  margin-right: 8px;
  width: 150px;
`;
