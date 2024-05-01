import Restrauntcard from "./Restrauntcard";
import {useEffect, useState} from "react"


const Body=()=>{
    const[listOfRes,setListOfRes]=useState([]);
    useEffect(()=>{fetchData();},[]);

  const fetchData=async ()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.8281257&lng=78.0372792&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json=await data.json();

    console.log(json);
    setListOfRes(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };
    


    return(
        <div className="body">
            <div >
              <button className="filter-btn" 
              onClick={()=>{
                const filteredList=listOfRes.filter(
                    (res)=>res.avgRating>4);
                setResList(filteredList);
              }}>TopRated Restaurants</button>
            </div>
            <div className="res-container">
                {
                  listOfRes.map(restaurant=><Restrauntcard key={restaurant.parentId} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;