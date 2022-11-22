import styled from "styled-components";


export const StylesCartCoffees = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-bottom: 2rem;
    border-bottom: solid 1px ${props => props.theme['base-button']};
    margin-bottom: 2rem;

    img{
        margin-right: 1.25rem;
    }

    h2{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
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

    .AmounControlSpan{
        background-color: ${props => props.theme['base-button']};
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .1rem;
        margin-top: .5rem;

        button{
            color: ${props => props.theme['purple']};
            background-color: transparent;
            cursor: pointer;
            padding: .4rem;
        }

        button:hover{
            transition: .3s;
            color: ${props => props.theme['purple-dark']};
        }

        strong{
            font-family: 'Roboto', sans-serif;
            color: ${props => props.theme['base-title']};
            font-size: 1rem;
        }
    }

    .TrashButton{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: ${props => props.theme['base-button']};
        border-radius: 6px;
        color: ${props => props.theme['purple']};

        cursor: pointer;
        padding: .4rem;
        margin-top: .5rem;
        margin-left: .5rem;

        strong{
            color: ${props => props.theme['base-text']};
            font-size: 0.75rem;
            font-weight: 400;
            margin-left: .3rem;
        }

        :hover{
            transition: all .3s;
            color: ${props => props.theme['purple-dark']};
            background-color: ${props => props.theme['base-hover']};
            strong{
                color: ${props => props.theme['base-subtitle']};
            }
        }
    }

    .Price{
        color: ${props => props.theme['bse-text']};
        font-family: 'Roboto', sans-serif;
        font-weight: 700;
        font-size: 1rem;
        margin-left: 3.125rem;
    }
`