import { Minus, Plus, Trash } from "phosphor-react";
import { StylesCartCoffees } from "./styles";
import { CartData } from "../../contexts/CoffeContext";

export function CoffeCart({ CoffeImage, TypeCoffe, Amount }: CartData){
    return (
        <StylesCartCoffees>
            <div> 
                <img height={64} width={64} src={CoffeImage} alt="" />    
            </div>

            <div>
                <h2>{TypeCoffe}</h2>
                <span>
                    <span className="AmounControlSpan">
                        <button>
                            <Minus size={22}/>
                        </button>

                        <strong>{Amount}</strong>

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

            <span className="Price">R$ {(9.90 * Amount).toFixed(2)}</span>
        </StylesCartCoffees> 
    )         
}