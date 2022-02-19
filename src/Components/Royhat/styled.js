import styled from "styled-components";
import {ReactComponent as Facebook} from '../../assets/assets/fase.svg'
import {ReactComponent as Google} from '../../assets/assets/goog.svg'
import {ReactComponent as Github} from '../../assets/assets/git.svg'
export const Basic=styled.div`
display: flex;
margin: auto;
height: 100vh;
min-width: 400px;
max-width: 83%;
flex-wrap: wrap;
align-items: center;
`
export const Container =styled.div`
display: flex;
flex: 4;
padding: 0px 50px;
min-width: 400px;
`
export const Text =styled.span`
font-family: Fira Code;
font-style: normal;
font-weight: 500;
font-size: 4.1vw;
line-height: 88px;
letter-spacing: -0.08em;
margin-left: ${({margin})=>`${margin && '100px'}`};
color: ${({blue})=>`var(${blue? '--colorBlue': '--colorBlack'})`};
`
export const Div =styled.div`
max-width: 490px;
height: 630px;
display: flex;
flex-direction: column;
padding: 20px 24px;
box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
border-radius: 10px;
flex: 2;
`
export const Title=styled.div`
font-family: Fira Code;
font-style: normal;
font-weight: 500;
font-size: 33px;
line-height: 40px;
letter-spacing: -0.06em;
color: var(--colorBlue);
`
Title.Text=styled.div`
padding: 24px 0px 8px 0px;
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 19px;
line-height: 28px;
color: var(--colorBlack);
`
export const Input=styled.input`
height: 40px;
border: 1px solid #CFCCC9;
box-sizing: border-box;
border-radius: 10px;
padding-left: 25px;
font-size: 16px;
width: ${({pl})=>`${pl && '24px'}`};
`
export const Count=styled.div`
display: flex;
height: 40px;
margin: 20px 0px;
justify-content: ${({center})=>`${center&& 'center'}`};
gap: ${({center})=>`${center&& '10px'}`};
`
Text.Ti=styled.div`
display: flex;
align-self: center;
padding-left: 10px;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 22px;
color: var(--colorBlack);
margin-top: ${({kk})=>`${kk && '20px'}`};
`
Text.TT=styled.div`
display: flex;
align-self: center;
padding-left: 20px;
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 11px;
line-height: 22px;
color: var(--colorBlue);
`
export const Face=styled(Facebook)``
export const Goog=styled(Google)``
export const Git=styled(Github)``