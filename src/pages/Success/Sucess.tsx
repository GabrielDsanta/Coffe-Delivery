import { StylesSuccess } from "./styles"
import { MapPin, Timer, CurrencyDollar } from "phosphor-react"
import Illustration from "../../assets/Illustration.svg"
import { useContext } from "react"
import { CoffeContext } from "../../contexts/CoffeContext"

export function Success(){
    const { Address } = useContext(CoffeContext)

    return(
        <StylesSuccess>
            <div>
                <h1>Uhu! Pedido confirmado</h1>
                <h3>Agora é só aguardar que logo o café chegará até você</h3>

                <section className="AddressInfos">
                    <div>
                        <div className="CardInfoAddress">

                            <div className="MapPin">
                                <MapPin size={28}/>
                            </div>

                            <div>
                                <h2>Entrega em <strong> {Address.road}, {Address.homeNumber}</strong></h2>

                                <h2>
                                    {Address.district} - {Address.city}, {(Address.UF).toUpperCase()}
                                </h2>
                            </div>
                        </div>

                        <div className="CardInfoAddress">
                            <div className="Timer">
                                <Timer size={28}/>
                            </div>

                            <div>
                                <h2>Previsão de entrega</h2>
                                
                                <strong>20 min - 30 min</strong>
                            </div>
                        </div>

                        <div className="CardInfoAddress">
                            <div className="CurrencyDollar">
                                <CurrencyDollar size={28}/>
                            </div>
                            <div>
                                <h2>Pagamento na entrega</h2>
                                
                                <strong>Cartão de crédito</strong>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <img src={Illustration} alt="" />
            </div>
        </StylesSuccess>
    )
}