import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { CoffeCart } from '../../components/CoffeeCart/CoffeCart'
import { CoffeContext } from '../../contexts/CoffeContext'
import { StylesBaseInput, StylesCheckOutPage } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import zod, { string } from 'zod'

const newAddressRegisterSchema = zod.object({
    CEP: zod.string().min(8).max(8),
    road: zod.string().min(5).max(30),
    homeNumber: zod.string().min(1).max(6),
    complement: zod.string().min(5).max(30),
    district: zod.string().min(1).max(30),
    city: zod.string().min(1).max(20),
    UF: zod.string().min(2).max(2)
})

type newAddressRegisterSchemaData = zod.infer<typeof newAddressRegisterSchema>

export function Checkout(){
    const { Cart } = useContext(CoffeContext)
    const { register, handleSubmit, formState } = useForm<newAddressRegisterSchemaData>({
        resolver: zodResolver(newAddressRegisterSchema),
    })

    let price = 0
    Cart.map((item) => {
        return price = price + item.Amount
    })

    price *= 9.90
    const total = price + 3.50

    function handleSubmitForm(data: any){
        console.log(data)
        const newAddressRegister = {

        }
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

                           {/* <NavLink to='/success' title="Success"> */}
                                {Cart.length === 0 && (
                                    <button className='ConfirmOrderButton' disabled>CONFIRMAR PEDIDO</button>
                                )}
                                 {Cart.length > 0 && (
                                    <button type='submit' className='ConfirmOrderButton'>CONFIRMAR PEDIDO</button>
                                 )}
                           {/* </NavLink> */}
                        </section>
                    </div>

                </div>
        </StylesCheckOutPage>
    )
}