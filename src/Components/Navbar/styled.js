import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container =styled.div`
box-sizing: border-box;
position: fixed;
width: 100%; 
height: 70px;
display: flex;
align-items: center;
justify-content: space-around ;
background-color: white;
`
export const Link =styled(NavLink)`
font-family: Inter;
display: flex;
flex-wrap: nowrap;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: ${({active})=>`var(${active?'--colorBlue' : '--colorBlack'  })`};
text-decoration: none;
`
export const Wrapper =styled.div`
display: flex;
/* flex-wrap: nowrap; */
width: ${({width})=> (width ? `${width}px` : 'auto')};
justify-content: space-between;
align-items: center;
/* background-color: red; */

`
export const Text = styled.div`
font-family: Inter;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: ${({kerak})=>`var(${kerak ? '--colorBlue' : '--colorBlack'  })`};
margin-right: 8px;
width: 150px;
`
export const Buttoon =styled.button`
width: 5px;
height: 5px;
cursor: pointer;
/* margin: 0; */
/* margin-top: 0px; */
/* padding-top: ; */
padding-left: 2px;
display: flex;
justify-content: center;
align-items: center;
border-radius: 15px;
/* border: none; */
/* background-color: white; */
background-color: red;
`
