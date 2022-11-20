import styled from 'styled-components';

export const StylesHeader = styled.header`
    font-family:'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;
    padding: 2rem;
    color: ${(props) => props.theme['purple-dark']};
    width: 99vw;

    span{
        display: flex;
        align-items: center;
        gap: .5rem;
        text-decoration: none;
        background-color: ${props => props.theme['purple-ligth']};
        padding: .3rem .5rem;
        border-radius: 8px;
        font-size: 0.8rem;
    }

    nav{
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-right: -3rem;
    }

    div{
        background-color: ${props => props.theme['yellow-ligth']};
        padding: .3rem;
        border-radius: 8px;
    }

    .ShopIcon{
        color: ${props => props.theme['yellow-dark']};
    }

    .CartAmount{
        color: ${props => props.theme['white']};
        background-color: ${props => props.theme['yellow-dark']};
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 1.2rem;
        width: 1.2rem;
        margin-top: -2.5rem;
        margin-left: -1.2rem;
    }

`