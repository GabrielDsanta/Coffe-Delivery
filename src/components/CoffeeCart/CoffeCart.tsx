import { Minus, Plus, Trash } from "phosphor-react";
import { StylesCartCoffees } from "./styles";
import Latte from "../../assets/Coffes/Latte.svg"


export function CoffeCart(){
    return(
        <StylesCartCoffees>
            <div>
                <img height={64} width={64} src={Latte} alt="" />
            </div>

            <div>
                <h2>Expresso Tradicional</h2>
                <span>
                    <span className="AmounControlSpan">
                        <button>
                            <Minus size={22}/>
                        </button>

                        <strong>1</strong>

                        <button>
                            <Plus size={22}/>
                        </button>

                    </span>

                    <button className="TrashButton">
                        <Trash size={24}/>
                        <strong>REMOVER</strong>
                    </button>
                </span>
            </div>

            <span className="Price">R$ 9,90</span>
        </StylesCartCoffees>
    )
}