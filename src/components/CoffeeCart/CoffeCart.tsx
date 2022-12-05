import { Minus, Plus, Trash } from "phosphor-react";
import { StylesCartCoffees } from "./styles";
import { CartData, CoffeContext } from "../../contexts/CoffeContext";
import { useContext, useState } from "react";

export function CoffeCart({ CoffeImage, TypeCoffe, Amount }: CartData){
    const [AmountCoffeCart, setAmountCoffeCart] = useState(Amount)
    const {Total, CallSetTotal} = useContext(CoffeContext)

    function MinusAmountCoffe(){
        AmountCoffeCart == 0 ? (setAmountCoffeCart(0)):
        setAmountCoffeCart(AmountCoffeCart - 1)
        AmountCoffeCart > 0 && (CallSetTotal(-9.90))
    }

    return (
        <StylesCartCoffees>
            <div> 
                <img height={64} width={64} src={CoffeImage} alt="" />    
            </div>

            <div>
                <h2>{TypeCoffe}</h2>
                <span>
                    <span className="AmounControlSpan">
                        <button disabled>
                            <Minus onClick={MinusAmountCoffe} size={22}/>
                        </button>

                        <strong>{AmountCoffeCart}</strong>

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

            <span className="Price">R$ {(9.90 * AmountCoffeCart).toFixed(2)}</span>
        </StylesCartCoffees> 
    )         
}