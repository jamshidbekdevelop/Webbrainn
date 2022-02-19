import styled from "styled-components";

export const Tagle=styled.div`
margin: 0px 30px 0px 8px;

`
export const Checkbox=styled.input.attrs({type: 'checkbox'})`
    position: relative;
    width: 40px;
    cursor: pointer;
    height: 20px;
    -webkit-appearance: none;
    background: #c6c6c6;
    outline: none;
    border-radius: 20px;
    box-shadow: inset 0 0 5px rgba(0,0,0,.2);
    transition: .5s;
:checked{
    background: #03a9f4;
}
::before{
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #fff;
    transition: .5s;
    transform: scale(1.1);
    box-shadow: 0 2px 5px rgba(0,0,0,.2);
}
:checked:before{
    left: 20px;
}
`
export const Text = styled.div`
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;
color: var(--colorBlack);
margin-right: 8px;
`