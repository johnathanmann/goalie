import {
    HashRouter,
    Routes,
    Route
  } from "react-router-dom";
  
  import Homepage from "./pages/Homepage";
  
  export default function App() {
    return (
      <HashRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </HashRouter>
    );
  }
  