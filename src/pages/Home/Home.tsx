import { CoffesSection } from "../../components/CoffesComponent/Coffes";
import { SectionHome } from "../../components/SectionHomeComponent/SectionHome";
import { StylesHome } from "./styles";
import { StylesHomeSection } from "../../components/SectionHomeComponent/styles"



export function Home(){

    return(
        <StylesHome>
            <StylesHomeSection>
                <SectionHome/>
                <CoffesSection/>
            </StylesHomeSection>
        </StylesHome>
    )
}