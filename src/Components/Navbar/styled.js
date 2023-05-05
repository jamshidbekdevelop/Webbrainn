import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Nav = styled.div`
  top: 0;
  position: sticky;
  max-width: 1570px;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background: white;
  justify-content: space-between;
  z-index: 999;
  padding: 0 20px;
  .btn_active {
    display: none;
  }
  @media screen and (max-width: 750px) {
    justify-content: space-between;
    .first {
      display: none;
    }
  }
  @media screen and (max-width: 500px) {
    .btn_none {
      display: none;
    }
    .btn_active {
      display: flex;
    }
  }
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
  gap: 20px;
`;

export const Bar = styled(FaBars)`
  width: 30px;
  height: 30px;
  color: #000;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 750px) {
    display: flex;
  }
`;
export const Times = styled(FaTimes)`
  width: 30px;
  height: 30px;
  color: #000;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 750px) {
    display: flex;
  }
`;

export const SideManu = styled.div`
  @media screen and (max-width: 750px) {
    display: flex;
  }
  top: 70px;
  right: 30px;
  width: 200px;
  position: absolute;
  position: fixed;
  display: none;
  flex-direction: column;
  align-items: end;
  padding: 15px;
  background: whitesmoke;
  gap: 10px;
  margin-left: auto;
  box-sizing: border-box;
  z-index: 990px;
`;
