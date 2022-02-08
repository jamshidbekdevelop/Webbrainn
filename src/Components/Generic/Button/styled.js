import styled from "styled-components";

export const Container =styled.div`
display: flex;
align-items: center;
justify-content: center;
width: ${({width})=> (width ?`${width}px` : '120px')};
height: ${({height})=>(height ?`${height}px` : '50px')};
color: ${({border})=>(border ?'var(--colorBlue)' : 'white')};
border: ${({border})=> border && '1px solid var(--colorBlue)'};
font-style: normal;
font-family: Inter;
font-weight: 500;
font-size: 18px;
line-height: 26px;
letter-spacing: 1px;
/* filter: drop-shadow(4px 8px 16px rgba(0, 118, 245, 0.4)); */
:active{
    transform: scale(0.97);
    color: white;
    background: var(--colorBlue);
}
:focus{
    background: var(--colorBlue);

}


border-radius: 10px;
`