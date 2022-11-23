
import { ShoppingCart, Plus, Minus } from "phosphor-react"
import { useContext } from "react"
import { CoffeContext } from "../../pages/Home/Home"

interface CoffeData{
    CoffeImage: string
    TitleCoffe: string
    TitleCoffeTwo?: string
    TitleCoffeThree?: string
    TypeCoffe: string
    DescriptionCoffe: string
}


export function CoffeLayout({CoffeImage, TitleCoffe, TitleCoffeTwo, TitleCoffeThree, TypeCoffe, DescriptionCoffe}: CoffeData){
    const { Amount = 0, PlusAmountCoffe } = useContext(CoffeContext)

    function HandlePlusAmountCoffe(Amount: number){
        PlusAmountCoffe(Amount)
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
                        <button><Minus /></button>
                        <span className="AmountCoffeeValue">{Amount}</span>
                        <button onClick={HandlePlusAmountCoffe(Amount)}><Plus /></button>
                    </span>

                    <button>
                        <ShoppingCart size={24}/>
                    </button>
                </span>
           </div>
        </section>
    )
}