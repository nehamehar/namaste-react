import { useState, useEffect } from "react";
import Item from "./Item";
import Shimmer from "./Shimmer";
import Header from "./Header";
import RestroMenu from "./RestroMenu";
import { Link } from "react-router-dom";
const Body = () => {
  const [Filtered, setFiltered] = useState([]); //resList
  const [Search, setSearch]=useState("")
  const [AfterSearch, setAfterSearch]= useState([])
   
  
  useEffect(()=>{
    fetchData()
   },[])
// fetching data from api using async await 
   const fetchData= async()=>{
    // calling swiggy api with cors 
   const data = await fetch(
  "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6139&lng=77.2090&page_type=DESKTOP_WEB_LISTING"
);
const json = await data.json();
// accessing res form api swiggy and updating Filtered through setFiltered:
setFiltered(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
setAfterSearch(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}
// making shimmer 
// we call this conditional rendering
if (!Filtered || Filtered.length === 0) {
  return <Shimmer />;
}
{/* <Item> data={Filtered}</Item> */}
return(
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="type here..." className="search-box" value={Search} onChange={(e) => setSearch(e.target.value)}></input>
          <button onClick={()=>{const AfterSearch = Filtered.filter((res)=> res.info.name.toLowerCase().includes(Search.toLowerCase()))
            setAfterSearch(AfterSearch); 
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={()=>{let topRated =Filtered.filter((res)=> res.info.avgRatingString > 4)
      setFiltered(topRated)}}>Top Rated Restaurants</button>
      </div> 
      {/* creating button putting event handler by onclick */}
      {/* The filter method loops through your array and gives you one element at a time.
      You named that element res — it's just a variable.
      So if your array is full of restaurants, res will represent one restaurant at a time. */}
      <div className="container">
        {/* using map for getting data from reslist  */}
        {AfterSearch.map((restaurant) => (
            // we have to give unique id when we are looping in data to show each items with unique key not use index as bad practise//
          <Link key={restaurant.info.id} to={"/restaurant/"+ restaurant.info.id}> <Item resList={restaurant} /> </Link>
        ))}
      </div> 
    </div>
  );
};
export default Body;



