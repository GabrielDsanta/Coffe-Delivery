import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { CoffeCart } from '../../components/CoffeeCart/CoffeCart'
import { CoffeContext, newAddressRegisterSchema, newAddressRegisterSchemaData } from '../../contexts/CoffeContext'
import { StylesBaseInput, StylesCheckOutPage } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function Checkout(){
    const { Cart, CallSetAddress, Address } = useContext(CoffeContext)
    const { register, handleSubmit, formState } = useForm<newAddressRegisterSchemaData>({
        resolver: zodResolver(newAddressRegisterSchema)
    })

    let price = 0
    Cart.map((item) => {
        return price = price + item.Amount
    })

    price *= 9.90
    const total = price + 3.50

    function handleSubmitForm(data: newAddressRegisterSchemaData){
        CallSetAddress(data)
    }

    return(
        <StylesCheckOutPage onSubmit={handleSubmit(handleSubmitForm)}>
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

                    <StylesBaseInput>

                        <input 
                            type='text' 
                            placeholder='CEP' 
                            {...register('CEP')}
                        />

                        <div>
                            <input 
                                className='InputStreet' 
                                type='text' 
                                placeholder='Rua' 
                                {...register('road')}
                            />
                        </div>

                        <div>
                            <input 
                                type='text' 
                                placeholder='Número'
                                {...register('homeNumber')} 
                            />
                            
                            <input 
                                className='ComplementInput' 
                                type='text' 
                                placeholder='Complemento'
                                {...register('complement')}
                            />
                            <span className='ComplementSpan'>Opcional</span>
                        </div>

                        <div>
                            <input 
                                type='text' 
                                placeholder='Bairro' 
                                {...register('district')}
                            />

                            <input 
                                className='CityInput' 
                                type='text' 
                                placeholder='Cidade' 
                                {...register('city')}
                            />

                            <input 
                                className='InputUF' 
                                type='text' 
                                placeholder='UF' 
                                {...register('UF')}
                            />
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
                            <input value="Cartão De Crédito" type="radio" {...register('paymentMethod')} />
                            <CreditCard size={18} className='CreditCard' />
                            CARTÃO DE CRÉDITO
                        </div>

                        <div className='InputRadioCard'>
                            <input value="Cartão De Débito" type="radio" {...register('paymentMethod')} />
                            <Bank size={18} className='Bank' />
                            CARTÃO DE DÉBITO
                        </div>
                            
                        <div className='InputRadioCard'>
                            <input value="Dinheiro" type="radio" {...register('paymentMethod')} />
                            <Money size={18} className='Money' />
                            DINHEIRO
                        </div>   
                    </div>
                </div>
            </div>

                <div className='CartCard'>
                    <h1>Cafés selecionados</h1>

                    <div className='Cart'>
                        {Cart.length > 0 && (Cart.map((item) => {
                            return(
                                <CoffeCart 
                                key={item.id} 
                                CoffeImage={item.CoffeImage}
                                TypeCoffe={item.TypeCoffe}
                                Amount={item.Amount}
                                id={item.id}
                                 />
                            )
                        }))}

                        {Cart.length === 0 && (     
                            <h1>Seu carrinho está vazio</h1>
                        )}

                        <section>
                            <div className='DescriptionCart'>
                                <h3>Total de itens</h3>
                                <h3>R${(price).toFixed(2)}</h3>
                            </div>

                            <div className='DescriptionCart'>
                                <h3>Entrega</h3>
                                <h3>R$ 3,50</h3>
                            </div>  

                            <div className='DescriptionCart'>
                                <h2>Total</h2>
                                <h2>R${total}0</h2>
                            </div>

                                {Cart.length === 0 && (
                                    <button className='ConfirmOrderButton' disabled>CONFIRMAR PEDIDO</button>
                                )}

                                {Cart.length > 0 && (
                                    <button type='submit' className='ConfirmOrderButton'>CONFIRMAR PEDIDO</button>
                                )}

                                {Address.CEP !== undefined && (
                                    <Navigate to='/success'/>
                                )}
                        </section>
                    </div>

                </div>
        </StylesCheckOutPage>
    )
}