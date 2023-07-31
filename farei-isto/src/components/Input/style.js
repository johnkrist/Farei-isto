import styled, { css } from "styled-components";

export const Container = styled.div`
text-align: left;
font-size: 28px;
padding: 5px;
span{
    color: red;
    font-size: 20px;
}
`
export const InputContent = styled.div`
background: beige;
border-radius: 8px;
border: 1px solid black ;
padding: 2px;
width: 100%;
transition: 0.5s;
${props => props.isError && css`
border-color: red;

`}


input{
    background: transparent;
    flex: 1;
    align-items: center;
    border: 0;
    color: black;
    font-size: 20px;
    &::placeholder{
            color: gray;
            
    }
}


`
