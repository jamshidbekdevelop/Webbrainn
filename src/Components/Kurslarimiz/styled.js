import styled from "styled-components";

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
  height: 400px;
  padding-top: 130px;
  justify-content: center;
`;
export const Cont = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;
export const Text = styled.span`
  font-family: Fira Code;
  font-style: normal;
  font-weight: 500;
  font-size: 4vw;
  line-height: 88px;
  letter-spacing: -0.08em;
  margin-left: ${({ margin }) => `${margin && "100px"}`};
  color: ${({ blue }) => `var(${blue ? "--colorBlue" : "--colorBlack"})`};
`;
