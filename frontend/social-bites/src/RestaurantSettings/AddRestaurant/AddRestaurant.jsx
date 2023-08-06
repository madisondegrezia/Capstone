import "./AddRestaurant.css";
import { Form, redirect } from "react-router-dom";

export default function AddRestaurant() {
  return (
    <div className="add-restaurant">
      <Form className="profile" method="post" action="/restaurant/settings/add">
        <h1 className="title">Add Restaurant</h1>
        <h2 className="sub-title">Restaurant Name</h2>
        <input
          name="name"
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

        <button type="submit" className="btn">
          Add
        </button>
      </Form>
    </div>
  );
}

// export async function action({ request, params }) {
//   let formData = await request.formData();
//   let jobData = Object.fromEntries(formData);
//   jobData.minSalary = parseInt(jobData.minSalary);
//   jobData.maxSalary = parseInt(jobData.maxSalary);
//   const response = await fetch("http://localhost:4000/api/restaurant", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jobData),
//   });
//   return redirect("/restaurant/settings");
// }

export const addRestaurantAction = async ({ request }) => {
  const data = await request.formData();

  const response = await fetch("http://localhost:4000/api/restaurant", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: {
      restaurantName: data.get("name"),
      address: data.get("address"),
    },
  });

  return redirect("/restaurant/settings/");
};

// export const addRestaurantAction = async ({ request }) => {
//   const data = await request.formData();

//   const submission = {
//     restaurantName: data.get("name"),
//     address: data.get("address"),
//   };

//   return redirect("/restaurant/settings/");
// };
