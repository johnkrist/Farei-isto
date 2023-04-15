import styled from 'styled-components'

export const ButtonStyle = styled.button`
background: ${props => props.color ? 'white' : 'black'};
color: ${props => props.color ? 'black' : 'white'};
height: 40px;
border-radius: 6px;
font-family: 'Roboto Mono' monospace;
font-size: 20px;
margin-top: 20px;
width:100%;

:hover{
    transition: 0.5s;
    background-color: gray;
   
    
}


`