export function PostsIndex(props) {
  console.log(props.posts);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map(posts => (
        <div key={posts.id} className="posts">
          <h2>{posts.title}</h2>
          <img src={posts.image} alt="" />
          <p>Body: {posts.body}</p>
          <button>More Info</button>
        </div>
      ))}

    </div>
  );
}
