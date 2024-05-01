import { CDN_URL } from "../utils/constants";

const Restrauntcard=(props)=>{
    const {resData}=props;
    const {name,cloudinaryImageId,cuisines,avgRating}=resData;
    return (
        <div className="res-card">
            <img className="res-card-img"src={CDN_URL+cloudinaryImageId} alt="logo-here"/>
            <h3>{name}</h3>
            <h4>{cuisines}</h4>
            <h4>{avgRating}stars</h4>
        </div>
    )
}

export default Restrauntcard;