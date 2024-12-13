import { useCallback } from "react";
import { createContext, useReducer,  } from "react";

export const PostList = createContext({
  // addInitialPosts: () => {},
  addPost: () => {},
  deletePost: () => {},
});

  

const PostListReducer = (currentPostList, action) => {
  // console.log(action)
  // console.log(currentPostList)
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

  // const [dataFetched, setDataFetched] = useState(false)
 
  const addPost = (post) => {
    console.log('add post called', post)
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        post
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
        // addInitialPosts,
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
