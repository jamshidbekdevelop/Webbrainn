import styled from "styled-components";
import img1 from '../../assets/img/c.png'
import img2 from '../../assets/img/a.png'
import img3 from '../../assets/img/b.png'
import {ReactComponent as border} from '../../assets/assets/border.svg'
export const IMg =styled.div`
width: 236px;
height: 625px;
/* box-sizing: border-box; */
/* background-color: yellowgreen; */
border-radius: 30px;
box-shadow: #C4C4C4 7px 8px 50px 5px;
margin-top: ${({buttom})=> `${buttom? '120px' : '0px'}`};
margin-bottom: ${({buttom})=> `${buttom? '90px' : '0px'}`};
`
export const Container=styled.div`
/* box-sizing: border-box; */
margin-top: ${({flex})=>`${flex ? '0px' : '110px'}`};
/* margin-top: ${({but})=>`${but ? '0px' : '110px'}`}; */
white-space: 4px;
display: ${({flex})=>`${flex && 'flex'}`};
color: ${({blue})=>`var(${blue? '--colorBlue': '--colorBlack'})`};
font-family: Fira Code;
font-style: normal;
font-weight: 500;
font-size: 71px;
line-height: 86px;
letter-spacing: -0.06em;
`
Container.But=styled.div`
margin: 0;
padding: 0;
/* height: 300px; */
`
export const Basic = styled.div`
width: 100%;
display: flex;
height: 100%;
`
export const D=styled.div`
flex: 1;
/* background-color: red; */
display: flex;
justify-content: space-between;
margin-top: 60px;
`
export const Div=styled.div`
/* background-color: red; */
flex: 1;
box-sizing: border-box;
/* width: 750px; */
height: 750px;
/* background: yellow; */
margin-top: 80px;
/* display: flex; */
/* align-items: center; */
/* flex-direction: column; */
`
export const Blue=styled.span`
color: var(--colorBlue);
`
export const Buton=styled.div`
display: flex;
margin-top: 48px;

/* margin: 48px 0px; */
gap: 22px;
`
export const Img1 = styled.img.attrs({
    src: img1
})` 
width: 236px;
height: 625px;
border-radius: 30px;

`;
export const Img2 = styled.img.attrs({
    src: img2
})` 
width: 236px;
height: 625px;
border-radius: 30px;

`;
export const Img3 = styled.img.attrs({
    src: img3
})` 
width: 236px;
height: 625px;
border-radius: 30px;

`;


export const B =styled.div`
/* background-color: blue; */
/* margin-top: 40px; */
padding-top: 40px;
`
export const Border=styled(border)`
width: 135px;
height: 200px;
/* position: relative; */
/* background-color: yellowgreen; */
`
export const Text =styled.div`
/* background-color: yellow; */
/* position: absolute; */
margin-left: 220px;
margin-top: 20px;
width: 270px;
height: 178px;
font-family: Chilanka;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.02em;
color: var(--colorBlack);
`