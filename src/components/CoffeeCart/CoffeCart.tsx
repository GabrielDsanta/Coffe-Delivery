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
                    <button>
                        <Minus size={22}/>
                    </button>

                    <strong>1</strong>

                    <button>
                        <Plus size={22}/>
                    </button>

                    <button>
                        <Trash size={24}/>
                        <strong>Remover</strong>
                    </button>
                </span>
            </div>

            <span>R$ 9,90</span>
        </StylesCartCoffees>
    )
}