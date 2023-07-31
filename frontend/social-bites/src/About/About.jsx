import NavBar from "../NavBar/NavBar";
import "./About.css";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="about-container">
        <div className="about">
          <div className="about-shell">
            <h1 className="about-title">Welcome to</h1>
            <img
              src="/src/assets/socialbites-logo.png"
              className="about-logo"
            />
          </div>
          <p className="about-text">
            <br />
            We are thrilled to present a unique dining experience that connects
            two important groups - the passionate food enthusiasts and the
            thriving restaurant businesses. Our platform allows restaurants to
            host their very own pages, enabling them to share exclusive deals
            and exciting events directly with all users.
            <br />
            <br /> Our recommendation system is designed to cater to your
            preferences in different ways. Whether you are looking for nearby
            restaurants or seeking events that align with your interests, such
            as game nights, live music, or trivia evenings, we have got you
            covered. Discovering new and delightful dining experiences has never
            been easier! <br />
            <br />
            As a user, you have the power to contribute to our community. Post
            your valuable restaurant reviews to guide others in their culinary
            journeys, and create lists of your favorite spots to keep track of
            those unforgettable meals. We believe in the power of connection and
            encourage restaurants to integrate their social media accounts,
            making it convenient for them to share updates across various
            platforms.
            <br />
            <br />
            Looking for the perfect place to satisfy your cravings? With our
            search options, you can easily locate restaurants by location, name,
            relevant tags, or even specific interests. We aim to make your
            dining adventures as delightful as the dishes you will discover.
            Join us on this gastronomic journey, where food enthusiasts and
            restaurants come together to celebrate the joy of great food and
            memorable experiences.
            <br />
            <br /> Thank you for being part of our community!
          </p>
        </div>
      </div>
    </>
  );
}
