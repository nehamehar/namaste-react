import { CDN_URL } from "../utils/constants"
const ItemListAccordian=({items})=>{
    console.log(items)
    
    return <div className=""> 
  {items.map(item => (
    <div key={item.card.info.id} className="mt-12 p-5 m-5 border-b-4 border-[#EDEDED] flex justify-between">
      <div className="w-full font-semibold text-left">
        <span>{item.card.info.name} </span> 
        <span className="block mt-1 text-green-600"> ₹{(item.card.info.price || item.card.info.defaultPrice) / 100}</span>
        <p className="mt-4 font-light text-gray-600">{item.card.info.description}</p>
      </div>
       <div>
      <div className="absolute mt-16">
      <button className="p-2 px-8 m-12 font-bold text-green-600 bg-white border border-gray-400 rounded-lg shadow-lg hover:bg-gray-100">ADD</button>
      </div>
      <img 
        src={CDN_URL + item.card.info.imageId} 
        alt={item.card.info.name} 
        className="object-cover m-2 mb-4 -32 w-44"
      />
    </div>
    </div>
  ))}
</div>
}

export default ItemListAccordian