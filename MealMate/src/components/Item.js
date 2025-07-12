import { CDN_URL } from "../utils/constants";


const Item = (props) => {
  const { resList } = props;
  const { name, cuisines, avgRating, sla, cloudinaryImageId} = resList.info;

  return (
    <div className="items" >
      <img
        className="chawal"
        alt="Restaurant"
        src={CDN_URL+cloudinaryImageId}

/>
      <h3>{name}</h3>
       <hr style={{ width: "60%", marginTop: "", border: "1px solid #C8C8C8" }} /> 
      <h5>⭐ {avgRating} Stars · {sla?.deliveryTime} mins</h5> 
      <hr style={{ width: "60%", margin: "", border: "1px solid #C8C8C8" }} />
      <h4>{cuisines.join(", ")}</h4>
    </div>
  );
};

export default Item;