import styled from "styled-components";


export const CoffesSectionBaseStyles = styled.section`

    .Paragraph{
        width: 16rem;
        margin-top: .5rem;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        color: ${props => props.theme['base-label']};
        margin-bottom: 2.063rem;
        font-size: 0.875rem;
    }

    .TitleCoffees{
        margin-top: -1rem;
        font-size: 2rem;
        font-weight: 800;
    }

    section{
        width: 70rem;
        text-align: center;
        display: flex;
        background-color: ${props => props.theme['base-background']};
        justify-content: space-around;
        gap: 2rem;
    }

    img{
        margin-bottom: -5rem;
    }

    h4{
        font-family: 'Roboto', sans-serif;
        font-size: 0.813rem;
        color: ${props => props.theme['yellow-dark']};
        background-color: ${props => props.theme['yellow-ligth']};
        padding: .2rem .8rem;
        border-radius: .8rem;
        margin-bottom: 1rem;
    }

    h2{
        font-family: 'Baloo 2', sans-serif;
        font-weight: 700;
        color: ${props => props.theme['base-subtitle']};
        font-size: 1.25rem;
    }

    span{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        color: ${props => props.theme['base-text']};
        font-weight: 400;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    strong{
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.5rem;
        color: ${props => props.theme['base-text']};
        font-weight: 400;
    }

    button{
        background-color: ${props => props.theme['purple-dark']};
        color: ${props => props.theme['white']};
        border: 0;
        padding: .3rem;
        border-radius: 6px;
        cursor: pointer;

        :hover{
            transition: .3s;
            background-color: ${props => props.theme['purple']};
        }
    }

    .Card{
        width: 18rem;
        background-color: ${props => props.theme['base-card']};
        margin-top: 3.375rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 6px 36px 6px 36px;
        padding-bottom: 1rem;
    }

    .CoffeeImageDiv{
        background-color: ${props => props.theme['base-card']};
        height: 7rem;
    }

    .SpanButtons{
        width: 5rem;
        background-color: ${props => props.theme['base-button']};
        padding: .2rem .5rem; 
        margin-left: .5rem;
        border-radius: 6px;
        margin-right: .5rem;
    }

    .AmountCoffeeValue{
        margin-left: .3rem;
        margin-right: .3rem;
        font-size: 1rem;
    }

    .SpanButtons button{
        color: ${props => props.theme['purple']};
        background-color: transparent;
        border: 0;
        font-size: 1.2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        :hover{
            transition: .3s;
            color: ${props => props.theme['purple-dark']};
        }
    }

    .TitlesCoffesDiv{
        display: flex;
        gap: .3rem;
    }

    .SessionNotCompleted{
        width: 35rem;
        display: flex;
        gap: 2rem;
        margin-left: -4rem;
    }
`