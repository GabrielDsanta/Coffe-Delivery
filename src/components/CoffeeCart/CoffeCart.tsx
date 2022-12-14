import { Minus, Plus, Trash } from "phosphor-react";
import { StylesCartCoffees } from "./styles";
import { CartData, CoffeContext } from "../../contexts/CoffeContext";
import { useContext, useState } from "react";

export function CoffeCart({ CoffeImage, TypeCoffe, Amount, id }: CartData){
    const [AmountCoffeCart, setAmountCoffeCart] = useState(Amount)
    const { CallSetTotal, Cart, RemoveCoffeToCart } = useContext(CoffeContext)

    function MinusAmountCoffe(){
        AmountCoffeCart == 0 ? (setAmountCoffeCart(0)):
        setAmountCoffeCart(AmountCoffeCart - 1)
        AmountCoffeCart > 0 && (CallSetTotal(-9.90))
    }

    function PlusAmountCoffe(){
        setAmountCoffeCart(AmountCoffeCart + 1)
        CallSetTotal(+9.90)
    }

    function RemoveCart(){
        RemoveCoffeToCart(Cart.filter((cartDelete: CartData) => {
            return id !== cartDelete.id
        }))
        
        CallSetTotal(-9.90 * AmountCoffeCart)
    }


    return (
        <StylesCartCoffees>
            <div> 
                <img height={64} width={64} src={CoffeImage} alt="Foto De Um Café" />    
            </div>

            <div>
                <h2>{TypeCoffe}</h2>
                <span>
                    <span className="AmounControlSpan">
                        <button disabled>
                            <Minus onClick={MinusAmountCoffe} size={22}/>
                        </button>

                        <strong>{AmountCoffeCart}</strong>

                        <button disabled>
                            <Plus onClick={PlusAmountCoffe} size={22}/>
                        </button>

                    </span>

                    <button className="TrashButton" disabled>
                        <Trash onClick={RemoveCart} size={24}/>
                        <strong onClick={RemoveCart}>REMOVER</strong>
                    </button>
                </span>
            </div>

            <span className="Price">R$ {(9.90 * AmountCoffeCart).toFixed(2)}</span>
        </StylesCartCoffees> 
    )         
}