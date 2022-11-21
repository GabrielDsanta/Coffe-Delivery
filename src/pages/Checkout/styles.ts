import styled from "styled-components";


export const StylesCheckOutPage = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2.5rem;
    h1{
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.125rem;
        font-weight: 700;
        color: ${props => props.theme['base-subtitle']};
        margin-bottom: 0.938rem;
    }

    .AddressTitle, .PaymentMethodTitle{
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

    .AddressCard, .PaymentMethodCard{
        margin-bottom: 0.75rem;
        background-color: ${props => props.theme['base-card']};
        padding: 2.5rem;
        border-radius: 6px;
        width: 40.8rem;
    }

    .CurrencyDollar, .Money, .Bank, .CreditCard{
        color: ${props => props.theme['purple']};
        margin-right: .5rem;
    }

    .PaymentMethodCard{

    }

    .PaymentOptions{
        display: flex;
        gap: 0.75rem;

        input{
            all: unset;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            cursor: pointer;
            border-radius: 6px;
        }

        input:checked{
            border: solid 1px ${props => props.theme['purple']};
            color: ${props => props.theme['base-text']};
        }

        .InputRadioCard{
            font-family: 'Roboto', sans-serif;
            font-size: 0.75rem;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 3.188rem;
            position: relative;
            width: 11.167rem;
            background-color: ${props => props.theme['base-button']};
            border-radius: 6px;
            color: ${props => props.theme['base-text']};
        }

        .InputRadioCard:hover{
            transition: .2s;
            color: ${props => props.theme['base-subtitle']};
            background-color: #D7D5D5;
        }
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