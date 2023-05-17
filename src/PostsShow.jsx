import axios from "axios"

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);

    axios.patch(`http://localhost:3000/posts/${props.currentPost.id}.json`, params).then(response => {
      console.log(response.data);
    })
    console.log('handling submit');
  }
  console.log(props.currentPost)
  return (
    <div>
   <p><b>Title:</b>{props.currentPost.title}</p>
      <p><b>Body:</b>{props.currentPost.body}</p>
      <p><b>Image:</b>{props.currentPost.image}</p>

      <form onSubmit={handleSubmit}>
        <p>Title: <input name="title" type="text" defaultValue={props.currentPost.title} /></p>
        <p>Body: <input name="body" type="text" defaultValue={props.currentPost.body} /></p>
        <p>Image: <input name="image" type="text" defaultValue={props.currentPost.image} /></p>
        <button type="input">Update post</button>
      </form>
    </div>
  )
}