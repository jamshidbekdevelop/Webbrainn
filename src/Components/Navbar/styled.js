import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Container = styled.div`
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0px 70px;
  background-color: white;
  z-index: 999;
`;
export const Link = styled(NavLink)`
  font-family: Inter;
  display: flex;
  flex-wrap: nowrap;
  font-style: normal;
  font-weight: 500;
  font-size: 17px;
  line-height: 26px;
  color: ${({ active }) => `var(${active ? "--colorBlue" : "--colorBlack"})`};
  text-decoration: none;
`;
export const Wrapper = styled.div`
  display: flex;
  width: ${({ width }) => (width ? `${width}px` : "auto")};
  justify-content: space-between;
  align-items: center;
`;
