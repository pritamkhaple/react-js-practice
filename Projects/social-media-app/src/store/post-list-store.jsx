import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList
  if (action.type === 'DELETE_POST'){
    newPostList = currPostList.filter((post) => post.id !== action.payload.postId)
  }
  return newPostList;
};

export const PostListProvider = ({ children }) => {
  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {postId},
    })
  };

  const [postList, dispatchPostList] = useReducer(postListReducer, DEFAULT_POST_LIST);

  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Dubai",
    body: "I anied oindo wqoidd jwoidqn oiqwjonx inocxn wonxonx wqnxonx qwoWANXONX OQWNON",
    reactions: "2",
    userId: "user-9",
    tags: ["travel", "adventure"],
  },
  {
    id: "2",
    title: "Hurray",
    body: "I anied oindo wqoidd jwoidqn oiqwjonx inocxn wonxonx wqnxonx qwoWANXONX OQWNON",
    reactions: "4",
    userId: "user-5",
    tags: ["happiness", "celebration"],
  },
];
