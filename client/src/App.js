import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";
  
  import Homepage from "./pages/Homepage";
  import Signup from "./pages/Signup";
  import Login from "./pages/Login";
  
  export default function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    );
  }
  