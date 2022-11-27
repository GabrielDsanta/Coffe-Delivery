import { Minus, Plus, Trash } from "phosphor-react";
import { StylesCartCoffees } from "./styles";
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";


export function CoffeCart(){
    const { Cart } = useContext(CoffeContext)

    console.log(Cart)
    return (
        <StylesCartCoffees>
            <div>
                {Cart.length > 0 && (Cart.map((item) => {
                    return( 
                        <img height={64} width={64} src={item.CoffeImage} alt="" />
                    )
                }))}
            </div>

            <div>
                {Cart.length > 0 && (Cart.map((item) => {
                    return(
                        <h2>{item.TypeCoffe}</h2>
                    )
                }))}
                <span>
                    <span className="AmounControlSpan">
                        <button>
                            <Minus size={22}/>
                        </button>

                       {Cart.length > 0 && (Cart.map((item) => {
                        return(
                            <strong>{item.Amount}</strong>
                        )
                       }))}

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