import styled from "styled-components";
import {ReactComponent as fasebook} from '../../assets/assets/facebook.svg'
import {ReactComponent as instagram} from '../../assets/assets/intagram.svg'
import {ReactComponent as youtube} from '../../assets/assets/youtube.svg'
import {ReactComponent as githab} from '../../assets/assets/github.svg'
export const Container =styled.div`
display: flex;
width: 100%;
gap: ${({fex})=> `${fex && '5px'}`};
margin-top: ${({fex})=> `${fex && '20px'}`};
height: ${({fex})=>`${fex ? '0px' : '400px'}`};
padding-top: ${({fex})=>`${fex ? '0px' : '120px'}`};
justify-content: center;
`
export const Cont =styled.div`
width: 100%;
height: auto;
margin-top: 70px;
`
export const Box = styled.div`
display: flex;
flex: 2;
flex-direction: column;
justify-content: center;
padding: 50px;
padding-right: 0px;
height: auto;
align-items: center;
`
export const TexT=styled.div`
display: flex;
justify-content: center;
font-family: Inter;
font-style: normal;
font-weight: normal;
text-align: center;
font-size: ${({big})=>`${big? '22.5px': '14px'}`};
line-height:${({big})=>`${big? '34px': '26px'}`};
color: var(--colorBlack);
`
export const Text =styled.span`
font-family: Fira Code;
text-align: center;
font-style: normal;
font-weight: 500;
font-size: 4.4vw;
line-height: 88px;
letter-spacing: -0.08em;
color: ${({blue})=>`var(${blue? '--colorBlue': '--colorBlack'})`};
`
export const Facebook = styled(fasebook)`

`
export const Instagram = styled(instagram)`

`
export const Youtube = styled(youtube)`
height: 20px;
`

export const Github = styled(githab)`

`
export const I=styled.div`
display: flex;
justify-content: center;
width: 150px;
height: 150px;
border-radius: 50%;
`
export const Soha = styled.h2`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: ${({big})=>`${big? '17px': '1.12vw'}`};
height: auto;
line-height: 28px;
color: var(--colorBlack);
`
export const Main =styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
Main.M=styled.div`
width: 83%;
`
Main.Div=styled.div`
padding: 10px;
box-sizing: border-box;
display: flex;
min-width: 500px;
height: auto;
background: #F5FAFF;
margin-bottom: 32px;
box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
border-radius: 10px;
`
export const Div=styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
flex: 7;
height: auto;
padding: 83px 96px;
`
Div.Dis=styled.div`
display: flex;
flex-wrap: wrap;
margin: 30px 0px;
`
Div.Link=styled.div`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: var(--colorBlue);
margin-right: 50px;

`