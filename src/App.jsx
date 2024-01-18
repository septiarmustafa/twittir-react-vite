import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Explore from "./explorePage/Explore";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
          {/* <Route index element={<Login />} /> */}
          {/* <Route path="/todolist" element={<TodoList2 />} /> */}
          {/* <Route path="/stateful" element={<Stateful />} />
          <Route path="/style" element={<StyleComponent />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
