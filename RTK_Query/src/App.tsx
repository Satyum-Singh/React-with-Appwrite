import { FormEvent, useState } from "react";
import PostCard from "./components/PostCards/PostCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

function App() {
  // Setting up the custom hook created in api.ts
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  console.log(isLoading, isError, isSuccess, data, error);

  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [newPost] = useNewPostMutation();
  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    };

    // Call the mutation
    newPost(post);

    setBody("");
    setTitle("");
  };

  return (
    <div>
      <h1>Redux Toolkit Query Tutorial</h1>

      {/* Data Mutation */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          name="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
        />
        <button type="submit"> Add Post </button>
      </form>

      {/* For Calling data from server */}
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        data?.map((i) => <PostCard key={i.id} post={i} />)
      )}
    </div>
  );
}

export default App;
