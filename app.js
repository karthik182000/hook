import React from "react";
import ReactDOM from "react-dom/client";


const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&usqp=CAU" alt="LogoHere"/>
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

const resList = [
  
    {
      "id": 1,
      "name": "Tasty Bites",
      "cuisine": "Italian",
      "rating": 4.5,
      "deliveryTime": "30-45 minutes",
      "cloudinaryID": "v1713966438",
      "fooId": "Italian"
    },
    {
      "id": 2,
      "name": "Spice Fusion",
      "cuisine": "Indian",
      "rating": 4.2,
      "deliveryTime": "45-60 minutes",
      "cloudinaryID": "v1713966436",
      "fooId": "Indian"
    },
    {
      "id": 3,
      "name": "Sushi Delight",
      "cuisine": "Japanese",
      "rating": 4.7,
      "deliveryTime": "25-40 minutes",
      "cloudinaryID": "v1713965551",
      "fooId": "Sushi"
    },
    {
      "id": 4,
      "name": "BBQ Haven",
      "cuisine": "American",
      "rating": 4.0,
      "deliveryTime": "35-50 minutes",
      "cloudinaryID": "v1713966434",
      "fooId": "American"
    },
    {
      "id": 5,
      "name": "Mediterranean Delights",
      "cuisine": "Mediterranean",
      "rating": 4.6,
      "deliveryTime": "40-55 minutes",
      "cloudinaryID": "v1713966440",
      "fooId": "Mediterranean"
    },
    {
      "id": 6,
      "name": "Thai Palace",
      "cuisine": "Thai",
      "rating": 4.3,
      "deliveryTime": "30-45 minutes",
      "cloudinaryID": "v1713966445",
      "fooId": "Thai"
    },
    {
      "id": 7,
      "name": "French Bistro",
      "cuisine": "French",
      "rating": 4.4,
      "deliveryTime": "35-50 minutes",
      "cloudinaryID": "v1713966435",
      "fooId": "French"
    },
    {
      "id": 8,
      "name": "Vegetarian Garden",
      "cuisine": "Vegetarian",
      "rating": 4.8,
      "deliveryTime": "25-40 minutes",
      "cloudinaryID": "v1713966446",
      "fooId": "Veg"
    },
    {
      "id": 9,
      "name": "Steakhouse Supreme",
      "cuisine": "Steakhouse",
      "rating": 4.1,
      "deliveryTime": "45-60 minutes",
      "cloudinaryID": "v1713966443",
      "fooId": "Stake"
    },
    {
      "id": 10,
      "name": "Seafood Shack",
      "cuisine": "Seafood",
      "rating": 4.6,
      "deliveryTime": "40-55 minutes",
      "cloudinaryID": "v1713966441",
      "fooId": "SeaFood"
    }
  ];
  

const Restrauntcard=(props)=>{
    const {resData}=props;
    const {name,cloudinaryID,fooId,cuisine,rating,deliveryTime,}=resData;
    return (
        <div className="res-card">
            <img className="res-card-img"src={"https://res.cloudinary.com/dibwqrjhg/image/upload/"+cloudinaryID+"/"+fooId} alt="logo-here"/>
            <h3>{name}</h3>
            <h4>{cuisine}</h4>
            <h4>{rating}stars</h4>
            <h4>{deliveryTime}</h4>
        </div>
    )
}

const Body=()=>{
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                  resList.map(restaurant=><Restrauntcard key={restaurant.id} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}


const AppLayout=()=>{
    return (
    <div className="app">
        <Header />
        <Body />
    </div>);
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)