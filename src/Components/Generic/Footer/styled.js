import styled from "styled-components";
import {ReactComponent as fasebook} from '../../../assets/assets/facebook.svg'
import {ReactComponent as google} from '../../../assets/assets/google.svg'
import {ReactComponent as githab} from '../../../assets/assets/github.svg'
export const Box=styled.div`
margin-top: 112px;
border-top: 1px solid black;
border-bottom: 1px solid black;
width: 100%;
height: 320px;
`
export const End=styled.div`
width: 100%;
height: 162px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export const Container =styled.div`
display: flex;
justify-content: space-between;
margin-top: 40px;
`
export const Div=styled.div`
width: 140px;
height: 200px;
/* align-items: space-between; */
`
Div.D=styled.div`
width: 360px;
`

export const Text = styled.div`
width: 376px;
height: 78px;
font-family: Nunito Sans;
font-style: normal;
font-weight: 600;
font-size: 17px;
line-height: 26px;
color: #31344B;
`
export const Icon = styled.div`
margin-top: 30px;
width: 130px;
height: 20px;
display: flex;
justify-content: space-around;
`
export const Facebook = styled(fasebook)`
`
export const Google = styled(google)`
`
export const Githab = styled(githab)`
`

export const Textting=styled.div`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: ${({big})=>`${big ? '20px' : '16px'}`};
line-height: 26px;
margin-bottom: 20px;
`
export const Input=styled.input`
width: 355px;
height: 50px;
padding-left: 20px;
background: #F5FAFF;
border: 1px solid #8FC5FF;
box-sizing: border-box;
border-radius: 5px;
margin-bottom: 16px;
`
export const T=styled.div`
font-family: Inter;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;
color: #31344B;
`