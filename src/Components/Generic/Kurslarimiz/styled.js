import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Boxs = styled.div`
  box-sizing: border-box;
  padding:30px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 390px;
  max-width: 482px;
  height: 528px;
  :hover {
    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.15);
  }
  border-radius: 10px;
`;
export const I = styled.div`
  display: flex;
  justify-content: center;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 10px;
`;
export const Text = styled.div`
  display: flex;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  margin-bottom: ${({ mb }) => `${mb ? `${mb}px` : "0px"}`};
  font-size: ${({ size }) => `${size ? `${size}px` : "14px"}`};
  line-height: ${({ lh }) => `${lh ? `${lh}px` : "26px"}`};
  color: var(--colorBlack);
`;
