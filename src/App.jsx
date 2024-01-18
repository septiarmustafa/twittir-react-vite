import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Profile from "./page/Profile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Profile />} />
          {/* <Route path="/todolist" element={<TodoList2 />} /> */}
          {/* <Route path="/stateful" element={<Stateful />} />
          <Route path="/style" element={<StyleComponent />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
