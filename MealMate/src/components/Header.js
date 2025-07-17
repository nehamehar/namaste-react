import { useState,useContext } from "react";
import { LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header=()=>{
const [Btn,setBtn] = useState("Login");


const cartItems = useSelector((store) => store.cart.items);

const {loggedInUser} = useContext(UserContext)
console.log(loggedInUser)
    return (
        <div className="flex justify-between shadow-lg mb-10 h-32 bg-[#FFFFFF]">
            <div className="logo">
            <img className="flex items-center w-24 pb-3"  src={LOGO}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-7">
                    <li className="px-3">
                        <Link to={"/"}>Home</Link></li>
                    <li className="px-3">
                        <Link to={"about"}>About Us</Link></li>
                    <li className="px-3"> 
                        <Link to={"contact"}>Contact Us</Link></li>
                    <li className="px-3">
                        <Link to={"cart"}>Cart-{cartItems.length}</Link></li>
                    <li className="px-3"> 
                        <Link to={"grocery"}>Grocery</Link></li>
                    <li className="px-3 font-bold">{loggedInUser}</li>
                    {/* creating login logout button */}
                    <button className="flex items-center px-3 py-1 ml-6 font-semibold border-4 bg-slate-400" onClick={()=>{Btn==="Login" ? setBtn("Logout"): setBtn("Login")}}> {Btn}
                    </button>
                </ul>
            </div>

        </div>
        
    )
}

export default Header;