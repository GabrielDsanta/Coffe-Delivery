
import { ShoppingCart, Plus, Minus } from "phosphor-react"
import { MouseEvent, useContext, useState } from "react"
import { CartData, CoffeContext } from "../../contexts/CoffeContext"

interface CoffeLayoutProps{
    CoffeImage: string
    TitleCoffe: string
    TitleCoffeTwo?: string
    TitleCoffeThree?: string
    TypeCoffe: string
    DescriptionCoffe: string

}

export function CoffeLayout({ CoffeImage, TitleCoffe, TitleCoffeTwo, TitleCoffeThree, TypeCoffe, DescriptionCoffe }: CoffeLayoutProps){
    const [AmountCoffe, setAmountCoffe] = useState(1)
    const { CallSetCart } = useContext(CoffeContext)

    function PlusAmountCoffe(){
        setAmountCoffe(AmountCoffe + 1)
    }

    function MinusAmountCoffe(){
        AmountCoffe == 0 ? setAmountCoffe(0) : setAmountCoffe(AmountCoffe - 1)
    }

    function AddCoffeToCart(e: MouseEvent<HTMLButtonElement>){
        const NewCoffeToCart: CartData = {
            id: TypeCoffe,
            CoffeImage: CoffeImage,
            TypeCoffe: TypeCoffe,
            Amount: AmountCoffe,
        }

        CallSetCart(NewCoffeToCart)
    }

    return(
        
        <section>
           <div className="Card">
                <div className="CoffeeImageDiv">
                    <img src={CoffeImage} />
                </div>

                <div className="TitlesCoffesDiv">
                    <h4>{TitleCoffe}</h4>

                    {TitleCoffeTwo && (
                        <h4>{TitleCoffeTwo}</h4>
                    )}

                    {TitleCoffeThree && (
                        <h4>{TitleCoffeThree}</h4>
                    )}
                </div>

                <h2>{TypeCoffe}</h2>

                <p className="Paragraph">{DescriptionCoffe}</p>

                <span>
                    R$<strong> 9,90</strong>

                    <span className="SpanButtons">
                        <button onClick={MinusAmountCoffe}><Minus /></button>

                        <span className="AmountCoffeeValue">
                            {AmountCoffe}
                        </span>

                        <button onClick={PlusAmountCoffe}><Plus /></button>
                    </span>

                    <button onClick={AddCoffeToCart}>
                        <ShoppingCart size={24}/>
                    </button>
                </span>
           </div>
        </section>
    )
}