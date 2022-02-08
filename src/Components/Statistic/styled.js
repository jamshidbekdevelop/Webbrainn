import styled from "styled-components";
import b from '../../assets/img/b1.png'
import b1 from '../../assets/img/b2.png'
import sertifikat from '../../assets/img/sertifikat.png'
import {ReactComponent as fasebook} from '../../assets/assets/facebook.svg'
import {ReactComponent as instagram} from '../../assets/assets/intagram.svg'
import {ReactComponent as youtube} from '../../assets/assets/youtube.svg'
import {ReactComponent as githab} from '../../assets/assets/github.svg'
import {ReactComponent as border} from '../../assets/assets/border2.svg'
import {ReactComponent as border1} from '../../assets/assets/border3.svg'
import {ReactComponent as border2} from '../../assets/assets/border4.svg'
import {ReactComponent as border3} from '../../assets/assets/border5.svg'
import {ReactComponent as border4} from '../../assets/assets/border6.svg'

export const Container =styled.div`
display: ${({img})=>`${img && 'flex' }`};
display: ${({flex})=>`${flex && 'flex' }`};
display: ${({flexx})=>`${flexx && 'flex' }`};
display: ${({Ja})=>`${Ja && 'flex' }`};
flex-direction: ${({Ja})=>`${Ja && 'column' }`};
gap: ${({img})=>`${img && '30px' }`};
gap: ${({flex})=>`${flex && '150px' }`};
/* margin-right: ${({gap})=>`${gap && '12px' }`}; */

justify-content: ${({Ja})=>`${Ja && 'center' }`};
justify-content: ${({flexx})=>`${flexx && 'space-between' }`};
align-items: ${({flex})=>`${flex && 'center' }`};
align-items: ${({flexx})=>`${flexx && 'center' }`};
align-items: ${({Ja})=>`${Ja && 'center' }`};
/* width: ${({Ja})=>`${Ja ? '482px' : 'width' }`}; */
width: ${({width})=> (width ? `${width}px` : 'auto')};
height: ${({height})=> (height ? `${height}px` : 'auto')};
/* height: ${({Ja})=>`${Ja ? '256px' : 'height' }`}; */
/* margin-left: ${({Ja})=>`${Ja && '80px' }`}; */
margin-top: ${({Ja})=>`${Ja && '160px' }`};
margin-top: ${({Ka})=>`${Ka && '0px' }`};
`
export const St =styled.div`
display: flex;
align-items: flex-end;
font-family: Fira Code;
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 52px;
color: var(--colorBlack);
letter-spacing: -0.06em;
margin-bottom: 20px;
margin-top: ${({top})=> `${top && '120px'}` };
margin-top: ${({topp})=> `${topp && '90px'}` };
`
export const Div=styled.div`
margin-top: 15px;
margin-left: ${({topp})=> `${topp && '90px'}` };
width: 100%;
height: ${({height})=> `${height ? 'heightpx' : '246px'}` };
display: flex;
justify-content:${({center})=> `${center ? 'center' : 'space-between'}` };

`

Div.K=styled.div`
display: flex;
margin-left: 150px;
width: 450px;
height: 150px;
/* background-color: yellow; */
`
Div.L=styled.div`
display: flex;
/* padding-top: 80px; */
margin-left: 20px;
/* margin-bottom: 40px; */
width: 600px;
height: 100px;
/* background-color: yellow; */
`
Div.S=styled.div`
margin-left: 260px;
/* background-color: yellow; */
display: flex;
height: 160px;
width: 450px;
`
export const Box =styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background: #F5FAFF;
box-shadow: 0px 0px 30px -10px rgba(0, 0, 0, 0.15);
border-radius: 10px;
width: 354px;
height: 246px;

