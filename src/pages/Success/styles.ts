import styled from "styled-components";


export const StylesSuccess = styled.section`
    width: 99vw;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6.375rem;

    h1{
        color: ${props => props.theme['yellow-dark']};
        font-family: 'Baloo 2', sans-serif;
        font-weight: 800;
        font-size: 2rem;
    }

    h3{
        font-family: 'Roboto', sans-serif;
        font-size: 1.25rem;
        color: ${props => props.theme['base-subtitle']};
        font-weight: 400;
        margin-bottom: 2.5rem;
    }

    h2{
        font-weight: 400;
        font-size: 1rem;
        color: ${props => props.theme['base-text']};
    }

    strong{
        color: ${props => props.theme['base-text']};
        font-weight: 700;
        font-size: 1rem;
    }

    .AddressInfos{
        font-family: 'Roboto', sans-serif;
        width: 32.875rem;
        height: 16.875;
        padding: 2.5rem;
        border: solid 1px rgb(219,172,44);
        border-radius: 6px 36px 6px 36px;
    }

    .CardInfoAddress{
        margin-bottom: 2rem;
        display: flex;
        align-items: center ;
    }

    .MapPin{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme['purple']};
        padding: .5rem;
        border-radius: 10rem;
        margin-right: 0.75rem;
        color: #FFF;
    }

    .Timer{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme['yellow']};
        padding: .5rem;
        border-radius: 10rem;
        margin-right: 0.75rem;
        color: #FFF;
    }

    .CurrencyDollar{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme['yellow-dark']};
        padding: .5rem;
        border-radius: 10rem;
        margin-right: 0.75rem;
        color: #FFF;
    }
`