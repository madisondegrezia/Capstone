
// fetch for all restaurant in the db
export async function mainSectionRestaurantLoader() {
    const res = await fetch("/api/restaurant");
    return res.json();
}

// fetch for nearby restaurant
export async function nearbyRestaurantLoader(){
    const res = await fetch("/api/user/nearby_restaurant/5");
    return res.json();
}


//fetch for search restaurant in the db, find similar term of restaurant in the db
export async function searchRestaurantLoader(keywordSearchTerm){
    const res = await fetch(`/api/restaurant/search/${keywordSearchTerm}`);
    return res.json();
}

export async function restaurantByIdLoader(params){
    const res = await fetch(`/api/restaurant/${params.params.restaurantId}`);
    return res.json();
}
