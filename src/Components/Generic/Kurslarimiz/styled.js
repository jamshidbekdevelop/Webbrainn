import styled from "styled-components";

export const Container =styled.div`
display: flex;
align-items: center;
flex-wrap: wrap;
justify-content: space-between;
`
export const Boxs=styled.div`
box-sizing: border-box;
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
min-width: 230px;
max-width: 400px;
width: ${({width})=> (width ? `${width}px` : '400px')};
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