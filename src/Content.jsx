import { useState, useEffect } from "react";
import axios from "axios";
import { PostsNew } from "./PostsNew";
import { PostsIndex } from "./PostsIndex";
import { PostsShow } from "./PostsShow";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Routes, Route } from "react-router-dom";
import { About } from "./About";

<div className="container"></div>


export function Content() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    console.log('in handle index posts');

    axios.get('http://localhost:3000/posts.json').then(response => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  useEffect(handleIndexPosts, []);

  const handleShowPost = (myPost) => {
    console.log(myPost);
    setIsPostsShowVisible(true)
    setCurrentPost(myPost);
  }
  
  const handleClose = () => {
    console.log('close model')
    setIsPostsShowVisible(false);
  }

  const handleCreatePost = (params) => {
    axios.post('http://localhost:3000/posts.json', params).then(response => {console.log(response.data);
    setPosts([...posts, response.data])
  })
    console.log('handling create post')
}

const handleUpdatePost = (postId, params) => {
  console.log('handling update post...');
  axios.patch(`http://localhost:3000/posts/${postId}.json`, params).then(response => {
    console.log(response.data);
    setPosts(
      posts.map(post => {
        if (post.id === response.data.id) {
          return response.data;
        } else {
          return post;
        }
      })
    )
    setIsPostShowVisible(false);

  })
}

const handleDestroyPost = (postId) => {
  console.log('handling destroy post')
  axios.delete(`http://localhost:3000/posts/${postId}.json`).then(response => {
    console.log(response.data);
    // post.select {|post| post.id != post_id}
    setPosts(post.filter(post => post.id != postId))
  })
}

  return (
    <div>
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
      <Route path="/" element={<PostsIndex posts={posts} onShowPost={handleShowPost}/>} />
    </Routes>
      <br />
      <br />
      <br />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
       <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
    </div>
  );
}
