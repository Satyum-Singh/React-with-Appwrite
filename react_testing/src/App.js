import "./App.css";
import { useState } from "react";

function App() {
  const [data,setData] = useState("")

  return (
    <div className="App">
      {/* Test case 1 */}
      <p>First React Test case</p>

      {/* Test case 2 */}
      <input type="text" placeholder="Enter username" name="username" />

      {/* Test case 3 */}
      <input type="text" onChange={(e)=>setData(e.target.value)} value={data} />
    </div>
  );
}

export default App;
