
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { CoffeCart } from '../../components/CoffeeCart/CoffeCart'
import { StylesBaseInput, StylesCheckOutPage } from './styles'

export function Checkout(){
    return(
        <StylesCheckOutPage>
            <div>
                <h1>Complete seu pedido</h1>
                <div className='AddressCard'>
                    <div className='AddressTitle'>
                        <MapPinLine className='MapPinLine' size={22}/>
                        <div>
                            <h2>
                                Endereço de Entrega
                            </h2> 

                            <h3>
                                Informe o endereço onde deseja receber seu pedido
                            </h3>
                        </div>
                    </div>

                    <StylesBaseInput action='#'>
                        <input type='text' placeholder='CEP' />

                        <div>
                            <input className='InputStreet' type='text' placeholder='Rua' />
                        </div>

                        <div>
                            <input type='text' placeholder='Número' />
                            
                            <input className='ComplementInput' type='text' placeholder='Complemento' />
                            <span className='ComplementSpan'>Opcional</span>
                        </div>

                        <div>
                            <input type='text' placeholder='Bairro' />
                            <input className='CityInput' type='text' placeholder='Cidade' />
                            <input className='InputUF' type='text' placeholder='UF' />
                        </div>
                        
                    </StylesBaseInput>
                </div>

                <div className='PaymentMethodCard'>
                    <div>
                        <div className='PaymentMethodTitle'>
                            <CurrencyDollar className='CurrencyDollar' size={22} />  
                            <div>
                                <h2>
                                    Pagamento
                                </h2>

                                <h3>
                                    O pagamento é feito na entrega. Escolha a forma que deseja pagar
                                </h3>
                            </div>
                        </div>
                    </div>

                    <div className='PaymentOptions'>
                        <div className='InputRadioCard'>
                            <input type="radio" name="PaymentOption" />
                            <CreditCard size={18} className='CreditCard' />
                            CARTÃO DE CRÉDITO
                        </div>

                        <div className='InputRadioCard'>
                            <input type="radio" name="PaymentOption" />
                            <Bank size={18} className='Bank' />
                            CARTÃO DE DÉBITO
                        </div>
                            
                        <div className='InputRadioCard'>
                            <input type="radio" name="PaymentOption" />
                            <Money size={18} className='Money' />
                            DINHEIRO
                        </div>   
                    </div>
                </div>
            </div>

                <div>
                    <h1>Cafés selecionados</h1>

                    <div className='Cart'>
                        <CoffeCart />
                    </div>
                </div>
        </StylesCheckOutPage>
    )
}