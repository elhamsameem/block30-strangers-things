import GetAllPosts from "./components/GetAllPosts";
import { Route, Routes } from "react-router";
import Register from "./components/Register";
import "./Style.css";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<GetAllPosts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
