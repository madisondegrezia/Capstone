import { useLoaderData } from "react-router-dom/dist/umd/react-router-dom.development";
import "./RestaurantPost.css";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useFetcher } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export default function RestaurantPost() {
  const { restaurantId } = useParams();
  // take restaurantId as a param for loader
  const posts = useLoaderData(restaurantId);

  //delete post
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef(null);
  const fetcher = useFetcher();

  useEffect(() => {
    inputRef.current?.focus();
  }, [isEditing]);

  const placeholderUrl = "YOUR_PLACEHOLDER_URL";
  const placeholderText = "YOUR_PLACEHOLDER_TEXT";

  return (
    <>
    <h1 className="text-4xl p-5 activity">Board</h1>
      <div className="flex justify-between">
        <div></div>
        <div className="mr-2 mb-4">
          <Link
            to={`/restaurant/${restaurantId}/post/new`}
            className="bg-red-500 rounded text-white px-4 py-2 hover:bg-red-600 hover:text-white transition "
          >
            + Add Post
          </Link>
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <div key={`${post.id}`} className="flex flex-col items-center">
            <div className="post-card post-card-shadow">
              <div className="post-img">
                <MdOutlineRestaurantMenu size={25} />
              </div>
              <h2 className="text-xl mb-2">{post.postTitle}</h2>
              <p>{post.postContent}</p>
              {/* delete */}
              <fetcher.Form
                method="post"
                action={`/restaurant_post/delete/${post.id}`}
                className="flex flex-row justify-end"
                onSubmit={(event) => {
                  if (
                    !confirm("Please confirm you want to delete this record.")
                  ) {
                    event.preventDefault();
                  }
                }}
              >
                <button className="mr-2">
                  <FaTrash style={{ color: "#ef0b0b" }} />
                </button>
                <Link
                to={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  "http://localhost:5173/restaurant/1" || placeholderUrl
                )}&text=${encodeURIComponent("wow" || placeholderText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2"
              >
                <svg viewBox="0 -2 20 20" version="1.1" width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>twitter [#154]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]"> </path> </g> </g> </g> </g></svg>      
                </Link>

                <Link
                  to={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent("http://localhost:5173/restaurant/1")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H15V13.9999H17.0762C17.5066 13.9999 17.8887 13.7245 18.0249 13.3161L18.4679 11.9871C18.6298 11.5014 18.2683 10.9999 17.7564 10.9999H15V8.99992C15 8.49992 15.5 7.99992 16 7.99992H18C18.5523 7.99992 19 7.5522 19 6.99992V6.31393C19 5.99091 18.7937 5.7013 18.4813 5.61887C17.1705 5.27295 16 5.27295 16 5.27295C13.5 5.27295 12 6.99992 12 8.49992V10.9999H10C9.44772 10.9999 9 11.4476 9 11.9999V12.9999C9 13.5522 9.44771 13.9999 10 13.9999H12V21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z" fill="#0F0F0F"></path> </g></svg>
                </Link>

              </fetcher.Form>
            </div>

            <div className="line"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export const postLoader = async (restaurantId) => {
  console.log(restaurantId.params.restaurantId);
  const res = await fetch(
    `/api/restaurant_post/${restaurantId.params.restaurantId}`
  );
  return res.json();
};
