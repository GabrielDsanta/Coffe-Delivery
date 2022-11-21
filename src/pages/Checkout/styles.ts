import styled from "styled-components";


export const StylesCheckOutPage = styled.section`
    h1{
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 0.938rem;
    }

    .AddressTitle{
        font-family: 'Roboto', sans-serif;
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;

        .MapPinLine{
            color: ${props => props.theme['yellow-dark']};
            margin-right: .5rem;
        }

        h2{
            color: ${props => props.theme['base-subtitle']};
            font-size: 1rem;
            font-weight: 400;
            margin-bottom: .2rem;
        }

        h3{
            color: ${props => props.theme['base-text']};
            font-size: 0.875rem;
            font-weight: 400;
        }
    }

    .AddressCard{
        background-color: ${props => props.theme['base-card']};
        padding: 2.5rem;
        border-radius: 6px;
        width: 40.8rem;
    }
`

export const StylesBaseInput = styled.form`

   input{
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 1rem;
    width: 12.5rem;
    height: 2.625rem;
    background-color: ${props => props.theme['base-input']};
    border: solid 1px ${props => props.theme['base-button']};
    padding: .5rem;
    color: ${props => props.theme['base-text']};
    outline: none; 
    margin-right: 0.75rem;
   }

   .InputStreet{
    width: 35rem;
   }

   .ComplementInput{
    width: 21.75rem;
   }

   .ComplementSpan{
    font-style: italic;
    font-size: 0.75rem;
    color: ${props => props.theme['base-label']};
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-left: -4.4rem;
   }

   .CityInput{
    width: 17.25rem;
   }

   .InputUF{
    width: 3.75rem;
   }
`