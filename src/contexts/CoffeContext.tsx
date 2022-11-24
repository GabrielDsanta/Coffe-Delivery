import { createContext, ReactNode, useState } from "react"

interface CoffeData{
    // CoffeImage: string
    // TitleCoffe: string
    // TitleCoffeTwo?: string
    // TitleCoffeThree?: string
    // TypeCoffe: string
    // DescriptionCoffe: string
    AmountCoffe: number
    setAmountCoffe: (AmountCoffe: number) => void
    PlusAmountCoffe: () => void
    MinusAmountCoffe: () => void
}

interface CoffeContextProviderProps{
    children: ReactNode
}


export const CoffeContext = createContext({} as CoffeData)

export function CoffeContextProvider({ children }: CoffeContextProviderProps){
    const [AmountCoffe, setAmountCoffe] = useState(1)

    function PlusAmountCoffe(){
        setAmountCoffe(AmountCoffe + 1)
    }

    function MinusAmountCoffe(){
        AmountCoffe == 0 ? setAmountCoffe(0) : setAmountCoffe(AmountCoffe - 1)
    }

    return(
       <CoffeContext.Provider 
            value={{ 
                AmountCoffe,
                setAmountCoffe,
                PlusAmountCoffe,
                MinusAmountCoffe
            }}
        >
            {children}
        </CoffeContext.Provider>
    )
}