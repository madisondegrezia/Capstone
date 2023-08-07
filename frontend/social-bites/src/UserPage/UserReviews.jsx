import { FaCameraRetro, FaStar } from "react-icons/fa"
import { useLoaderData, useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UserReviews () {
// -------------------------Section for mapping reviews --------------------
    const [listReview, setListReview] = useState([]);
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    let { id } = useParams();
    async function getReviews(id) {
        
        const response = await fetch(`/api/review/user/${id}`);
        const review = await response.json();
        return review; // Return the review data
    }


// -------------------------Section for setting rating stars ---------------

    function getStars(numStars) {
        const num = Math.round(numStars);
        const stars = [];
        for(let i = 1; i <= num; i++) {
            stars.push(<FaStar size={30} style={{color: "orange"}}/>)
        }
        return stars;
    }

// -------------------------Section for getting associated restaurant ---------------

    async function getRestaurant(Id) {
        try {
            const response = await fetch(`/api/restaurant/${Id}`);
            const restaurant = await response.json();
            console.log(restaurant);
            return restaurant;
        } catch (error) {
            console.error("Error fetching user:", error);
            return null;
        }
    }

    useEffect(() => {
        async function fetchData() {
            const temp = await getRestaurant(id);
            setRestaurantInfo(temp);
            await mapReviews();  // Wait until restaurantInfo is set before mapping reviews
        }
        fetchData();
    }, []);
    
    async function mapReviews() {

    const data = await getReviews(id);
    
    const list = data.map((item, index) =>(
            <div className="review-box">
                            <div className="review-header flex flex-row justify-between">
                                <div className="res-detail-box flex flex-row gap-4">
                                <img className="user-image-small w-14 h-14" src="/src/assets/default-avatar.webp"></img>
                                    <div className="res-details">
                                    <p>{restaurantInfo.restaurantName}</p>
                                    <p>1234 Street Street</p>
                                    </div>
                                </div>
                                <div className="rate flex flex-row">
                                {...getStars(item.rate)}
                                </div>
                            </div>
                            <p className="review-body">
                             {item.review}
                            </p>
                        </div>
        
    ))
    setListReview(list);
    }

    return <>{ restaurantInfo ? listReview : (<p>Loading...</p>)}</>;
          
}
