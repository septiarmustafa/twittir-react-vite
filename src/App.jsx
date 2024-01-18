import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Explore from "./explorePage/Explore";
import Profile from "./page/Profile";
import Login from "./page/Login";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
