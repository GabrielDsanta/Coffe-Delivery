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
    paymentMethod: string
}

export interface CoffeData{
    Cart: CartData[]
    CallSetCart: (data: CartData) => void
    Address: AddressData
    CallSetAddress: (data: AddressData) => void
    Total: number
    CallSetTotal: (price: number) => void
}

export const newAddressRegisterSchema = zod.object({
    CEP: zod.string().min(8).max(8),
    road: zod.string().min(5).max(30),
    homeNumber: zod.string().min(1).max(6),
    complement: zod.string().max(40).optional(),
    district: zod.string().min(1).max(30),
    city: zod.string().min(1).max(20),
    UF: zod.string().min(2).max(2),
    paymentMethod: zod.string().min(1)
})

export type newAddressRegisterSchemaData = zod.infer<typeof newAddressRegisterSchema>


interface CoffeContextProviderProps{
    children: ReactNode
}

export const CoffeContext = createContext({} as CoffeData)

export function CoffeContextProvider({ children }: CoffeContextProviderProps){
    const [Cart, setCart] = useState<CartData[]>([])
    const [Address, setAddress] = useState<AddressData>({} as AddressData)
    const [Total, setTotal] = useState(0)

    function CallSetCart(data: CartData){
        setCart((state) => [...state, data])
    }

    function CallSetAddress(data: AddressData){
        setAddress(data)
    }

    function CallSetTotal(price: number){
        setTotal(Total + price)
    }

    // function PlusAmountCoffe(){
    //     setAmountCoffe(AmountCoffe + 1)
    // }

    // function MinusAmountCoffe(){
    //     AmountCoffe == 0 ? setAmountCoffe(0) : setAmountCoffe(AmountCoffe - 1)
    // }
    
    return(
       <CoffeContext.Provider 
            value={{ 
                Cart,
                CallSetCart,
                Address,
                CallSetAddress,
                Total,
                CallSetTotal
            }}
        >
            {children}
        </CoffeContext.Provider>
    )
}