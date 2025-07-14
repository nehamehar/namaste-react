import { useState } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header=()=>{
const [Btn,setBtn] = useState("Login");
    return (
        <div className="header">
            <div className="logo">
            <img src={LOGO}></img>
            </div>
            <div className="navbar">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link></li>
                    <li>
                        <Link to={"about"}>About Us</Link></li>
                    <li>
                        <Link to={"contact"}>Contact Us</Link></li>
                    <li>
                        <Link to={"cart"}>Cart</Link></li>
                    <li>
                        <Link to={"grocery"}>Grocery</Link></li>
                    {/* creating login logout button */}
                    <button className="login" onClick={()=>{Btn==="Login" ? setBtn("Logout"): setBtn("Login")}}> {Btn}
                    </button>
                </ul>
            </div>

        </div>
        
    )
}

export default Header;