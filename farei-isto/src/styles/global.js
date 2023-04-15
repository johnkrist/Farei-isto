import {createGlobalStyle} from 'styled-components'

export const GlobalStyle =  createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;

    :root {
        --white: 
    }

    body, input, button {
        font-family: 'PT serif' serif;
        font-size: 2rem
    }
    h2,h4 {
        font-size: 'Roboto Mono' monospace;
        font-weight: 700;


    }
    button{
        cursor: pointer;
    }
    a{
        text-decoration: none;
    }
}




`