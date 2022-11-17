import { NavLink } from "react-router-dom";
import { StylesHeader } from "./styles"
import LogoHeader from '../assets/LogoHeader.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

export function Header(){
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
                        <ShoppingCart className="ShopIcon" size={32}/>
                    </NavLink>
                </div>
                
                <span className="CartAmount">1</span>
            </nav>
        </StylesHeader>
    )
}