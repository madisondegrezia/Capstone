import { FaCameraRetro, FaStar, FaTrash, FaHome } from "react-icons/fa"
import { useLoaderData, useLocation } from "react-router-dom/dist/umd/react-router-dom.development";
import { useOutletContext, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

export default function UserReviews () {
    const [isCorrectUser, restaurants] = useOutletContext();
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
    
    const handleDelete = async(Id, e) => {
        e.preventDefault();

        try {
            const response = await fetch(
              `/api/review/${Id}`,
              {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            if (response.ok) {
                console.log(response);
                await mapReviews();  // Re-fetch the reviews after a successful delete
            } else {
                const { errors } = await response.json();
                return errors;
            }
            const { errors } = await response.json();
            return errors;
          } catch (error) {
            console.error(error);
            console.log("AN ERROR!");
            return "Whoops! Something went wrong";
          }

    }

    async function mapReviews() {

    const data = await getReviews(id);

    if (!Array.isArray(data)) {
        setListReview([]);
        return;
    }
    const list = await Promise.all(data.map(async (item, index) => {
        const restaurant = await getRestaurant(item.RestaurantId);  // Assuming each review has a restaurantId
        return (
            <div className="review-box" key={item.id}>
                <div className="review-header flex flex-row justify-between">
                    <div className="res-detail-box flex flex-row gap-4">
                        <img className="user-image-small-r w-14 h-14" src={restaurant.profileImage}></img>
                        <div className="res-details">
                            <p>{restaurant.restaurantName}</p>
                            <p>{restaurant.address}</p>
                        </div>
                    </div>
                    <div className="rate flex flex-row">
                        {...getStars(item.rate)}
                    </div>
                </div>
                <p className="review-body">
                    {item.review}
                </p>
                { isCorrectUser ? <div className="flex flex-row w-full justify-end">
                <FaTrash className="trash" style={{ color: "#ef0b0b" }} onClick={(e) => handleDelete(item.id, e)}/>
                </div> : null }
            </div>
        );
    }));
    setListReview(list);
}
    return <>{ restaurantInfo ? listReview : (<p>Loading...</p>)}</>;
          
}
