import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Check from "./Check";

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
    </div>
  );
}

export default App;
