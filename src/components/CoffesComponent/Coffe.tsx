
import { ShoppingCart, Plus, Minus } from "phosphor-react"

interface CoffeData{
    CoffeImage: string
    TitleCoffe: string
    TitleCoffeTwo?: string
    TitleCoffeThree?: string
    TypeCoffe: string
    DescriptionCoffe: string
}


export function CoffeLayout({CoffeImage, TitleCoffe, TitleCoffeTwo, TitleCoffeThree, TypeCoffe, DescriptionCoffe}: CoffeData){
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
                        <span className="AmountCoffeeValue">1</span>
                        <button><Plus /></button>
                    </span>

                    <button>
                        <ShoppingCart size={24}/>
                    </button>
                </span>
           </div>
        </section>
    )
}