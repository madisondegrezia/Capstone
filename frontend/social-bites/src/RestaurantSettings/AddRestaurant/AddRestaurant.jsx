import { useActionData } from "react-router-dom/dist/umd/react-router-dom.development";
import "./AddRestaurant.css";
import { Form, redirect } from "react-router-dom";

export default function AddRestaurant() {
  const data = useActionData();

  return (
    <div className="add-restaurant">
      <Form
        className="profile"
        method="post"
        action="/restaurant/settings/addrestaurant"
      >
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

export const addRestaurantAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    name: data.get("name"),
    address: data.get("address"),
  };

  return redirect("/restaurant/settings/");
};
