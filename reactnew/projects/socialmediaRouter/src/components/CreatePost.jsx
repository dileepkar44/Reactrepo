import React from "react";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  //const {addPost} =  useContext(PostList)
  return (
    <div>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your user Id here
          </label>
          <input
            type="type"
            name="userId"
            className="form-control"
            id="userId"
            placeholder="Your user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="type"
            name="title"
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Post Content
          </label>
          <textarea
            type="type"
            name="body"
            className="form-control"
            id="body"
            placeholder="Tell us about your self"
            rows={4}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of reactions
          </label>
          <input
            type="type"
            name="reactions"
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to do this"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Enter your Hashtags here
          </label>
          <input
            type="type"
            name="tags"
            className="form-control"
            id="tags"
            placeholder="Please enter tags using spaces."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </div>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // console.log('got response',post)
      console.log(post)
    });

  return redirect("/");
}

export default CreatePost;
