import { useCallback } from "react";
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addInitialPosts: () => {},
  addPost: () => {},
  deletePost: () => {},
});

const PostListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(PostListReducer, []);

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };
  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };


  const deletePost = useCallback((postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  },[dispatchPostList])
  // const deletePost = (postId) => {
  //   dispatchPostList({
  //     type: "DELETE_POST",
  //     payload: {
  //       postId,
  //     },
  //   });
  // };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        addInitialPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;

// const DEFAULT_POST_LIST = [
//   {
//     id: "1",
//     title: "Im going Mumbai",
//     body: "Hi Im going the interview for Infosys",
//     reactions: 0,
//     userId: "user-9",
//     tags: ["vacation", "Mumbai", "Enjoying"],
//   },
//   {
//     id: "2",
//     title: "Btech passed",
//     body: "Hi Im going to pass the exam",
//     reactions: 15,
//     userId: "user-12",
//     tags: ["Graduating", "Unbelivable"],
//   },
// ];
