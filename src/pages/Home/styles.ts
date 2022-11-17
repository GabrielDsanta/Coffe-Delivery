import styled from "styled-components";

export const StylesHome = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        font-family: 'Baloo 2', cursive;
        font-size: 3rem;
        line-height: 3.5rem;
        color: ${props => props.theme['base-title']};
        margin-bottom: 1rem;
        font-weight: 800;
    }

    p{
        font-family:'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.25rem;
        color: ${props => props.theme['base-subtitle']};
    }

    .IconsArea{
        font-family:'Roboto', sans-serif;
        margin-top: 4.125rem;
        display: flex;
        font-size: 1rem;
        color: ${props => props.theme['base-text']};
    }

    .ShoppingCart{
        
    }
`