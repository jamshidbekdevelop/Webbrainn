import styled from "styled-components";

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
gap: ${({flex})=>`${flex && '70px' }`};
margin-right: ${({gap})=>`${gap && '12px' }`};
flex-wrap: ${({flex})=>`${flex && 'wrap' }`};
flex-wrap: ${({flexx})=>`${flexx && 'wrap' }` } !important;
width: ${({basic})=> (basic && '83%') } !important;
justify-content: ${({Ja})=>`${Ja && 'center' }`};
justify-content: ${({flexx})=>`${flexx && 'space-between' }`};
align-items: ${({flex})=>`${flex && 'center' }`};
align-items: ${({flexx})=>`${flexx && 'center' }`};
align-items: ${({Ja})=>`${Ja && 'center' }`};
width: ${({Ja})=>`${Ja ? '450px' : 'width' }`};
width: ${({width})=> (width ? `${width}px` : 'auto')};
height: ${({height})=> (height ? `${height}px` : 'auto')};
height: ${({Ja})=>`${Ja ? '256px' : 'height' }`};
margin-top: ${({Ja})=>`${Ja && '160px' }`};
margin-top: ${({Ka})=>`${Ka && '0px' }`};
`
export const St =styled.div`
display: flex;
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
margin: 0px 15px;
margin-left: ${({topp})=> `${topp && '90px'}` };
height: auto !important;
height: ${({height})=> `${height ? 'height px' : '246px'}` };
display: flex;
justify-content:${({center})=> `${center ? 'center' : 'space-between'}` };
flex-wrap: wrap;

`

Div.K=styled.div`
display: flex;
margin-left: 150px;
width: 450px;
height: 150px;
`
Div.L=styled.div`
display: flex;
margin-left: 20px;
width: 600px;
height: 100px;
`
Div.S=styled.div`
margin-left: 260px;
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
min-width: 260px;
width: 280px;
height: 246px;
margin: 10px;

`
export const Icon = styled.div`
width: 60px;
height: 66px;
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
min-width: 200px;
max-width: 300px;
height: 500px;
box-shadow: 8px 8px 30px 10px #C4C4C4;
border-radius: 30px;
`
export const Text=styled.div`
display: flex;
justify-content: center;
font-family: Inter;
font-style: normal;
font-weight: normal;
text-align: center;
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
align-items: center;
width: 482px;
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
width: ${({bos})=>`${bos ? '280px' :'150px' }`};
height: ${({bos})=>`${bos ? '200px' : '150px' }`};
border-radius: ${({bos})=>`${bos && '2px' }`};
border-radius: 50%;
background-color: yellow;
`

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
min-width: 450px;
max-width: 680px;
min-height: 350px;
height: 500px;
margin-left: 10px;
`;
export const Border=styled(border)`
width: 141px;
height: 55px;
margin-left: 600px;
`
export const Border1 =styled(border1)`
width: 160px;
height: 68px;
margin-top: 80px;

`
export const Border2 =styled(border2)`
margin-top: 15px;
width: 180px;
height: 46px;
`
export const Border3 =styled(border3)`
margin-top: 25px;
width: 180px;
height: 46px;
`
export const Border4 =styled(border4)`
width: 160px;
height: 68px;
`
export const Texting =styled.div`
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
letter-spacing: 0.02em;
color: #514D48;
`
