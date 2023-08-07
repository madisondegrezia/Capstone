import {
  Form,
  Link,
  useActionData,
  redirect,
  useLoaderData,
} from "react-router-dom";

export async function loader() {
  const postResponse = await fetch(`/api/restaurant_post`);
  const post = await postResponse.json();
  return { post };
}

export async function action({ request }) {
  let formData = await request.formData();
  let postData = Object.fromEntries(formData);
  console.log(postData)
    try {
      const response = await fetch("/api/restaurant_post/1", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });
      if (response.ok) {
        console.log(response)
        return redirect("/restaurant");
      }
      //const { errors } = await response.json();
      return null;
    } catch (error) {
      console.error(error);
      console.log("AN ERROR!")
      return "Whoops! Something went wrong";
    }
}

function AddPost() {
  const errors = useActionData();
  const { post } = useLoaderData();

  return (
    <Form method="post" className="selection:bg-red-200 flex flex-col gap-2 ">
      <h1 className="text-2xl pt-3 ml-2">Add Restaurant Post</h1>
      <Link to={`/restaurant`} className="ml-2">
        {"<"} Back
      </Link>
      {errors && <div className="text-red-300">{errors}</div>}
      <div className="flex flex-col items-center justify-center">
        <fieldset className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="postTitle"
            id="postTitle"
            className="border-4 focus:outline-none p-2"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="title">Content</label>
          <input
            type="text"
            name="postContent"
            id="postContent"
            className="border-4 focus:outline-none p-2"
          />
        </fieldset>
        <input
          className="bg-red-500 hover:bg-red-600 text-white transition mt-4 p-3 rounded cursor-pointer "
          type="submit"
          value="Post"
        ></input>
      </div>
    </Form>
  );
}

export default AddPost;
