import React, { useContext, useRef } from "react";
import  { PostList } from "../store/post-list-store";

const CreatePost = () => {
 const {addPost} =  useContext(PostList)
const userIdElement = useRef()
const postTitleElement = useRef()
const postBodyElement = useRef()
const reactionsElement = useRef()
const tagsElement = useRef()

const handleSubmit=(e)=>{
e.preventDefault();
const userId = userIdElement.current.value
const postTitle = postTitleElement.current.value;
const postBody = postBodyElement.current.value
const reactions = reactionsElement.current.value
const tags = tagsElement.current.value.split('')

userIdElement.current.value ='';
postTitleElement.current.value = '';
postBodyElement.current.value = '';
reactionsElement.current.value = '';
tagsElement.current.value = '';


addPost(userId,postTitle,postBody,reactions,tags)
}

  return (
    <div>
      <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
          <label htmlFor="userId" className="form-label" >
            Enter your user Id here
          </label>
          <input
            type="type"
            ref={userIdElement}
            className="form-control"
            id="userId"
            placeholder="Your user id"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label" >
            Post Title
          </label>
          <input
            type="type"
            ref={postTitleElement}
            className="form-control"
            id="title"
            placeholder="How are you feeling today..."
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label" >
           Post Content
          </label>
          <textarea
            type="type"
            ref={postBodyElement}
            className="form-control"
            id="body"
            placeholder="Tell us about your self"
            rows={4}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label" >
            Number of reactions
          </label>
          <input
            type="type"
            ref={reactionsElement}
            className="form-control"
            id="reactions"
            placeholder="How many people reacted to do this"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label" >
            Enter your Hashtags here
          </label>
          <input
            type="type"
            ref={tagsElement}
            className="form-control"
            id="tags"
            placeholder="Please enter tags using spaces."
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
