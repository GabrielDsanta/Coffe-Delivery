
import { ShoppingCart } from "phosphor-react"

interface CoffeData{
    CoffeImage: string,
    TitleCoffe: string,
    TypeCoffe: string,
    DescriptionCoffe: string,
}

export function CoffeLayout({ CoffeImage, TitleCoffe, TypeCoffe, DescriptionCoffe }: CoffeData){
    return(
        
        <div className="Coffe">
            <img src={CoffeImage} />

            <h4>{TitleCoffe}</h4>

            <h2>{TypeCoffe}</h2>

            <p>{DescriptionCoffe}</p>

            <span>
                R$<strong>9,90</strong>
                <button>-</button>
                1
                <button>+</button>
                <button>
                    <ShoppingCart />
                </button>
            </span>
        </div>
    )
}