import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";
  
  import Homepage from "./pages/Homepage";
  import Signup from "./pages/Signup";
  import Login from "./pages/Login";
  import Nav from "./components/Nav"
  import "../src/styles/styles.css";
  import "../src/styles/theme.css";
  import GoalPage from "./pages/GoalPage";
  
  export default function App() {
    return (
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<GoalPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </HashRouter>
    );
  }
  