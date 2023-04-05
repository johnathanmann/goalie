import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";
  
  import Homepage from "./pages/Homepage";
  import Signup from "./pages/Signup";
  import Login from "./pages/Login";
  import Goalpage from "./pages/GoalPage";
  import Nav from "./components/Nav"
  import "../src/styles/styles.css";

  
  export default function App() {
    return (
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Goalpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    );
  }
  