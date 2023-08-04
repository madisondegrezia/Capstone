import { Form } from "react-router-dom";
import "./Account.css";

export default function Account() {
  return (
    <div className="account">
      <Form className="profile">
        <h1 className="title">Personal Info</h1>
        <h2 className="sub-title">Full Name</h2>
        <input
          name="fullname"
          className="input"
          type="text"
          placeholder="Jane Doe"
        />
        <h2 className="sub-title">Birthday</h2>
        <input
          name="birthday"
          className="input"
          type="text"
          placeholder="April 20, 2000"
        />
        <h2 className="sub-title">Gender</h2>
        <input
          name="gender"
          className="input"
          type="text"
          placeholder="Female"
        />
        <h2 className="sub-title">Email</h2>
        <input
          name="email"
          className="input"
          type="email"
          placeholder="example@example.com"
        />
        <h2 className="sub-title">Password</h2>
        <input
          name="password"
          className="input"
          type="password"
          placeholder="********"
        />
        <button type="submit" className="btn">
          Update
        </button>
      </Form>
    </div>
  );
}
