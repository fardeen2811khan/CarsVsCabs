import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Cars from "./components/Cars";
import Check from "./components/Contributors";

function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route path="/" element={<> <Header /> <Profile /> </>} />
          <Route path="/interview" element={<> <Header /> <Interview /> </>} />
        </Routes>
      </Router> */}
      <Check/>
      <Cars />
    </div>
  );
}

export default App;
