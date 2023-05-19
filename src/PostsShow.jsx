import axios from "axios"

export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new FormData(event.target);
    props.onUpdateProp(props.prop.id, params);


    console.log('handling submit');
  }

  const handleClick = () => {
    console.log('handling click')
    // make a request to rails to do some CRUD
    props.onDestroyPost(props.post.id)
    // after response comes back, update the frontend with whatever rails did
  }
  console.log(props.post)
  console.log(props.post)
  return (
    <div>
   <p><b>Title:</b>{props.post.title}</p>
      <p><b>Body:</b>{props.post.body}</p>
      <p><b>Image:</b>{props.post.image}</p>

      <form onSubmit={handleSubmit}>
        <p>Title: <input name="title" type="text" defaultValue={props.post.title} /></p>
        <p>Body: <input name="body" type="text" defaultValue={props.post.body} /></p>
        <p>Image: <input name="image" type="text" defaultValue={props.post.image} /></p>
        <button type="input">Update post</button>
      </form>

      <br />
      <br />
      <button onClick={handleClick}>Delete post</button>
    </div>
  )
}