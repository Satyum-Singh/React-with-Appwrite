import "./App.css";
import { useGetPostsQuery } from "./redux/api";

function App() {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");
  console.log(isLoading, isError, isSuccess, data, error);
  return (
    <div>
      <h1>Redux Toolkit Query Tutorial</h1>
    </div>
  );
}

export default App;
