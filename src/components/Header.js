import { LOGO_URL } from "../utils/constants";

const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="LogoHere"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>ContactUs</li>
                    <li>Cart</li>                    
                </ul>
            </div>
        </div>
    )

}
export default Header;