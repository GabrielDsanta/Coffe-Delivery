import { createContext,  ReactNode, useState } from "react"
import zod from 'zod'

export interface CartData{
    id: string
    CoffeImage: string
    TypeCoffe: string
    Amount: number
}

export interface AddressData{
    CEP: string
    road: string
    homeNumber: string
    complement?: string 
    city: string
    UF: string
    district: string
}

export interface CoffeData{
    Cart: CartData[]
    CallSetCart: (data: CartData) => void
    Address: AddressData
    CallSetAddress: (data: AddressData) => void
}

export const newAddressRegisterSchema = zod.object({
    CEP: zod.string().min(8).max(8),
    road: zod.string().min(5).max(30),
    homeNumber: zod.string().min(1).max(6),
    complement: zod.string().max(30).optional(),
    district: zod.string().min(1).max(30),
    city: zod.string().min(1).max(20),
    UF: zod.string().min(2).max(2)
})

export type newAddressRegisterSchemaData = zod.infer<typeof newAddressRegisterSchema>


interface CoffeContextProviderProps{
    children: ReactNode
}

export const CoffeContext = createContext({} as CoffeData)

export function CoffeContextProvider({ children }: CoffeContextProviderProps){
    const [Cart, setCart] = useState<CartData[]>([])
    const [Address, setAddress] = useState<AddressData>({} as AddressData)

    function CallSetCart(data: CartData){
        setCart((state) => [...state, data])
    }

    function CallSetAddress(data: AddressData){
        setAddress(data)
    }
    
    return(
       <CoffeContext.Provider 
            value={{ 
                Cart,
                CallSetCart,
                Address,
                CallSetAddress
            }}
        >
            {children}
        </CoffeContext.Provider>
    )
}