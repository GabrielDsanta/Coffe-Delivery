import { CoffesSectionBaseStyles } from "./styles";
import { CoffeLayout } from "./Coffe";
import CoffeTraditional from "../../assets/Coffes/CoffeeTraditional.svg"
import AmericanExpress from "../../assets/Coffes/AmericanExpress.svg"
import CreamyEspresso from "../../assets/Coffes/CreamyEspresso.svg"
import IcedEspresso from "../../assets/Coffes/IcedEspresso.svg"
import CoffeeWithMilk from "../../assets/Coffes/CoffeeWithMilk.svg"
import Latte from "../../assets/Coffes/Latte.svg"
import Capuccino from "../../assets/Coffes/Capuccino.svg"
import Macchiato from "../../assets/Coffes/Macchiato.svg"
import Mocaccino from "../../assets/Coffes/Mocaccino.svg"
import HotChocolate from "../../assets/Coffes/HotChocolate.svg"
import Cubano from "../../assets/Coffes/Cubano.svg"
import Havaiano from "../../assets/Coffes/Havaiano.svg"
import Arabic from "../../assets/Coffes/Arabic.svg"
import Irish from "../../assets/Coffes/Irish.svg"
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";


export function CoffesSection(){
    const { AmountCoffe } = useContext(CoffeContext)
    
    return(
        <CoffesSectionBaseStyles>
            <h1 className="TitleCoffees">Nossos cafés</h1>

            <section> 
                <CoffeLayout 
                    CoffeImage={CoffeTraditional} 
                    TitleCoffe="TRADICIONAL"
                    TypeCoffe="Expresso Tradicional"
                    DescriptionCoffe="O Tradicional café feito com água quente e grãos moídos" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={AmericanExpress} 
                    TitleCoffe="TRADICIONAL"
                    TypeCoffe="Expresso Americano"
                    DescriptionCoffe="Expresso diluído, menos intenso que o tradicional" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={CreamyEspresso} 
                    TitleCoffe="TRADICIONAL"
                    TypeCoffe="Expresso Cremoso"
                    DescriptionCoffe="Café expresso tradicional com espuma cremosa" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={IcedEspresso} 
                    TitleCoffe="TRADICIONAL"
                    TitleCoffeTwo="GELADO"
                    TypeCoffe="Expresso Gelado"
                    DescriptionCoffe="Bebida preparada com café expresso e cubos de gelo" 
                    AmountCoffeProp={AmountCoffe}
                />
            </section>

            <section>
                <CoffeLayout 
                    CoffeImage={CoffeeWithMilk} 
                    TitleCoffe="TRADICIONAL"
                    TitleCoffeTwo="COM LEITE"
                    TypeCoffe="Café com Leite"
                    DescriptionCoffe="Meio a meio de expresso tradicional com leite vaporizado" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={Latte} 
                    TitleCoffe="TRADICIONAL"
                    TitleCoffeTwo="COM LEITE"
                    TypeCoffe="Latte"
                    DescriptionCoffe="Uma dose de café expresso com o dobro de leite e espuma cremosa" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={Capuccino} 
                    TitleCoffe="TRADICIONAL"
                    TitleCoffeTwo="COM LEITE"
                    TypeCoffe="Capuccino"
                    DescriptionCoffe="Bebida com canela feita de doses iguais de café, leite e espuma" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={Macchiato} 
                    TitleCoffe="TRADICIONAL"
                    TitleCoffeTwo="COM LEITE"
                    TypeCoffe="Macchiato"
                    DescriptionCoffe="Café expresso misturado com um pouco de leite quente e espuma" 
                    AmountCoffeProp={AmountCoffe}
                />
            </section>

            <section>
                <CoffeLayout 
                    CoffeImage={Mocaccino} 
                    TitleCoffe="TRADICIONAL"
                    TitleCoffeTwo="COM LEITE"
                    TypeCoffe="Mocaccino"
                    DescriptionCoffe="Café expresso com calda de chocolate, pouco leite e espuma" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={HotChocolate} 
                    TitleCoffe="ESPECIAL"
                    TitleCoffeTwo="COM LEITE"
                    TypeCoffe="Chocolate Quente"
                    DescriptionCoffe="Bebida feita com chocolate dissolvido no leite quente e café" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={Cubano} 
                    TitleCoffe="ESPECIAL"
                    TitleCoffeTwo="GELADO"
                    TitleCoffeThree="ALCOÓLICO"
                    TypeCoffe="Cubano"
                    DescriptionCoffe="Drink gelado de café expresso com rum, creme de leite e hortelã" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={Havaiano} 
                    TitleCoffe="ESPECIAL"
                    TypeCoffe="Havaiano"
                    DescriptionCoffe="Bebida adocicada preparada com café e leite de coco" 
                    AmountCoffeProp={AmountCoffe}
                />
            </section>

            <div className="SessionNotCompleted">
                <CoffeLayout 
                    CoffeImage={Arabic} 
                    TitleCoffe="ESPECIAL"
                    TypeCoffe="Árabe"
                    DescriptionCoffe="Bebida preparada com grãos de café árabe e especiarias" 
                    AmountCoffeProp={AmountCoffe}
                />

                <CoffeLayout 
                    CoffeImage={Irish} 
                    TitleCoffe="ESPECIAL"
                    TitleCoffeTwo="ALCOÓLICO"
                    TypeCoffe="Irlandês"
                    DescriptionCoffe="Bebida preparada com grãos de café árabe e especiarias" 
                    AmountCoffeProp={AmountCoffe}
                />
            </div>

        </CoffesSectionBaseStyles>
    )
}