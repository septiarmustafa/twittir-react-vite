import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./page/Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route index element={<Login />} /> */}
          {/* <Route path="/todolist" element={<TodoList2 />} /> */}
          {/* <Route path="/stateful" element={<Stateful />} />
          <Route path="/style" element={<StyleComponent />} /> */}
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
