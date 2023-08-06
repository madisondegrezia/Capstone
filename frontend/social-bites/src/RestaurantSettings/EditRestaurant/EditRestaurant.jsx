import "./EditRestaurant.css";

import { Form } from "react-router-dom";
export default function EditRestaurant() {
  return (
    <div className="edit-restaurant">
      <Form
        className="profile"
        method="post"
        action="/restaurant/settings/addrestaurant"
      >
        <h1 className="title">Edit Restaurant</h1>
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
          Update
        </button>
      </Form>
    </div>
  );
}
