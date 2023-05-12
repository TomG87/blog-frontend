export function PostsShow(props) {
  console.log(props.currentPost)
  return (
    <div>
      <h2>Title: {props.currentPost.title}</h2>
        <h2>Body: {props.currentPost.body}</h2>
        <h2>image: {props.currentPost.image}</h2>
    </div>
  )
}