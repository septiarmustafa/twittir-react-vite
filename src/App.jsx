import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Twittir from "./pages/Twittir";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Twittir />} />
          <Route path="/twittir" element={<Twittir />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
