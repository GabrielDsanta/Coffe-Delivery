import styled from 'styled-components';

export const StylesHeader = styled.header`
    font-family:'Roboto', sans-serif;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 5rem;
    padding: 2rem;
    color: ${(props) => props.theme['purple-dark']};

    span{
        display: flex;
        align-items: center;
        gap: .5rem;
        text-decoration: none;
        background-color: ${props => props.theme['purple-ligth']};
        padding: .6rem;
        border-radius: 8px;
        font-size: 1.2rem;
    }

    nav{
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }

    div{
        background-color: ${props => props.theme['yellow-ligth']};
        padding: .5rem;
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
        height: 1.8rem;
        width: 1.8rem;
        margin-top: -3rem;
        margin-left: -1.5rem;
    }

`