import React from "react";
import Post from "../components/Post";
import WelcomMeassage from "./WelcomMeassage";
import { useLoaderData } from "react-router-dom";

const PostList = () => {
const postList = useLoaderData()

  return (
    <div>
      {postList.length === 0 && <WelcomMeassage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export const postLoader = () => {
  return fetch(`https://dummyjson.com/posts`)
    .then((res) => res.json())
    .then((data) => {
      return data.posts;
    });
};

export default PostList;
