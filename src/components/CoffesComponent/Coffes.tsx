import { CoffesSectionStyles } from "./styles";
import ExpressoTradicional from "../../assets/Coffes/Coffee.svg"
import { ShoppingCart } from "phosphor-react";
import { CoffeLayout } from "./Coffe";


export function CoffesSection(){
    return(
        <CoffesSectionStyles>
            <main>
                <h1>Nossos cafés</h1>

                <section>
                    <CoffeLayout 
                        DescriptionCoffe="" 
                        TypeCoffe="Expresso Tradicional" 
                        TitleCoffe="Tradicional" 
                        CoffeImage={ExpressoTradicional}
                    />
                </section>
            </main>
        </CoffesSectionStyles>
    )
}