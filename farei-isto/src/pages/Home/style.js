import styled from 'styled-components'

export const Container = styled.div`

display: flex;
align-items: center;
justify-content: center;
background-color: beige;
margin: 2rem 4rem 0 4rem;
padding: 4rem;


`
export const Content = styled.div`
display: flex;
flex-direction: column;
align-items: center;
max-width: 500px;
h2{
text-shadow: 0px 4px 4px rgba(0.0.0.25);
font-size: 4rem;


}

div{
    flex: 1;
    display: flex;

    margin-top: 2rem;

    button + button{
        margin-left: 1rem;

    }

}
span{
    margin-bottom: 2rem;
    flex-wrap: wrap;
    font-size: 2rem;
}
`

