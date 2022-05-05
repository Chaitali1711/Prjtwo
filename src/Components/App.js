import React from "react";
import { Route, Link, BrowserRouter,Routes} from "react-router-dom";

import One from "./One";
import Two from "./Two";
import Three from "./Three"



const App = () => {
  return (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">One</Link>
          <Link to="/two">Two</Link>
          <Link to="/three">Three</Link>
        </li>
      </ul>
    </div>
    <Routes>
      <Route path="/" element={<One />} />
      <Route path="/two" element={<Two />} />
      <Route path="/three" element={<Three />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
