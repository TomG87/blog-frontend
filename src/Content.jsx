import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";

export function Content() {
  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    console.log('in handle index recipes');

    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <br />
      <br />
      <br />
      <PostsIndex posts={posts} />
    </div>
  );
}
