import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { StylesHomeSection } from "./styles";
import ImageCoffeHome from '../../assets/ImageCoffeHome.svg'


export function SectionHome(){
    return(
        <StylesHomeSection>
            <div className="ConteinerSection">
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
                            <div className="IconRow">
                                <span className="SpanShoppingCart">
                                    <ShoppingCart size={28}/>
                                </span>
                                <span className="SpanDescription">Compra Simples e segura</span>
                            </div>

                            <div className="IconRow">
                                <span className="SpanPackage">
                                    <Package size={28}/>
                                </span>
                                <span className="SpanDescription">Embalagem mantém o café intacto</span>
                            </div>
                        </div>

                        <div>
                            <div className="IconRow">
                                <span className="SpanTimer">
                                    <Timer size={28}/>
                                </span>
                                <span className="SpanDescription">Entrega rápida e rastreada</span>
                            </div>

                            <div className="IconRow">
                                <span className="SpanCoffe">
                                    <Coffee size={28}/>
                                </span>
                                <span className="SpanDescription">O café chega fresquinho até você</span>
                            </div>

                        </div>

                    </div>
                </div>

                <img src={ImageCoffeHome} />
        </div>
        </StylesHomeSection>
    )
}