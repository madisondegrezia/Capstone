import { useLoaderData } from "react-router-dom/dist/umd/react-router-dom.development";
import "./RestaurantPost.css";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineRestaurantMenu } from "react-icons/md";

export default function RestaurantPost() {
  const posts = useLoaderData();

  return (
    <>
      <div className="flex justify-between">
        <div></div>
        <div className="mr-2 mb-2">
          <Link
            to="/post/new"
            className="bg-red-500 rounded text-white px-4 py-2 hover:bg-red-600 hover:text-white transition "
          >
            + Add Post
          </Link>
        </div>
      </div>
      <div>
        {posts.map((post) => (
          <div key={`${post.id}`}>
            {/* <div className='post-img'>
              <MdOutlineRestaurantMenu size={25} />
            </div> */}
            <div id="content">
              <h2>{post.postTitle}</h2>
              <p>{post.postContent}</p>
              <button className="flex-end">
                <FaTrash style={{ color: "#ef0b0b" }} />
              </button>
            </div>

            <div className="line"></div>
          </div>
        ))}
      </div>
    </>
  );
}

export const postLoader = async () => {
  const res = await fetch("/api/restaurant_post/1");
  //console.log(res);
  return res.json();
};
