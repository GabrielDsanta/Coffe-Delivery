import styled from "styled-components";
import BackgroundImageHome from "../../assets/Background.svg"

export const StylesHomeSection = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin-top: 5.75rem;
    background-image: url(${BackgroundImageHome});
    
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

    img{
        margin-top: -8rem;
    }

    .ConteinerSection{
        display: flex;
        width: 90rem;
        align-items: center;
        justify-content: center;
    }

    .SpanDescription{
        font-size: 1rem;
        color: ${props => props.theme['base-text']};
    }

    .IconsArea{
        font-family:'Roboto', sans-serif;
        margin-top: 4.125rem;
        display: flex;
        font-size: 1rem;
        color: ${props => props.theme['base-text']};
        gap: 2rem;
        margin-bottom: 6.75rem;
    }

    .IconRow{
        display: flex;
        justify-content: flex-start;
        gap: .8rem;
        align-items: center;
        margin-bottom: 1.5rem;
        color: ${props => props.theme['white']};
    }

    .SpanShoppingCart{
        background-color: ${props => props.theme['yellow-dark']};
        color: ${props => props.theme['white']};
        padding: .5rem;
        padding-bottom: .4rem;
        border-radius: 5rem;
    }

    .SpanPackage{
        background-color: ${props => props.theme['base-text']};
        color: ${props => props.theme['white']};
        padding: .5rem;
        padding-bottom: .4rem;
        border-radius: 5rem;
    }

    .SpanTimer{
        background-color: ${props => props.theme['yellow']};
        color: ${props => props.theme['white']};
        padding: .5rem;
        padding-bottom: .3rem;
        border-radius: 5rem;
    }

    .SpanCoffe{
        background-color: ${props => props.theme['purple']};
        color: ${props => props.theme['white']};
        padding: .5rem;
        padding-bottom: .4rem;
        border-radius: 5rem;
    }
`