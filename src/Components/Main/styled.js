import styled from "styled-components";
import img1 from '../../assets/img/c.png'
import img2 from '../../assets/img/a.png'
import img3 from '../../assets/img/b.png'
import {ReactComponent as border} from '../../assets/assets/border.svg'
export const IMg =styled.div`
min-width: 170px;
min-height: 500px;
height: 600px;
border-radius: 30px;
box-shadow:  10px 14px 15px 1px  #C4C4C4;
margin-top: ${({buttom})=> `${buttom? '120px' : '0px'}`};
margin-bottom: ${({buttom})=> `${buttom? '90px' : '0px'}`};
`
export const Container=styled.div`
min-width: 200px;
box-sizing: border-box;
margin-top: ${({flex})=>`${flex ? '0px' : '60px'}`};
white-space: 4px;
display: ${({flex})=>`${flex && 'flex'}`};
color: ${({blue})=>`var(${blue? '--colorBlue': '--colorBlack'})`};
font-family: Fira Code;
font-style: normal;
font-weight: 500;
font-size: 6.7vh;
line-height: 86px;
letter-spacing: -0.06em;
`
Container.But=styled.div`
margin: 0;
padding: 0;
`
export const Basic = styled.div`

width: 83%;
display: flex;
box-sizing: border-box;
flex-wrap: wrap;
`
export const D=styled.div`
box-sizing: border-box;
flex: 5;
gap: 25px;
display: flex;
margin-top: 60px;
margin-right: 30px;
`
export const Div=styled.div`
flex: 4;

box-sizing: border-box;
height: 750px;
margin-top: 80px;
`
export const Blue=styled.span`
color: var(--colorBlue);
`
export const Buton=styled.div`
display: flex;
margin-top: 48px;

gap: 22px;
`

export const B =styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
padding-top: 40px;
`
export const Border=styled(border)`
width: 135px;
height: 200px;
margin-top: 20px;
margin-left: 410px;
position: absolute;
`
export const Text =styled.div`
margin-left: 160px;
margin-top: 40px;
width: 270px;
height: 178px;
font-family: Chilanka;
font-style: normal;
font-weight: normal;
font-size: 19px;
line-height: 26px;
letter-spacing: 0.02em;
color: var(--colorBlack);
`