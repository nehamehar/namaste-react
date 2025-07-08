import { useState } from "react";
import { LOGO } from "../utils/constants";

const Header=()=>{
const [Btn,setBtn] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
            <img src={LOGO}></img>
            </div>
            <div className="navbar">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* creating login logout button */}
                    <button className="login" onClick={()=>{Btn==="Login" ? setBtn("Logout"): setBtn("Login")}}> {Btn}
                    </button>
                </ul>
            </div>

        </div>
        
    )
}

export default Header;