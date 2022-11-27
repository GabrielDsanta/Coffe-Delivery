import { createContext,  ReactNode, useState } from "react"

export interface CartData{
    id: string
    CoffeImage: string
    TypeCoffe: string
    Amount: number
}

export interface CoffeData{
    Cart: CartData[]
    CallSetCart: (data: CartData) => void
}


interface CoffeContextProviderProps{
    children: ReactNode
}

export const CoffeContext = createContext({} as CoffeData)


export function CoffeContextProvider({ children }: CoffeContextProviderProps){
    const [Cart, setCart] = useState<CartData[]>([])

    function CallSetCart(data: CartData){
        setCart((state) => [...state, data])
    }

    return(
       <CoffeContext.Provider 
            value={{ 
                Cart,
                CallSetCart
            }}
        >
            {children}
        </CoffeContext.Provider>
    )
}