import styled from "styled-components";


export const StylesCartCoffees = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        color: ${props => props.theme['base-subtitle']};
    }

    button{
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
    }

    span{
        display: flex;
        align-items: center;
        justify-content: center;
    }
`