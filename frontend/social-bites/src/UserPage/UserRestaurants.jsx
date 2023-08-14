import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom/dist/umd/react-router-dom.development";


export default function UserRestaurants() {
    const [isCorrectUser, restaurants] = useOutletContext();
    
    function renderRestaurants() {
        return restaurants.map((item, index) => (
            <div className="review-box" key={item.id}>
                <div className="review-header flex flex-row justify-between">
                    <div className="res-detail-box flex flex-row gap-4">
                        <img className="user-image-small-r w-14 h-14" src={item.profileImage}></img>
                        <div className="res-details">
                            <p>{item.restaurantName}</p>
                            <p>{item.address}</p>
                        </div>
                    </div>
                    <div className="rate flex flex-row">
                    </div>
                </div>
                <p className="review-body">
                    Restaurant description placeholder
                </p>
            </div>
        ));
    }

    return <>{ renderRestaurants() }</>;
}
