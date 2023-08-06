export async function mainSectionRestaurantLoader() {
    const res = await fetch("/api/restaurant");
    return res.json();
}

export async function nearbyRestaurantLoader(){
    const res = await fetch("/api/user/nearby_restaurant/5");
    return res.json();
}

export async function allEventsLoader(){
    const res = await fetch("/api/restaurant_post");
    return res.json();
}

export async function nearbyEventLoader(){
    const res = await fetch("/api/restaurant_post/user/nearby_post/5");
    return res.json();
}

export async function interestedEventLoader(){
    const res = await fetch("/api/restaurant_post/user/interested_post");
    return res.json();
}


export async function load() {
    const res = await fetch("http://localhost:3000/restaurants");
    return res.json();
}
