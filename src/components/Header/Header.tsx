import { NavLink } from "react-router-dom";
import { StylesHeader } from "./styles"
import LogoHeader from '../../assets/LogoHeader.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { useContext } from "react";
import { CoffeContext } from "../../contexts/CoffeContext";

export function Header(){
    const { Cart } = useContext(CoffeContext)
    return(
        <StylesHeader>
            <NavLink to='/' title="Home">
                <img src={LogoHeader} />
            </NavLink>
            
            <nav>
                <span>
                    <MapPin size={32}/>
                    Porto Alegre, RS
                </span>

                <div>
                    <NavLink to='/checkout' title="Checkout">
                        <ShoppingCart className="ShopIcon" size={28}/>
                    </NavLink>
                </div>
                
                {Cart.length > 0 && (<span className="CartAmount">{Cart.length}</span>)}
            </nav>
        </StylesHeader>
    )
}