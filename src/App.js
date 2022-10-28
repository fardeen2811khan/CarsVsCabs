import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Routes,
} from "react-router-dom";
import Cars from "./components/Cars";
import Check from "./components/Contributors";
import Empty from "./components/Empty";
import Info from "./components/Info";
import Item from "./components/Item";
import Main from "./components/Main";
import history from "./history";
import car from "./DataBase/cardata";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/cars" element={<> <Cars /> </>} />
          <Route path="/check" element={<> <Check /> </>} />
          <Route path="/main" element={<> <Main /> </>} />
          <Route path="/info" element={<> <Info /> </>} />
          <Route path="/item" element={<> <Item /> </>} />
          <Route path="item/:price" element={<> <Item/> </>} />
          <Route path="/" element={ <> <Empty /></> } />
        </Routes>
      </Router>
      {/* <Check/> */}
      {/* <Cars /> */}
      {/* <Main /> */}
    </div>
  );
}

export default App;
