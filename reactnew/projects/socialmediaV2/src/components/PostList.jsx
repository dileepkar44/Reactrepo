import React, { useContext,useEffect } from "react";
import Post from "../components/Post";
import{ PostList as PostListData} from "../store/post-list-store";
import WelcomMeassage from "./WelcomMeassage";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [ fetching, setFetching] = useState(false)
  // const [dataFetched, setDataFetched] = useState(false)
  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;

    setFetching(true)
    fetch(`https://dummyjson.com/posts`, {signal})
    .then((res) => res.json())
    .then((data) => {
      addInitialPosts(data.posts);
      setFetching(false)
    });
    return ()=>{
      controller.abort()
    }
  },[])
  
  // if(!dataFetched){
  // fetch(`https://dummyjson.com/posts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  //     setDataFetched(true);
  //   }

  // const handleGetPostsClick = () => {
  //   fetch(`https://dummyjson.com/posts`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPosts(data.posts);
  //     });
  // };
 
  return (
    <div>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && (
        <WelcomMeassage  />
        //<WelcomMeassage onGetPostList={handleGetPostsClick} />
      )}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
