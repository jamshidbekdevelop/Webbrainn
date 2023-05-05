import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  min-width: 120px;
  width: ${({ width }) => (width ? `${width}px` : "120px")};
  height: ${({ height }) => (height ? `${height}px` : "50px")};
  color: ${({ border }) => (border ? "var(--colorBlue)" : "white")};
  border: ${({ border }) => border && "1px solid var(--colorBlue)"};
  @media screen and (max-width: 500px) {
      width: 160px;
  }
  font-style: normal;
  font-family: Inter;
  font-weight: 500;
  font-size: 18px;
  line-height: 26px;
  letter-spacing: 1px;
  :active {
    transform: scale(0.97);
    color: white;
    background: var(--colorBlue);
  }
  :focus {
    background: var(--colorBlue);
  }
  border-radius: 10px;
`;
