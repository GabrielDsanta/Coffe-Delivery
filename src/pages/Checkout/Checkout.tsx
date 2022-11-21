
import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { StylesBaseInput, StylesCheckOutPage } from './styles'

export function Checkout(){
    return(
        <StylesCheckOutPage>
            <h1>Complete seu pedido</h1>

            <div>
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

                <div>
                    <div>
                        <CurrencyDollar />
                        <div>
                            <h2>
                                Pagamento
                            </h2>
                            <h3>
                                O pagamento é feito na entrega. Escolha a forma que deseja pagar
                            </h3>
                        </div>
                    </div>

                    <span>
                        <CreditCard />
                        CARTÃO DE CRÉDITO
                    </span>

                    <span>
                        <Bank />
                        CARTÃO DE DÉBITO
                    </span>

                    <span>
                        <Money />
                        DINHEIRO
                    </span>
                </div>
            </div>
        </StylesCheckOutPage>
    )
}