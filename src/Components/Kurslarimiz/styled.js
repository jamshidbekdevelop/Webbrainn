import styled from "styled-components";

export const Container =styled.div`
display: flex;
width: 100%;
height: 400px;
padding-top: 130px;
justify-content: center;
/* background-color: red; */
/* text-align: center; */
`
export const Cont =styled.div`
display: flex;
width: 100%;
height: 450px;
`
export const Text =styled.span`
font-family: Fira Code;
font-style: normal;
font-weight: 500;
font-size: 79px;
line-height: 88px;
letter-spacing: -0.08em;
margin-left: ${({margin})=>`${margin && '100px'}`};
color: ${({blue})=>`var(${blue? '--colorBlue': '--colorBlack'})`};
`


