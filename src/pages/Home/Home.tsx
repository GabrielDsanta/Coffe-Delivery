import { CoffesSection } from "../../components/CoffesComponent/Coffes";
import { SectionHome } from "../../components/SectionHomeComponent/SectionHome";
import { StylesHome } from "./styles";
import { StylesHomeSection } from "../../components/SectionHomeComponent/styles"
import { createContext } from "react";


interface CoffeContextData{
    Type1: string,
    Type2?: string,
    Type3?: string,
    Name: string,
    Amount: number,
    Price: 9.90,
    PlusAmountCoffe: (Amount: number) => void,

}

export const CoffeContext = createContext({} as CoffeContextData)

export function Home(){

    function HandlePlusAmountCoffe(Amount: number){
        console.log("cu")
    }

    return(
        <StylesHome>
            <StylesHomeSection>
                <SectionHome/>
                <CoffesSection/>
            </StylesHomeSection>
        </StylesHome>
    )
}