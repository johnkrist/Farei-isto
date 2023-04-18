import styled from "styled-components";

export const Container = styled.div`
text-align: left;
font-size: 28px;
padding: 5px;
`
export const InputContent = styled.div`
background: beige;
border-radius: 8px;
border: 1px solid black ;
padding: 2px;
width: 100%;
transition: 0.5s;


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
