import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react"
import ImageCoffeHome from '../../assets/ImageCoffeHome.svg'
import { StylesHome } from "./styles"


export function Home(){
    return(
        <StylesHome>
            <div>
                <div>
                    <h1>
                        Encontre o café perfeito <br />
                        para qualquer hora  do dia
                    </h1>

                    <p>
                        Com o Coffe Delivery você recebe seu café onde estiver, a <br />
                        qualquer hora
                    </p>
                </div>

                <div className="IconsArea">
                    <div>
                        <div>
                            <div>
                                <ShoppingCart className="ShoppingCart"/>
                            </div>
                            <span>Compra Simples e segura</span>
                        </div>

                        <div>
                            <Package/>
                            <span>Embalagem mantém o café intacto</span>
                        </div>
                    </div>

                <div>
                    <div>
                            <Timer/>
                            <span>Entrega rápida e rastreada</span>
                        </div>

                        <div>
                            <Coffee/>
                            <span>O café chega fresquinho até você</span>
                        </div>
                    </div>
                </div>
            </div>

            <img src={ImageCoffeHome} />
        </StylesHome>
    )
}