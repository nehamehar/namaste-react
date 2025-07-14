import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestroMenu=()=>{
  //useRestautrantsMenu.js code
const {resId}=useParams(); 
const resInfo =useRestaurantMenu(resId)
const Info=resInfo?.cards?.[2]?.card?.card?.info;
if(resInfo===null) return <Shimmer/>
const {
  name,
  cuisines,
  costForTwoMessage,
  avgRating,
  totalRatingsString,
  availability,
  city
} = Info;

const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card?.itemCards || [];
const offers =  resInfo?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers || [];
const isOpen = availability?.opened;


    return(
        <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>⭐ {avgRating} ({totalRatingsString}) - {costForTwoMessage}</p>
      <p>{isOpen ? `Open now – ${city}` : "Closed"}</p>
      {offers.length > 0 && (
        <div className="offers">
          <h3>Offers:</h3>
          <ul>
            {offers.map((offer, index) => (
              <li key={index}>
                <strong>{offer.info.header}</strong> – {offer.info.description}
              </li>
            ))}
          </ul>
        </div>
      )}
      <ul>{itemCards.map((item) => (
    <li key={item.card.info.id}>
      {item.card.info.name} – ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}
       </li>))}
      </ul>
    </div>
  );
};

export default RestroMenu;