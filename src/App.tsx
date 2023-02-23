import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login";
import Home from "./pages/home";
import Shallow from "./pages/shallow";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path={'/'} element={<Home/>}/>
              <Route path={'/login'} element={<Login/>}/>
              <Route path={'/shallow'} element={<Shallow/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