`
export const Icon = styled.div`
width: 60px;
height: 66px;
/* background-color: yellowgreen; */
`
export const Size =styled.div`
color: var(--colorBlack);
font-family: Fira Code;
font-style: normal;
font-weight: 500;
font-size: 44px;
line-height: 52px;
letter-spacing: -0.06em;
`
export const Title=styled.div`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 25px;
line-height: 34px;
color: var(--colorBlack);
`
export const Img=styled.div`
margin-top: ${({top})=>`${top?'30px': '0px'}`};
width: 354px;
height: 550px;
/* background-color: yellow; */
box-shadow: 8px 8px 30px 10px #C4C4C4;
/* background: #C4C4C4; */
border-radius: 30px;
/* opacity: 0.6;
filter: blur(40px); */
`
export const Text=styled.div`
display: flex;
justify-content: center;
font-family: Inter;
font-style: normal;
font-weight: normal;
text-align: center;
/* margin-top: 20px; */
/* align-items: center; */
margin-bottom: ${({bog})=>`${bog && '20px'}`};
font-size: ${({big})=>`${big? '22.5px': '14px'}`};
line-height:${({big})=>`${big? '34px': '26px'}`};
color: var(--colorBlack);
`
export const Boxs=styled.div`
box-sizing: border-box;
padding: 30px;
display: flex;
flex-direction: column;
/* justify-content: center; */
align-items: center;
width: 482px;
/* height: 436px; */
width: ${({width})=> (width ? `${width}px` : '482px')};
height: ${({height})=> (height ? `${height}px` : '436px')};

:hover{

    box-shadow: 0px 0px 30px -5px rgba(0, 0, 0, 0.15);
}
border-radius: 10px;
`
export const I=styled.div`
display: flex;
justify-content: center;
width: ${({bos})=>`${bos ? '342px' :'150px' }`};
height: ${({bos})=>`${bos ? '200px' : '150px' }`};
/* width: 150px;
height: 150px; */
border-radius: ${({bos})=>`${bos && '2px' }`};
border-radius: 50%;
background-color: yellow;
/* border-radius: ${({ke})=> (ke && '50%')}; */
`

export const Ii = styled.img.attrs({
    src: b
})` 
width: 354px;
height: 550px;
border-radius: 30px;
`;
export const Ii1 = styled.img.attrs({
    src: b1
})` 
width: 354px;
height: 550px;
border-radius: 30px;
`;
export const Soha = styled.h2`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 17.5px;
line-height: 28px;
color: var(--colorBlue);
`
export const Icons=styled.div`
height: 20px;
width: 20px;
`

export const Facebook = styled(fasebook)`

`
export const Instagram = styled(instagram)`

`
export const Youtube = styled(youtube)`

`

export const Github = styled(githab)`

`
export const Sertifikat = styled.img.attrs({
    src: sertifikat
})` 
width: 740px;
height: 530px;
margin-left: 10px;
`;
export const Border=styled(border)`
width: 141px;
height: 55px;
margin-left: 900px;
/* position: relative; */
/* background-color: yellowgreen; */
`
export const Border1 =styled(border1)`
width: 160px;
height: 68px;
margin-top: 80px;
/* margin-left: 50px;
margin-bottom: 0px;
margin-right: 20px; */

`
export const Border2 =styled(border2)`
/* padding-top: 10px; */
margin-top: 15px;
width: 180px;
height: 46px;
`
export const Border3 =styled(border3)`
/* padding-top: 10px; */
margin-top: 25px;
width: 180px;
height: 46px;
`
export const Border4 =styled(border4)`
/* padding-top: 10px; */
/* margin-top: 25px; */
width: 160px;
height: 68px;
`
export const Texting =styled.div`
/* background-color: yellow; */
/* position: absolute; */
/* position: relative; */
margin-left: 40px;
margin-top: 20px;
width: 294px;
height: 78px;
font-family: Chilanka;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;
letter-spacing: 0.02em;
color: var(--colorBlack);
`
export const TExt=styled.div`
margin-top: 20px;
margin-left: 10px;
width: 250px;
height: 78px;
margin-top: ${({top})=> `${top && '0px'}`};
/* margin-left: 20px; */
/* padding-bottom: 140px; */
font-family: Chilanka;
font-style: normal;
font-weight: normal;
font-size: 17px;
line-height: 26px;
letter-spacing: 0.02em;
color: var(--colorBlack);
`
Text.Tex=styled.div`
margin-top: 50px;
width: 335px;
height: 104px;
font-family: Chilanka;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 26px;
/* or 130% */

letter-spacing: 0.02em;

/* text secondary */

color: #514D48;
`