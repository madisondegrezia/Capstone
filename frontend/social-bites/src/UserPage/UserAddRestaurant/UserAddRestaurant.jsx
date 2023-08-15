import "./UserAddRestaurant.css";
import { Form, redirect } from "react-router-dom";

export default function UserAddRestaurant() {
  return (
    <div className="add-restaurant">
      <Form className="profile" method="post">
        {/* action="/restaurant/settings/add" */}
        <h1 className="title">Add Restaurant</h1>
        <h2 className="sub-title">Restaurant Name</h2>
        <input
          name="restaurantName"
          className="input"
          type="text"
          placeholder="Lord of the Fries"
        />
        <h2 className="sub-title">Restaurant Address</h2>
        <input
          name="address"
          className="input"
          type="text"
          placeholder="1234 Laughter Lane, Giggle City, SMILE 56789"
        />
        <button type="submit" className="btnAdd">
          Add
        </button>
      </Form>
    </div>
  );
}

export async function userAddRestaurantAction({ request, params }) {
  console.log("adfasd");
  let formData = await request.formData();
  let jobData = Object.fromEntries(formData);
  const response = await fetch("/api/restaurant", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jobData),
  });
  return redirect("/");
}
