import styled from "styled-components";

export const Container =styled.div`
/* background-color: yellow; */
display: flex;
font-family: Fira Code;
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 40px;
letter-spacing: -0.06em;
/* margin: 0 25px; */
color: ${({blue})=>`var(${blue? '--colorBlue': '--colorBlack'})`};
`